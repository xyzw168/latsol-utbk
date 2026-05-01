## 2024-05-18 - [Radio Options Accessibility]
**Learning:** Interactive `.option` elements acting as radio buttons need full keyboard support. Relying solely on `onclick` leaves out keyboard users who navigate via Tab and select via Space/Enter.
**Action:** Add `role="radio"`, `tabindex="0"`, `aria-checked` and `keydown` event listeners to simulate clicks, while wrapping the container in `role="radiogroup"`.
