# bipashak

Personal academic website for Dr Bipasha Kashyap, with research, publications, supervision, teaching, achievements, talks and five interactive instruments.

## Preview

Open `index.html` for the academic pages. Microphone, camera and motion demonstrations require HTTPS or localhost, browser permission and supported hardware.

## Edit

Academic page content and the shared page layout are in `build.mjs`. Run `node build.mjs` to regenerate the eight pages, bibliography and 404 page. Styling is in `style.css`. The generated HTML is committed so hosting needs no build tools. Instrument HTML files are self-contained and edited directly.

The instruments are research demonstrations, not medical devices. Their browser implementations have not been established as equivalent to validated study systems. Four sensor instruments include clearly labelled synthetic examples that work without hardware access. Recording can be cancelled; leaving a page stops capture. Finger tapping supports touch, mouse, Space and Enter.

## GitHub Pages

This repository is named `bipashak`, so the default project-site URL is `https://bipashak2020.github.io/bipashak/` once GitHub Pages is enabled. All ordinary site links are relative to support that path. The 404 home link assumes this repository name.

To publish, use Settings > Pages > Deploy from a branch > main > / (root). Private-repository Pages availability depends on the GitHub plan; the repository can remain private during preparation. Publishing and visibility changes are separate from adding these files.

## Content sources

- Biography, research direction, teaching and selected achievements: owner's supplied page-by-page biography.
- Current appointments, university email, profile photo and ORCID: https://experts.deakin.edu.au/37446-bipasha-kashyap
- Publication metadata: Deakin research outputs and Crossref DOI records, checked 22 September 2026.
- 2026 preprint: https://arxiv.org/abs/2602.20592
- Research illustration: owner-provided image.
- Instruments: adapted from the existing local Five Small Instruments project.

The publication list contains 18 records verified against available sources, not a claim of exhaustive coverage. The 2026 item is labelled as a preprint. Pending grant outcomes, unconfirmed software releases, clinical deployment details, citation metrics and student identities are omitted. The time-series ensemble paper is dated 2025 using its DOI record; FedXPro uses its 2024 publication year. The Engineering Design unit code is omitted because the supplied biography and public university record disagree.

The speech timing reference uses DOI `10.1016/j.bspc.2019.101759`; the previous demo had an incorrect final digit. It is described as related research rather than validation of this connected-speech demonstration.

No analytics or recording-upload service is included. These demos keep captured samples in browser memory. No clinical accuracy or cross-device validation claim is made.
