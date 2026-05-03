## 2026-05-03 - Accessible Quiz Options

**Learning:** When dealing with custom quiz components built with `div` elements, applying standard `role="radiogroup"` / `role="radio"` and keyboard handlers is necessary to make it accessible without relying on a full form context.
**Action:** Always ensure custom selection components include `tabindex`, keyboard event listeners, and proper ARIA states (`aria-checked`) to simulate native radio behavior, and verify that a `:focus-visible` outline exists for keyboard navigation.
