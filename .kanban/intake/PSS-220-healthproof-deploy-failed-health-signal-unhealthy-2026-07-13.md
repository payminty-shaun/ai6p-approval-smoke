---
title: "healthproof: deploy failed, health signal unhealthy (2026-07-13)"
id: PSS-220
status: intake
template_type: bug
intake_state: refining
delivery_task_ids: []
created: 2026-07-13
updated: 2026-07-13
priority: high
severity: medium
owner: AI agent + user
source: health-triage
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Optional at first intake. Fill this in during triage or before generating a dev task in `backlog`.

## Affected User Or Surface

healthproof environment — delivery/deploy pipeline (product-sweet-smoke-delivery)

## Actual Behavior

ProjectHealthSignal for environment "healthproof" transitioned unknown → unhealthy at 2026-07-13T09:10:13.504Z. The distilled rollup reports deploy status: failed, with error rate/availability/latency/5xx/alarm-state all n/a (not populated in this rollup).

## Expected Behavior

Deploys to healthproof should complete successfully and the health rollup should report status: healthy, or at minimum should carry populated error-rate/availability metrics rather than n/a.

## Evidence Or Reproduction Clues

- Incident key: 01KR7CFSW63F6B9XDNK77368Z1#product-sweet-smoke-delivery#healthproof#health
- No repo commits or GitHub Actions runs were found on the tenant repo (payminty-shaun/ai6p-approval-smoke) in the window around 2026-07-13; the most recent commit/run activity found was 2026-06-22 (promote-s8prod / deploy-low, both green) and a cluster of failed smoke-ci/promote-uat runs from 2026-06-09/10/18, all already covered by existing auto-intake tickets (e.g. INTAKE-01KVCTBYKM5NA822P7EG69PXE9, INTAKE-01KVCT499QVR25MDPB6M374EPE, INTAKE-01KVCSE82J28WCECH7NF2Y17D3, INTAKE-01KTQERA7XH36A9JNCZ29FE763, INTAKE-01KTQYSSFPMMZ91JZJS2M0KJ0D, INTAKE-01KTQYZRJ3JK8QN8XTFK5AV6TN).
- Board search for "healthproof" / "deploy" / "smoke" turned up no existing open task or PR that specifically covers this healthproof-environment breach or this incident key.
- No log or raw metric access was available for this triage (propose-only, metrics-only session).

## Impact

Deploy pipeline to the healthproof environment is reporting failure, which blocks or risks blocking further promotions through this environment until diagnosed. Severity graded medium: the rollup confirms a real deploy failure (not just a metric gap), but no proximate commit, PR, or failing-CI run could be found in this session to pinpoint a root cause — the visible repo activity is over 3 weeks stale relative to the incident timestamp, so correlation confidence is low.

## Problem Or Opportunity

Health rollup shows deploy status: failed for healthproof with no corroborating recent commit/PR/CI-run evidence found in the repo. Root cause is not yet established from available (metrics-only, propose-only) evidence.

## Scope

Investigate the healthproof deploy pipeline failure specifically; do not conflate with the older, already-ticketed smoke-ci/promote-uat failures from June.

## Proposed Design / Approach

A human/dev should check the actual deploy/CI logs and infra state for the healthproof environment around 2026-07-13T09:10Z (this session had no log or raw-metrics access) to confirm whether this is a new distinct failure or a stale/misfiring alarm, then disposition accordingly.

## Verification Plan

Optional at first intake. Fill this in during triage or before generating a dev task in `backlog`.

## Questions

Optional at first intake. Fill this in during triage or before generating a dev task in `backlog`.

## Refinement Notes

Confidence: LOW-MEDIUM. The rollup's "deploy status: failed" is treated as authoritative evidence of a real breach (medium severity), but no specific commit/PR/workflow run near the incident timestamp could be correlated as the proximate cause — evidence is thin beyond the rollup itself.
