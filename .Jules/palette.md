## 2024-05-24 - Accessible Custom Radio Buttons
**Learning:** Custom interactive elements (like `.option` elements replacing radio buttons) require explicit ARIA roles (`role="radio"`), states (`aria-checked`), and keyboard event handlers (Space/Enter) to be accessible to screen readers and keyboard users. `role="radiogroup"` should be applied to their container.
**Action:** When implementing custom selection UIs, always ensure full ARIA attribute coverage and keyboard navigation parity with native input elements.
