
## 2026-03-25 - Custom Interactive Elements Need ARIA Roles and Keyboard Support
**Learning:** Using `<div>` elements for quiz options requires manual addition of `role="radio"`, `role="radiogroup"` (on the parent), `tabindex="0"`, and `aria-checked` attributes. Without these, screen readers and keyboard users cannot navigate or select options properly. Furthermore, custom elements need explicit `onkeydown` event handlers for `Enter` and `Space` to replicate native `<input type="radio">` behavior.
**Action:** Always verify if custom interactive elements can be replaced with native HTML elements. If custom elements are necessary, explicitly add the required ARIA roles, `tabindex`, and keyboard event handlers.
