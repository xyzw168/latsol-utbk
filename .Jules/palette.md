## 2024-05-26 - Custom Interactive Options Accessibility
**Learning:** Custom interactive elements like quiz options (using `div`s) require manual implementation of ARIA roles (`radiogroup` and `radio`), keyboard support (`keydown` for Space/Enter), and visual feedback (`:focus-visible`) to be accessible. Users rely on visual cues and screen readers need correct roles and ARIA states to interpret custom inputs correctly.
**Action:** When building custom option lists, ensure they have proper ARIA attributes, keyboard support, and `:focus-visible` styling applied.
