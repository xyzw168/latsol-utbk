## 2026-04-22 - [Quiz Options Keyboard Navigation]
**Learning:** Custom interactive elements (like `div.option` used as radio buttons) completely lock out keyboard users if they lack `tabindex` and `keydown` support, even if visual styles indicate a selected state. Native focus-visible heuristics in browsers require distinct CSS rules for non-native inputs.
**Action:** Always verify keyboard accessibility on non-native interactive elements by ensuring ARIA roles (radiogroup/radio), focusability (`tabindex="0"`), accessible state (`aria-checked`), and explicit key event handling (Space/Enter).
