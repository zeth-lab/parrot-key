import json, re, time, os, sys, urllib.request, urllib.parse

HERE = os.path.dirname(__file__)
TAXA_PATH = os.path.join(HERE, "taxa.json")
DESC_DIR = os.path.join(HERE, "desc")
SUMMARY_PATH = os.path.join(HERE, "desc_summary.json")
HEADERS = {"User-Agent": "ParrotKey/1.0 (educational project; contact: github.com/parrot-key)"}

os.makedirs(DESC_DIR, exist_ok=True)

SIZE_RE = re.compile(r"(\d{2,3}(?:\.\d+)?)\s*(?:cm|centimet)", re.IGNORECASE)
SECTION_RE = re.compile(r"^(={2,4})\s*(.+?)\s*\1\s*$")

def get_json(url, retries=5):
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.loads(r.read().decode("utf-8"))
        except Exception as e:
            print(f"  retry {attempt+1} for {url}: {e}", file=sys.stderr)
            time.sleep(8 + attempt * 10)
    return None

def title_from_wikipedia_url(url):
    if not url:
        return None
    path = urllib.parse.urlparse(url).path
    title = path.rsplit("/", 1)[-1]
    return urllib.parse.unquote(title).replace("_", " ")

def extract_sections(text):
    lines = text.split("\n")
    sections = []  # list of (level, title, start_line_idx)
    for i, line in enumerate(lines):
        m = SECTION_RE.match(line.strip())
        if m:
            level = len(m.group(1))
            sections.append((level, m.group(2).strip(), i))
    return lines, sections

def pick_description(text):
    lines, sections = extract_sections(text)
    target_names = ("description", "appearance", "taxonomy and description", "identification")
    for idx, (level, title, start) in enumerate(sections):
        if title.lower().strip() in target_names:
            end = len(lines)
            for level2, title2, start2 in sections[idx+1:]:
                if level2 <= level:
                    end = start2
                    break
            body = "\n".join(lines[start+1:end]).strip()
            if body:
                return body, title
    intro_end = sections[0][2] if sections else len(lines)
    intro = "\n".join(lines[:intro_end]).strip()
    return intro[:1500], "intro"

def fetch_extract(title):
    url = ("https://en.wikipedia.org/w/api.php?action=query&prop=extracts"
           f"&explaintext=1&redirects=1&format=json&titles={urllib.parse.quote(title)}")
    d = get_json(url)
    if not d:
        return None
    pages = d.get("query", {}).get("pages", {})
    for pid, v in pages.items():
        if pid == "-1":
            return None
        return v.get("extract", "")
    return None

def safe_filename(sci):
    return re.sub(r"[^A-Za-z0-9_.-]", "_", sci.replace(" ", "_")) + ".txt"

def main():
    with open(TAXA_PATH, encoding="utf-8") as f:
        taxa = json.load(f)

    summary = []
    thin_count = 0
    skipped = 0
    for i, t in enumerate(taxa):
        sci = t["sci"]
        fname = safe_filename(sci)
        fpath = os.path.join(DESC_DIR, fname)
        if os.path.exists(fpath) and os.path.getsize(fpath) > 0:
            with open(fpath, encoding="utf-8") as f:
                body = f.read()
            summary.append({
                "sci": sci, "file": fname, "len": len(body),
                "section": "cached", "size_cm": None, "thin": len(body) < 200,
            })
            skipped += 1
            continue

        title = title_from_wikipedia_url(t.get("wikipedia_url")) or sci
        extract = fetch_extract(title)
        if not extract:
            extract = fetch_extract(sci)
        section_used = None
        size_cm = None
        body = ""
        if extract:
            body, section_used = pick_description(extract)
            m = SIZE_RE.search(extract)
            if m:
                try:
                    size_cm = float(m.group(1))
                except ValueError:
                    size_cm = None
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(body or "")
        is_thin = len(body) < 200
        if is_thin:
            thin_count += 1
        summary.append({
            "sci": sci, "file": fname, "len": len(body),
            "section": section_used, "size_cm": size_cm, "thin": is_thin,
        })
        if (i + 1) % 20 == 0:
            print(f"  processed {i+1}/{len(taxa)} (skipped cached: {skipped}, thin so far: {thin_count})")
        time.sleep(2.5)

    with open(SUMMARY_PATH, "w", encoding="utf-8") as f:
        json.dump(summary, f, ensure_ascii=False, indent=1)

    print(f"DONE: {len(summary)} descriptions saved under {DESC_DIR}")
    print(f"Thin/weak descriptions (<200 chars): {thin_count}")
    for s in summary:
        if s["thin"]:
            print(f"  THIN: {s['sci']} (len={s['len']})")

if __name__ == "__main__":
    main()
