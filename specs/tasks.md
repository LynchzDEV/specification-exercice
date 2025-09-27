# Tasks: Pixel Art Canvas

### Phase 1: Project Setup
- [ ] 1. Initialize new TypeScript + React project using `bun`.
- [ ] 2. Create the component folder structure: `/components/CanvasGrid`, `/components/Pixel`, etc.
- [ ] 3. Set up basic CSS for a dark theme and center the main app container.

### Phase 2: Static UI Components
- [ ] 4. Build `ColorPalette.tsx` to display a hardcoded list of color swatches.
- [ ] 5. Build `Pixel.tsx` component that accepts a `color` prop.
- [ ] 6. Build `CanvasGrid.tsx` to render a 32x32 grid of static `Pixel` components.
- [ ] 7. Build the `Toolbar.tsx` with a static "Clear" button.

### Phase 3: State and Interactivity
- [ ] 8. Implement state for `selectedColor` in `ColorPalette.tsx` and lift it to `App.tsx`.
- [ ] 9. Implement `gridState` (32x32 array) in `CanvasGrid.tsx` and initialize it with a default color.
- [ ] 10. Pass the `gridState` down to the `Pixel` components so they display the correct colors.
- [ ] 11. Implement the `handlePixelClick` function to update the `gridState`.
- [ ] 12. Connect the `onClick` event from `Pixel` to `handlePixelClick`.

### Phase 4: Final Features & Cleanup
- [ ] 13. Implement the `handleClear` function in `Toolbar.tsx` and connect it to the state.
- [ ] 14. Refine CSS to match the minimalist theme perfectly.
- [ ] 15. Write a basic unit test for the `handleClear` state logic.
