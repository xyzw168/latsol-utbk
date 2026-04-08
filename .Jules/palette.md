
## 2024-04-08 - Div-Based Radio Button Keyboard Accessibility
**Learning:** When using generic `<div>` elements as interactive quiz options, they inherently lack keyboard accessibility, creating a significant barrier for users navigating via keyboard.
**Action:** Always implement full custom radio button mechanics: `role="radio"`, `tabindex="0"`, dynamic `aria-checked`, a parent `role="radiogroup"`, and an event listener mapping `Enter` and `Space` keys to selection actions. Additionally, use `:focus-visible` pseudo-class for accessible outline styles.
