## 2024-05-18 - Custom Radio Group Accessibility
**Learning:** Using `div` elements for custom interactive options requires manual keyboard management and ARIA roles to simulate native form elements.
**Action:** Always implement `role="radiogroup"` on the parent container, and `role="radio"`, `tabindex="0"`, dynamic `aria-checked` states, along with `keydown` listeners for Enter/Space (using `e.preventDefault()` on Space) on the individual `.option` elements to ensure full accessibility and keyboard navigation.
