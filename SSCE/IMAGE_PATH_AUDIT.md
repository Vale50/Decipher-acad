# SSCE Frontend Image Path Audit

Generated from all HTML files under `SSCE/` to identify why some images render while others fail.

## Scope
- HTML files scanned: **35**
- `<img src>` references scanned: **2691**
- References with one or more issues: **1720**

## Key Findings (Root Causes)
- **absolute_root_path**: 1691
- **whitespace_in_src**: 1121
- **newline_in_src**: 1121
- **missing_target**: 221
- **relative_miracle_path**: 3
- **empty_or_root_only_src**: 2

### Most impactful blockers
1. **Absolute root paths (`/…`)**: 1691 references. These break unless deployment root contains those exact folders.
2. **Missing file targets**: 221 references resolve to files not present in this repository path layout.
3. **Malformed `src` values with whitespace/newlines**: 1121 references include leading/trailing whitespace/newlines.
4. **Invalid empty/root-only src**: 2 references are `src="/"` or equivalent.

## Files with Highest Missing-Image Risk
- `SSCE/BIO/2023/QUESTIONS/2023objbio_original.html` — 161 missing references
- `SSCE/BIO/2023/QUESTIONS/2023objbio.html` — 15 missing references
- `SSCE/BIO/2023/QUESTIONS/bio23.html` — 15 missing references
- `SSCE/BIO/2023/QUESTIONS/test.html` — 15 missing references
- `SSCE/CHEM/2021/QUESTIONS/chem2021obj.html` — 4 missing references
- `SSCE/CHEM/2021/QUESTIONS/chem21.html` — 4 missing references
- `SSCE/PHY/2022/QUESTIONS/2022physicsobjquestions.html` — 2 missing references
- `SSCE/PHY/2022/QUESTIONS/phy22.html` — 2 missing references
- `SSCE/PHY/2021/QUESTIONS/2021physicsobj.html` — 1 missing references
- `SSCE/PHY/2023/QUESTIONS/2023physicsobj.html` — 1 missing references
- `SSCE/PHY/2023/QUESTIONS/phy23.html` — 1 missing references

## Most Repeated Missing `src` Values
- `/3.jpg` — 41 occurrences
- `/2.jpg` — 41 occurrences
- `/4.jpg` — 37 occurrences
- `/1.jpg` — 29 occurrences
- `../IMG/NO 10/OPTION B.png` — 3 occurrences
- `miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/BIO/2023/IMG` — 2 occurrences
- `../IMG/NO 27/OPTION C.png` — 2 occurrences
- `../IMG/Velocity Time Graph/Boyle` — 2 occurrences
- `../IMG/Archimedes principles/Hooke` — 2 occurrences
- `../IMG/Utraviolet/Ultraviolet.png` — 2 occurrences
- `/miracle/BIOLOGY 23/NO 19/OPTION A.png` — 1 occurrences
- `/miracle/BIOLOGY 23/NO 19/OPTION C.png` — 1 occurrences
- `/miracle/BIOLOGY 23/NO 19/OPTION D.png` — 1 occurrences
- `/miracle/BIOLOGY 23/NO 20/OPTION C.png` — 1 occurrences
- `/miracle/BIOLOGY 23/NO 20/OPTION A.png` — 1 occurrences
- `/miracle/BIOLOGY 23/NO 20/OPTION B.png` — 1 occurrences
- `/miracle/BIOLOGY 23/NO 20/OPTION D.png` — 1 occurrences
- `/miracle/BIOLOGY 23/NO 21/OPTION A.png` — 1 occurrences
- `/miracle/BIOLOGY 23/NO 21/OPTION B.png` — 1 occurrences
- `/miracle/BIOLOGY 23/NO 21/OPTION C.png` — 1 occurrences

## Inconsistencies that can cause frontend mix-ups
- Mixed path styles in same file (`../IMG/...`, `/miracle/...`, and `miracle/...`).
- Folder naming contains spaces and mixed case (e.g. `Quarter of wave length`, `The Electron`), making typo risk high.
- Some scripts auto-replace images with `/api/placeholder/...` when src looks malformed; malformed src strings can trigger placeholder fallback even when intended path exists.

## Recommended Normalization Rules
1. Use **one path convention per paper** (prefer relative paths from each HTML file).
2. Trim and sanitize every `src` string (no leading/trailing whitespace or line breaks).
3. Replace root absolute references (`/miracle/...`) with relative repo paths used by the page.
4. Keep folder/file naming consistent; avoid introducing new names that differ only by case or spacing.
5. Keep placeholder substitution only in `onerror` handlers; do not preemptively override valid-looking sources.

## Detailed Output Files
- `SSCE/image-audit-problems.csv` — row-level list of all problematic references with file, line, src, resolved path, and issue tags.
- `SSCE/image-audit-results.json` — full scan results for all image references.

## Files containing image placeholder override logic
- `SSCE/BIO/2023/QUESTIONS/2023objbio.html`
- `SSCE/BIO/2023/QUESTIONS/bio23.html`
- `SSCE/BIO/2023/QUESTIONS/test.html`
- `SSCE/CHEM/2021/QUESTIONS/chem2021obj.html`
- `SSCE/CHEM/2021/QUESTIONS/chem21.html`
- `SSCE/CHEM/2022/QUESTIONS/2022chemistryobjquestions.html`
- `SSCE/CHEM/2022/QUESTIONS/chem22.html`
- `SSCE/CHEM/2023/QUESTIONS/chem23.html`
- `SSCE/CHEM/2023/QUESTIONS/chemistryobj2023.html`
- `SSCE/ENG/2021/QUESTIONS/eng21.html`
- `SSCE/ENG/2023/QUESTIONS/eng23.html`
- `SSCE/PHY/2021/QUESTIONS/2021physicsobj.html`
- `SSCE/PHY/2021/QUESTIONS/phy21.html`
- `SSCE/PHY/2022/QUESTIONS/2022physicsobjquestions.html`
- `SSCE/PHY/2022/QUESTIONS/phy22.html`
- `SSCE/PHY/2023/QUESTIONS/2023physicsobj.html`
- `SSCE/PHY/2023/QUESTIONS/phy23.html`
