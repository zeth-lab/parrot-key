import json, re, os, sys

FLUSH = "--flush" in sys.argv

HERE = os.path.dirname(__file__)
DESC_DIR = os.path.join(HERE, "desc")
PLAN_DIR = os.path.join(HERE, "plan")
ASSIGNED_PATH = os.path.join(PLAN_DIR, "assigned.json")
BATCH_SIZE = 20

SIZE_RE = re.compile(r"(\d{2,3}(?:\.\d+)?)\s*(?:cm|centimet)", re.IGNORECASE)

def load(p):
    with open(os.path.join(HERE, p), encoding="utf-8") as f:
        return json.load(f)

def safe_filename(sci):
    return re.sub(r"[^A-Za-z0-9_.-]", "_", sci.replace(" ", "_")) + ".txt"

def make_id(sci):
    return re.sub(r"[^a-z0-9]+", "-", sci.lower()).strip("-")

def main():
    os.makedirs(PLAN_DIR, exist_ok=True)
    taxa = load("taxa.json")
    existing = load("existing.json")
    existing_scis = {e["sci"] for e in existing}

    assigned = set()
    if os.path.exists(ASSIGNED_PATH):
        with open(ASSIGNED_PATH, encoding="utf-8") as f:
            assigned = set(json.load(f))

    ready = []
    not_ready_count = 0
    for t in taxa:
        sci = t["sci"]
        if sci in existing_scis or sci in assigned:
            continue
        fname = safe_filename(sci)
        fpath = os.path.join(DESC_DIR, fname)
        if not os.path.exists(fpath):
            not_ready_count += 1
            continue
        with open(fpath, encoding="utf-8") as f:
            desc_text = f.read()
        size_m = SIZE_RE.search(desc_text)
        size_cm = float(size_m.group(1)) if size_m else None
        ready.append({
            "id": make_id(sci),
            "sci": sci,
            "en": t.get("en"),
            "ko": t.get("ko"),
            "koMissing": t.get("ko") is None,
            "extinct": t.get("extinct", False),
            "wikipedia_url": t.get("wikipedia_url"),
            "photo": t.get("photo"),
            "size_cm_hint": size_cm,
            "desc_thin": len(desc_text) < 200,
            "description": desc_text,
        })

    print(f"newly-ready species (not yet in a batch): {len(ready)}")
    print(f"still waiting on wikipedia fetch: {not_ready_count}")

    existing_batches = [f for f in os.listdir(PLAN_DIR) if re.match(r"batch-input-\d+\.json$", f)]
    next_num = len(existing_batches) + 1

    full_count = (len(ready) // BATCH_SIZE) * BATCH_SIZE
    leftover = len(ready) - full_count
    cutoff = len(ready) if FLUSH else full_count
    new_batches = [ready[i:i+BATCH_SIZE] for i in range(0, cutoff, BATCH_SIZE)]
    if leftover and not FLUSH:
        print(f"holding {leftover} ready species for next run (not enough for a full batch yet; use --flush to force)")
    written = []
    for b in new_batches:
        if len(b) == 0:
            continue
        path = os.path.join(PLAN_DIR, f"batch-input-{next_num:02d}.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(b, f, ensure_ascii=False, indent=1)
        written.append(path)
        for s in b:
            assigned.add(s["sci"])
        next_num += 1

    with open(ASSIGNED_PATH, "w", encoding="utf-8") as f:
        json.dump(sorted(assigned), f, ensure_ascii=False, indent=1)

    print(f"batches written this run: {len(written)}")
    for p in written:
        print("  " + p)
    if ready and len(ready) % BATCH_SIZE != 0 and new_batches and len(new_batches[-1]) < BATCH_SIZE:
        print(f"NOTE: last batch has only {len(new_batches[-1])} species (leftover, held until more arrive is optional)")

if __name__ == "__main__":
    main()
