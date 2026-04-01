## 2026-04-01 - Custom Radio Group Keyboard Accessibility
**Learning:** Standard `div` elements masquerading as a radiogroup fail to communicate state or allow native keyboard navigation for screen readers or keyboard users.
**Action:** When using `div` tags for radio options, explicitly assign `role="radiogroup"` to the parent container and `role="radio"`, `tabindex="0"` to children. Bind `keydown` handlers specifically for Space and Enter keys, toggle `aria-checked`, and implement a `:focus-visible` class to provide distinct visual feedback for keyboard navigation.
