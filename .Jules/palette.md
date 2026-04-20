## 2026-04-20 - Custom Radio Keyboard Accessibility
**Learning:** Interactive list elements functioning as custom radio buttons often lack native keyboard navigation and screen reader semantics (ARIA), alienating keyboard users.
**Action:** Always implement 'role="radio"', 'tabindex="0"', 'aria-checked' toggling, and 'keydown' listeners (with e.preventDefault() for Space) when building custom radio groups.
