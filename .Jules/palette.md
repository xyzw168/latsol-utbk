
## 2026-05-05 - Interactive Custom Radio Options
**Learning:** When building custom interactive list items like quiz options without native radio inputs, adding `role="radiogroup"` and `role="radio"` with keyboard event listeners is crucial for screen readers and keyboard users to navigate the options.
**Action:** Always ensure that custom interactive components utilize ARIA roles and support keyboard navigation (Tab/Enter/Space) along with `:focus-visible` styles.
