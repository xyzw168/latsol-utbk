
## 2024-04-11 - Custom Div-Based Radio Groups Keyboard Accessibility
**Learning:** When using custom `div`-based radio groups (like `.option` elements), simply adding `tabindex="0"` is not enough. You must also manage the `aria-checked` state, apply a proper `role="radio"`, and bind `keydown` events (Space and Enter) to ensure keyboard selection functions parity with mouse clicks. Using `e.preventDefault()` on Space prevents unwanted page scrolling. Additionally, the `:focus-visible` pseudo-class is crucial for providing clear focus outlines for keyboard users without displaying them for mouse clicks.
**Action:** Always ensure full ARIA roles (`radiogroup`, `radio`), state (`aria-checked`), and keydown handlers are added when building interactive lists with `div`s.
