## 2026-04-06 - Custom Element Keyboard Navigation
**Learning:** W3C ARIA guidelines dictate that for standard radiogroups, users should cycle through options using Arrow keys, and only the selected radio button should be focusable via the 'Tab' key (roving tabindex).
**Action:** For future custom radio components, consider implementing a 'roving tabindex' and Arrow key navigation for stricter ARIA compliance, rather than just adding 'tabindex=0' to all elements.
