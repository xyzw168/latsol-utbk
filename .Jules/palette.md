## 2024-05-24 - Custom Keyboard Accessibility for Interactive Quiz Options
**Learning:** Interactive elements implemented purely with `div`s and `onclick` listeners miss default keyboard navigation and screen reader support, creating significant accessibility barriers for users relying on non-mouse interactions.
**Action:** Apply `role="radiogroup"` to the container and `role="radio"`, `tabindex="0"`, `aria-checked` toggling, along with custom keydown event listeners for Enter/Space to standard `div`-based custom interactive options to ensure keyboard usability.
