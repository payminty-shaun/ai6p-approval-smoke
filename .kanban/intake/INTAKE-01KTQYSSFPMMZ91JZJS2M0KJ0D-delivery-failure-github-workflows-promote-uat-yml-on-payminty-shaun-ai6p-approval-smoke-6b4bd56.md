---
title: "Delivery failure: .github/workflows/promote-uat.yml on payminty-shaun/ai6p-approval-smoke@6b4bd56"
id: INTAKE-01KTQYSSFPMMZ91JZJS2M0KJ0D
status: intake
template_type: bug
intake_state: refining
delivery_task_ids: []
created: 2026-06-10
updated: 2026-07-25
priority: high
severity: high
owner: auto-intake
source: delivery-webhook:github-actions
tags:
  - delivery
  - failure
  - auto-intake
depends_on: []
related_files:
  - .github/workflows/.github/workflows/promote-uat.yml
comments: 0
attachments: 0
---
## Summary

Optional at first intake. Fill this in during triage or before generating a dev task in `backlog`.

## Affected User Or Surface

Delivery pipeline: .github/workflows/promote-uat.yml

## Actual Behavior

Workflow run 27254479801 (`promote-uat`) on commit 6b4bd566d8cf6d1b2146a5debf592971edbbb7cb failed. Checking the run's job steps: "Set up job", "Checkout reviewed commit", and "Setup Node.js" all succeeded, but the "Configure AWS credentials" step failed (took ~2 minutes before failing). All subsequent steps (Install dependencies, Build, Trigger Amplify RELEASE for uat, Poll Amplify job) were skipped as a result. The commit itself (AI6P-894: add minimal Vite venue site) only adds new files (gitignore, index.html, package.json/lock, src/App.tsx, src/main.tsx, vite-env.d.ts, tsconfig.json, vite.config.ts) — nothing in the commit touches AWS credential configuration.

## Expected Behavior

The `promote-uat` workflow should be able to configure AWS credentials and proceed to build and trigger the Amplify release for the uat environment.

## Evidence Or Reproduction Clues

- Run: https://github.com/payminty-shaun/ai6p-approval-smoke/actions/runs/27254479801

## Impact

The uat promotion pipeline is blocked — this commit (and likely any commit) cannot be promoted to the uat environment until the AWS credentials step succeeds.

## Scope

Optional at first intake. Fill this in during triage or before generating a dev task in `backlog`.

## Proposed Design / Approach

Optional at first intake. Fill this in during triage or before generating a dev task in `backlog`.

## Verification Plan

Optional at first intake. Fill this in during triage or before generating a dev task in `backlog`.

## Questions

```yaml
- question: The failure is in the "Configure AWS credentials" step of the promote-uat workflow, not in the application code added by this commit. This looks like an infrastructure/secrets configuration issue (e.g. missing or expired AWS role/OIDC config, or missing repo secrets) rather than a bug introduced by the code change. Can you confirm whether AWS credentials/secrets for the promote-uat workflow are known to be set up correctly, or whether this is a known-broken pipeline that needs infra attention? No recommendation from me here — I don't have visibility into the AWS/OIDC configuration for this repo.
  status: open
  thread:
    - role: user
      text: The failure is in the "Configure AWS credentials" step of the promote-uat workflow, not in the application code added by this commit. This looks like an infrastructure/secrets configuration issue (e.g. missing or expired AWS role/OIDC config, or missing repo secrets) rather than a bug introduced by the code change. Can you confirm whether AWS credentials/secrets for the promote-uat workflow are known to be set up correctly, or whether this is a known-broken pipeline that needs infra attention? No recommendation from me here — I don't have visibility into the AWS/OIDC configuration for this repo.
```

## Refinement Notes

Optional at first intake. Fill this in during triage or before generating a dev task in `backlog`.
