## 2024-05-24 - Add keyboard accessibility to quiz options
**Learning:** Custom interactive elements (like `.option` divs for multiple-choice questions) lack native keyboard navigation and screen reader support out of the box. Using `div`s with `onclick` handlers ignores Tab-focusability and Enter/Space interaction.
**Action:** Always add `tabindex="0"`, `role="radio"` (within a `role="radiogroup"`), manage `aria-checked` state, and implement `keydown` listeners for Enter/Space to ensure custom options are accessible to keyboard and screen reader users. Also provide `:focus-visible` styles.
