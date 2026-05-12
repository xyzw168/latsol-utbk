## 2026-05-12 - Custom Accessible Radio Buttons

**Learning:** When building custom interactive elements that act like radio buttons (e.g., using `div` elements for quiz options), it's critical to ensure they are accessible via keyboard. Relying solely on `onclick` leaves out users navigating with a keyboard (Tab, Enter, Space). Furthermore, `aria-checked` and `role="radio"` are required to communicate the correct state and role to screen readers, while the parent container needs `role="radiogroup"`. When implementing Space key selection via a `keydown` listener, `e.preventDefault()` must be used to prevent the browser from scrolling down the page.

**Action:** Whenever a custom interactive selection component is created using non-native HTML elements (like `div`), always ensure:
1. The container has `role="radiogroup"` (and `aria-labelledby` if possible).
2. The options have `role="radio"`, `tabindex="0"`, and `aria-checked` to manage state.
3. Keyboard event listeners (`keydown`) are attached to handle 'Enter' and 'Space', with `e.preventDefault()` specifically for 'Space' to avoid unwanted page scrolling.
4. Provide visual focus indicators using `:focus-visible` to support keyboard navigation.
