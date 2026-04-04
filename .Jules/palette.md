
## 2024-05-18 - Keyboard Accessibility for Custom Radio Buttons
**Learning:** When creating custom interactive elements (like options in a quiz using `div`s), attaching click handlers is not enough for accessibility. Users relying on keyboard navigation cannot interact with them.
**Action:** Always add appropriate ARIA roles (`role="radio"` and `role="radiogroup"`), make elements focusable (`tabindex="0"`), manage state explicitly (`aria-checked`), and add `keydown` event listeners to support `Enter` and `Space` key activation, mimicking native input behavior. Furthermore, ensure focus states are clearly visible using `:focus-visible`.
