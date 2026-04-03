## 2024-04-03 - Custom Radio Group Accessibility
**Learning:** Custom interactive elements (like the `.option` quiz choices) built entirely in JS require robust manual ARIA and keyboard handling (`role="radiogroup"`/`role="radio"`, `tabindex="0"`, `aria-checked` states, and `keydown` mapping to `click()`).
**Action:** When evaluating custom JS components in this app, verify if they act as standard inputs (like radios or checkboxes). If so, always ensure they are fully navigable via `Tab` and selectable via `Space`/`Enter` keys, and use `:focus-visible` to prevent muddying the click UX.
