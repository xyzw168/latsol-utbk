
## 2025-03-26 - Accessible Quiz Options
**Learning:** Interactive quiz options built with `div` elements require explicit ARIA roles (`role="radiogroup"` and `role="radio"`), keyboard navigation management (`tabindex="0"` and `keydown` listeners for Enter/Space), and state communication (`aria-checked`) to be usable by screen readers and keyboard users.
**Action:** Always apply the custom radio button accessibility pattern when creating interactive, selectable list items without native form controls.
