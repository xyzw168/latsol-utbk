## 2025-01-20 - Custom Radio Button Accessibility
**Learning:** Using `div` elements for custom radio buttons (like quiz options) lacks built-in keyboard navigation and screen reader support, preventing non-mouse users from participating.
**Action:** Always add `role="radiogroup"` to the container, and `role="radio"`, `tabindex="0"`, `aria-checked` state management, and `keydown` event listeners (Enter/Space) to the individual custom options.
