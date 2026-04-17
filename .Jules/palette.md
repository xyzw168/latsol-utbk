
## $(date +%Y-%m-%d) - Keyboard Accessibility for Non-Semantic Quiz Options
**Learning:** Custom components like `.option` `div`s used as interactive choices lack native keyboard accessibility. Merely relying on `div.onclick` restricts screen readers and keyboard users. Additionally, global `document.querySelectorAll('.option')` inside loops can introduce scoping and performance issues.
**Action:** Always add `role="radio"`, `tabindex="0"`, dynamic `aria-checked` states, and an `keydown` listener (handling Space/Enter and `e.preventDefault()`) when non-semantic elements mimic radio buttons. Scope DOM queries to the parent container (`box.querySelectorAll`) for better performance and encapsulation.
