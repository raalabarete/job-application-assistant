# AGENTS.md

## What this workspace is

Personal job-application tracking workspace — no code, no build/test/lint, not a git repo. Typical agent tasks: updating the tracker, tailoring CV content for a specific role, drafting cover letters or follow-up emails.

## Tracker

- Two trackers exist and must stay **in sync**: `Tracker.md` (agent-editable) and `Tracker.xlsx` (user's Excel copy). After any tracker change, update `Tracker.md` and **explicitly tell the user what to mirror in Excel**.
- Create an assessment for the ATS success rate whenever the user asks for their success rate for the job descriptions ATS. Follow `00_Templates/ATS_Assessment_Template.md` for the structure of every assessment (chat answer and saved md file).
- List a suggested skills and write a description about each skill.
- Whenever the user asks you to create a Resume/CV based on your assessment, create a docx file using the format of RodLabarete_CV_EN.docx if the job description is in english.

- Mirror the JD phrasing.

- Use these emojis for keywords to identify if my CV implies :
  - ⚠️ : if there are skills close similar to what I have in my CV_Content
  -  ✅ : if it is a complete match
  - ❌ : if there is no match️
<!-- - Never write to `.xlsx` or `.docx` files — binary Office formats can't be edited reliably. A `~$Tracker.xlsx` lock file means the workbook is open in Excel; edits would fail anyway. -->
- Create a folder for each link of a Job description that I will paste.
- Create an md file about the full response of each assessment.
- `Tracker.md` conventions: one row per application; update Status / Next Action / Follow-up Date as things move; move fully closed rows (Rejected, Offer accepted/declined, Withdrawn) to the Archive table at the bottom. Dates are ISO `YYYY-MM-DD`.
- Valid statuses: `In Progress` · `ATS success rate` · `Submitted` · `Interview` · `Offer` · `Rejected` · `Withdrawn`.

## Folder conventions

- Stage folders `01_InProgress` … `05_Rejected` mirror the statuses (no folder for `Withdrawn`). Keep per-application materials (job description, tailored CV, cover letter) in the folder matching the application's current status and move them when the status changes.
- `00_Templates/` is reusable source material, not a pipeline stage — never put application-specific files there.

## CV tailoring

- `00_Templates/CV_Content.md` is the master content library (profile sentences, skills, per-company bullet points). Pull from it when tailoring a CV — never invent roles, employers, or achievements that aren't in it.
- Follow the Tailoring Checklist at the bottom of that file: mirror job-description keywords, reorder bullets by relevance, quantify 2–3 achievements, keep to 1–2 pages.
- `00_Templates/<User's name>_CV_<Language in two to three lettters>.docx` is the base CV (read-only for agents — see binary rule above).
- Context: candidate is a C#/.NET developer applying to roles in Ireland; application materials are in English.
