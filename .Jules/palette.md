## Journal

## 2026-05-07 - Custom Radio Keyboard Shortcuts Scrolling Prevention
**Learning:** When making a custom component accessible to keyboards by intercepting the 'Space' key (to mimic native checkbox or radio behaviors), you must call `e.preventDefault()` inside the `keydown` event listener to prevent the browser's default behavior of scrolling down the page.
**Action:** Always check and prevent default scrolling when implementing 'Space' key actions for custom UI controls.
