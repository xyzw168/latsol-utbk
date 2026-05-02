## 2024-05-24 - Interactive Div Accessibility
**Learning:** Using generic `div` elements for custom interactive controls (like quiz options) completely strips away native keyboard support and screen reader semantics.
**Action:** Always add `tabindex="0"`, appropriate ARIA roles (e.g., `role="radio"`), `aria-checked` states, and handle `keydown` events (Space/Enter) to mimic native behavior and ensure full accessibility.
