# Design: Pixel Art Canvas

## 1. Frontend Architecture
- **Framework:** React with TypeScript.
- **State Management:** We will use React's built-in hooks (`useState`) for managing the grid state and the selected color. This is sufficient for the app's complexity.
- **Styling:** CSS Modules for component-scoped styles to maintain a clean structure.

## 2. Component Breakdown
The application will be broken down into the following components:

- **`App.tsx`**: The root component that holds the main layout and state.
- **`CanvasGrid.tsx`**: Renders the 32x32 grid. It will hold the state for all pixel colors and the logic for updating them.
- **`Pixel.tsx`**: Represents a single cell in the grid. It will receive its color as a prop and handle its own `onClick` event.
- **`ColorPalette.tsx`**: Displays the available colors. It manages the state for the currently selected color and passes it up to `App.tsx`.
- **`Toolbar.tsx`**: A simple component that contains action buttons like "Clear".



## 3. Data Model (State Shape)
The application's state will be structured as follows:

```typescript
// In App.tsx or a central state hook
interface AppState {
  // A 2D array representing the 32x32 grid.
  // Each string is a hex color code (e.g., "#FFFFFF").
  gridState: string[][];

  // The currently selected color from the palette.
  selectedColor: string;
}
```
## 4. Key Logic
- Painting a Pixel:
  1. The Pixel component has an onClick handler.
  2. This handler calls a function passed down from CanvasGrid (e.g., handlePixelClick(row, col)).
  3. handlePixelClick creates a new copy of the gridState array, updates the color at [row][col] to the selectedColor, and then updates the state using setGridState().
- Clearing the Canvas:
  1. The "Clear" button in Toolbar.tsx calls a handleClear() function.
  2. handleClear() generates a fresh 32x32 array filled with the default background color and updates the state.
