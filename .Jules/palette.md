## 2024-05-18 - Keyboard Accessible Div-Based Options
**Learning:** In a custom quiz app, using generic `<div>` elements for options completely breaks keyboard navigation and screen readers because they lack semantic meaning and focusability.
**Action:** Always add `tabindex="0"`, `role="radio"`, and `aria-checked` bindings to interactive divs, map `Space`/`Enter` keys to click handlers, and ensure the parent container uses `role="radiogroup"` to establish context.
