---
title: "Review-lane live-capture probe"
id: "PSS-900"
status: doing
template_type: implementation-task
created: "2026-06-14"
updated: "2026-06-14"
priority: low
owner: "AI agent"
tags: ["smoke", "review"]
comments: 0
attachments: 0
---

## Summary
Add a tiny pure `greet(name)` helper returning `"hello, <name>"`, with a unit test asserting
that exact output. Exercises the AI6P-1046 Route C review lane end-to-end on the sacrificial repo.

## Scope
- Add `src/greet.js` exporting `greet(name)`.
- Add `src/greet.test.js` asserting `greet("world") === "hello, world"`.

## Out Of Scope
- Anything beyond the greet helper.

## Implementation Plan
1. Add `greet`. 2. Add its test.

## Verification Plan
- The test asserts the exact returned string.
