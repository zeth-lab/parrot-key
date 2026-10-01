import json, time, urllib.request, urllib.error, sys, os

BASE = "https://api.inaturalist.org/v1"
HEADERS = {"User-Agent": "parrot-key-species-collector/1.0 (research/non-commercial)"}
ALLOWED_LICENSE_PREFIX = ("cc0", "cc-by")  # covers cc-by, cc-by-sa, cc-by-nc, cc-by-nc-sa, cc-by-nc-nd

def get_json(url, retries=3):
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.loads(r.read().decode("utf-8"))
        except Exception as e:
            print(f"  retry {attempt+1} for {url}: {e}", file=sys.stderr)
            time.sleep(2 + attempt * 2)
    raise RuntimeError(f"failed to fetch {url}")

def photo_from(photo):
    if not photo:
        return None
    lic = (photo.get("license_code") or "").lower()
    if not any(lic.startswith(p) for p in ALLOWED_LICENSE_PREFIX):
        return None
    attrib = photo.get("attribution") or ""
    src = photo.get("medium_url") or photo.get("url")
    if not src:
        return None
    return {"src": src, "credit": f"{attrib} ({lic}) / iNaturalist"}

def find_fallback_photo(taxon_id):
    try:
        d = get_json(f"{BASE}/taxa/{taxon_id}")
    except Exception:
        return None
    results = d.get("results") or []
    if not results:
        return None
    for tp in results[0].get("taxon_photos", []):
        p = photo_from(tp.get("photo"))
        if p:
            return p
    return None

def main():
    out_path = os.path.join(os.path.dirname(__file__), "taxa.json")
    order_id = 18874  # Psittaciformes, confirmed via API lookup
    page = 1
    per_page = 200
    all_taxa = []
    while True:
        url = f"{BASE}/taxa?taxon_id={order_id}&rank=species&is_active=true&per_page={per_page}&locale=ko&all_names=true&page={page}"
        print(f"fetching page {page} ...")
        d = get_json(url)
        results = d.get("results", [])
        if not results:
            break
        all_taxa.extend(results)
        total = d.get("total_results", 0)
        print(f"  got {len(results)} (total so far {len(all_taxa)} / {total})")
        if len(all_taxa) >= total:
            break
        page += 1
        time.sleep(1)

    print(f"Total species taxa fetched: {len(all_taxa)}")

    species = []
    no_photo_count = 0
    for i, t in enumerate(all_taxa):
        sci = t.get("name")
        en = t.get("english_common_name")
        ko = t.get("preferred_common_name")
        has_ko = any(n.get("locale") == "ko" for n in t.get("names", []))
        if not has_ko:
            ko = None
        photo = photo_from(t.get("default_photo"))
        if not photo:
            photo = find_fallback_photo(t["id"])
            time.sleep(0.3)
        if not photo:
            no_photo_count += 1
        species.append({
            "taxon_id": t["id"],
            "sci": sci,
            "en": en,
            "ko": ko,
            "wikipedia_url": t.get("wikipedia_url"),
            "extinct": bool(t.get("extinct")),
            "photo": photo,
        })
        if (i + 1) % 20 == 0:
            print(f"  processed {i+1}/{len(all_taxa)} (no photo so far: {no_photo_count})")

    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(species, f, ensure_ascii=False, indent=1)

    print(f"DONE: {len(species)} species saved to {out_path}")
    print(f"No-photo species: {no_photo_count}")

if __name__ == "__main__":
    main()
