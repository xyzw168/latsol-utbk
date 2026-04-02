## 2024-04-02 - Custom Radio Option Accessibility
**Learning:** Interactive quiz options (`.option` elements) visually styled as buttons but acting as a single choice group need full keyboard and screen reader accessibility mimicking native `<input type="radio">`.
**Action:** Always wrap custom radio options in a `role="radiogroup"` container with `aria-labelledby` pointing to the question text. For each option, set `role="radio"`, `tabindex="0"`, toggle `aria-checked` dynamically, and bind both `click` and `keydown` (Space/Enter) events to the selection logic.
