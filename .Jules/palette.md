## 2026-04-27 - [Custom Radio Button Keyboard Nav]
**Learning:** When implementing custom radio buttons out of `<div>` elements, mapping `aria-checked` and `role="radio"` is insufficient for keyboard usability. Explicit `tabindex="0"` and custom keydown listeners mapping Enter/Space to selection logic (with `e.preventDefault()` on Space to stop page scrolling) are required.
**Action:** Always bind Enter and Space key events with scroll prevention when converting non-interactive elements into custom inputs.
