AI6P-887 live E2E: this top-level (non-src) commit advances main HEAD past the
pinned promote commit af26bc3525f77af88426547d3a0ececcd99ebd10 so the live drive
proves the promote shipped the PINNED reviewed commit, not main HEAD. It does NOT
touch src/** so it does not trigger deploy-low (low env stays on af26bc35).
