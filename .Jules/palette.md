## 2024-06-01 - Keyboard Accessibility for Custom Radio Options
**Learning:** When building custom interactive elements like radio options (`.option`), simply relying on `onclick` leaves keyboard users unable to select options. Elements must explicitly define `role="radio"`, `tabindex="0"`, and `aria-checked` states.
**Action:** Always complement `onclick` with `onkeydown` (specifically handling `Enter` and `Space` with `e.preventDefault()`) and proper ARIA state toggles for custom form controls.
