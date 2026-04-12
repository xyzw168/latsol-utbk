## 2024-04-12 - Custom Radio Button Accessibility

**Learning:** When building custom radio button groups (e.g., clickable `div` elements acting as quiz options), visual selection states are insufficient for screen readers and keyboard users. Elements styled to look like radio buttons need explicit `role="radio"`, `tabindex="0"`, and `aria-checked` attributes. Moreover, their parent container must use `role="radiogroup"` with an appropriate label (like `aria-labelledby`). Relying solely on `onclick` handlers breaks keyboard accessibility; custom implementations must manually map Space/Enter keys to trigger clicks, and specifically for Space, prevent default scrolling (`e.preventDefault()`).

**Action:** Whenever implementing custom interactive lists that behave like single-choice options, enforce the ARIA radiogroup/radio pattern from the start and explicitly test keyboard selection behavior.
