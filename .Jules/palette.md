
## 2024-05-09 - Custom Radio Group Accessibility
**Learning:** For custom-built interactive lists like quiz options, relying solely on `div` click events makes them entirely inaccessible to keyboard and screen reader users. The options must mimic native behavior using `role="radiogroup"` on the container and `role="radio"`, `tabindex="0"`, and `aria-checked` dynamically managed on the items. Furthermore, without a visible focus state (`:focus-visible`), keyboard users cannot track their position.
**Action:** Always implement full ARIA radiogroup patterns, explicitly bind `keydown` (Space/Enter) handlers (preventing default scrolling for Space), and ensure distinct `:focus-visible` styling when constructing non-native selection components.
