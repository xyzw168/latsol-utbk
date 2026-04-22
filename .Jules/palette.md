## 2026-04-22 - Keyboard Accessible Options
**Learning:** Interactive custom UI elements like quiz options need explicit `role="radio"` and `:focus-visible` styles for predictable keyboard navigation (Tab and Space selection).
**Action:** Always verify `role`, `tabindex`, `aria-checked`, and `keydown` events when building custom form/selection components without native semantic inputs.
