# Job Applications Workspace

Personal workspace for managing job applications: tracking applications, tailoring CVs per role, and drafting cover letters and follow-up emails. Contains an Angular frontend (`Frontend_JobApplication/`) for user interface and a .NET backend (`Backend_JobApplication/`) as a storage for user skills, creation/editor of docx and xlsx files, and to connect to the LLMs. Plus the agent-assisted tracking workspace under `Backend_JobApplication/Infastructure/AI/`.

## First Instructions for Your Agent

1. **It is important for your agent to create the `CV_Content.md` and a template for your CV.** Everything else depends on these two files:
   - `Backend_JobApplication/Infastructure/AI/00_Templates/CV_Content.md` — the master content library (profile sentences, skills, per-company bullet points). The agent pulls from it when tailoring a CV and must never invent roles, employers, or achievements that aren't in it.
   - `Backend_JobApplication/Infastructure/AI/00_Templates/<YourName>_CV_<LANG>.docx` — the base CV template (e.g. `RodLabarete_CV_EN.docx`). Every tailored CV the agent produces follows this format.
2. Keep both trackers in sync: `Tracker.md` (agent-editable) and `Tracker.xlsx` (Excel copy). After any change, the agent must explicitly tell you what to mirror in Excel.
3. Paste a job-description link and the agent creates a folder for it, runs an ATS success-rate assessment (following `00_Templates/ATS_Assessment_Template.md`), and saves the full assessment as an md file.

## Workflow

1. **New application** — paste the job description; the agent creates a folder in `01_InProgress/` with the JD and the ATS assessment.
2. **Tailor the CV** — the agent pulls content from `CV_Content.md`, mirrors the JD phrasing, and generates a docx in the format of the base CV template.
3. **Track progress** — one row per application in `Tracker.md`; update Status / Next Action / Follow-up Date as things move; move closed rows to the Archive table.
4. **Move folders** — per-application materials live in the stage folder matching the current status (`01_InProgress` … `05_Rejected`, `06_Ghosted`).

## Folder Conventions

- `00_Templates/` — reusable source material (CV content library, CV template, assessment template). Never put application-specific files here.
- `01_InProgress/` … `06_Ghosted/` — pipeline stages mirroring the application statuses.
- Valid statuses: `In Progress` · `ATS success rate` · `Submitted` · `Interview` · `Offer` · `Rejected` · `Withdrawn`.
- Dates are ISO `YYYY-MM-DD`.

## Keyword Match Legend

When assessing a JD against `CV_Content.md`:

- ✅ complete match
- ⚠️ close/similar skill already in the CV content
- ❌ no match

## Notes

- The Backend will serve as program which creates the docx and xlsx files
- See `Backend_JobApplication/Infastructure/AI/AGENTS.md` for the full agent rules.
