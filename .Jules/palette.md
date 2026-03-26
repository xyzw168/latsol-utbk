## 2026-03-26 - Interactive Quiz Options Keyboard Accessibility
**Learning:** Custom interactive elements acting as radio buttons (like quiz options using `.option`) require explicit keyboard accessibility support and semantic structure for screen readers, which is not provided natively by `<div>` tags.
**Action:** Ensure all non-native interactive form controls implement appropriate ARIA roles (`role="radio"`, `role="radiogroup"`), keyboard focus (`tabindex="0"`), state management (`aria-checked`), and respond to `Enter` and `Space` keydown events.
