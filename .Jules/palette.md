## 2026-04-28 - Added keyboard accessibility to custom radio buttons
**Learning:** When creating custom interactive elements (like div-based radio buttons), it's crucial to provide full keyboard support (tabindex, keydown listener) and ARIA semantics (role, aria-checked) alongside visual feedback (:focus-visible) to make them usable.
**Action:** In future, immediately check custom UI elements for keyboard navigability and ARIA state management.
