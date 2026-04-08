## 2026-04-08 - Keyboard Accessibility for Custom Options
**Learning:** In static HTML/JS quiz apps using div elements as options, keyboard support must be manually implemented (tabindex, keydown listeners) alongside ARIA roles (radiogroup, radio, aria-checked).
**Action:** Always ensure custom interactive elements like custom radio buttons or options have explicit keyboard events and ARIA states toggled correctly, and verify them via Playwright Tab and Space navigation.
