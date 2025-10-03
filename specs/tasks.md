---
project_name: "Pixel Art Canvas"
file_purpose: "Task Breakdown - Lists the specific, actionable coding tasks needed to implement the design."
status: "Ready for Implementation"
ai_instruction: "Execute the tasks in this file sequentially. After completing a task or a logical group of tasks, update the `changelog.md`."
---
# Tasks: Pixel Art Canvas

### Phase 1: Project Setup
- [x] 1. Initialize new TypeScript + React and Tailwind project using `bun`.
- [x] 2. Create the component folder structure: `/components/CanvasGrid`, `/components/Pixel`, etc.
- [x] 3. Set up basic CSS for a dark theme and center the main app container.

### Phase 2: Static UI Components
- [x] 4. Build `ColorPalette.tsx` to display a hardcoded list of color swatches.
- [x] 5. Build `Pixel.tsx` component that accepts a `color` prop.
- [x] 6. Build `CanvasGrid.tsx` to render a 32x32 grid of static `Pixel` components.
- [x] 7. Build the `Toolbar.tsx` with a static "Clear" button.

### Phase 3: State and Interactivity
- [x] 8. Implement state for `selectedColor` in `ColorPalette.tsx` and lift it to `App.tsx`.
- [x] 9. Implement `gridState` (32x32 array) in `CanvasGrid.tsx` and initialize it with a default color.
- [x] 10. Pass the `gridState` down to the `Pixel` components so they display the correct colors.
- [x] 11. Implement the `handlePixelClick` function to update the `gridState`.
- [x] 12. Connect the `onClick` event from `Pixel` to `handlePixelClick`.

### Phase 4: Final Features & Cleanup
- [x] 13. Implement the `handleClear` function in `Toolbar.tsx` and connect it to the state.
- [x] 14. Refine CSS to match the minimalist theme perfectly.
- [x] 15. Write a basic unit test for the `handleClear` state logic.

### Phase 5: Enhancements (Optional)
- [ ] 16. Add hover effects to `Pixel` components for better UX.
- [ ] 17. Implement keyboard shortcuts for color selection and clearing the canvas.
- [ ] 18. Add drag-to-paint functionality.
- [ ] 19. Add a feature to save and load pixel art (local storage or file download).
