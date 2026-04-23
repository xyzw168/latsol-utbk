## 2023-10-27 - Custom Radio Group Accessibility
**Learning:** Custom UI components masquerading as radio groups need explicit `role="radiogroup"`, `aria-labelledby` for context, and individual elements need `role="radio"`, `aria-checked`, `tabindex="0"`, and keyboard handlers (Enter/Space) to be accessible to screen readers and keyboard users. `e.preventDefault()` is crucial on Space to prevent page scrolling.
**Action:** Always verify custom select/radio UI components for proper ARIA roles, states (`aria-checked`), and keyboard navigation (Tab focus + Space/Enter selection).
