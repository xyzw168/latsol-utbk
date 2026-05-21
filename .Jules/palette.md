## 2026-05-21 - [Quiz Option Keyboard Accessibility]
**Learning:** Custom 'div'-based radio groups need full manual ARIA implementation including 'role="radiogroup"', 'role="radio"', dynamic 'aria-checked', and 'keydown' handlers. Specifically, preventing default behavior on 'Space' keypresses is necessary to stop the page from scrolling down when selecting an option.
**Action:** When building interactive lists out of non-native form elements, strictly follow ARIA specifications for radio groups and always handle Spacebar scrolling side effects during keyboard navigation.
