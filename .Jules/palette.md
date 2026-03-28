## 2024-03-24 - Interactive quiz options accessibility
**Learning:** The custom quiz options (`.option`) lacked keyboard accessibility (no `tabindex`, `role`, or `aria-checked`) making it impossible for screen reader and keyboard-only users to navigate and select answers.
**Action:** Implemented custom keyboard accessibility using `role="radio"`, `tabindex="0"`, `aria-checked` toggling, and `keydown` event listeners for Enter/Space keys.
