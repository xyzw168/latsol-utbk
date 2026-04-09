## 2026-04-09 - Accessible Custom Radio Buttons
**Learning:** Interactive quiz options implemented as `<div>` elements with `onclick` handlers are inaccessible to screen readers and keyboard users.
**Action:** Implemented a reusable pattern for custom radio elements by adding `role="radiogroup"` to the container and `role="radio"`, `tabindex="0"`, `aria-checked`, and `keydown` handlers (Enter/Space) to the options. Used `.option:focus-visible` for styling.
