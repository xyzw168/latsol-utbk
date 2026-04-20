## 2024-05-24 - Custom Quiz Options Accessibility
**Learning:** The quiz interface uses custom `div` elements for multiple-choice options (`.option`) instead of native radio inputs, making them completely inaccessible to keyboard and screen reader users by default.
**Action:** Always ensure custom interactive elements receive `role`, `tabindex="0"`, dynamic `aria-` states (like `aria-checked`), and proper keyboard event listeners (handling 'Enter' and 'Space' with `e.preventDefault()`) when refactoring or adding new custom controls in this app.
