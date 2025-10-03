import { useState, useCallback } from 'react'
import CanvasGrid from './components/CanvasGrid'
import ColorPalette from './components/ColorPalette'
import Toolbar from './components/Toolbar'

// Create a 32x32 grid filled with white by default
const createDefaultGrid = (): string[][] => {
  return Array(32).fill(null).map(() => Array(32).fill('#FFFFFF'))
}

function App() {
  const [selectedColor, setSelectedColor] = useState<string>('#000000')
  const [gridState, setGridState] = useState<string[][]>(createDefaultGrid())

  const handlePixelClick = useCallback((row: number, col: number) => {
    setGridState(prevGrid => {
      const newGrid = prevGrid.map(r => [...r])
      newGrid[row][col] = selectedColor
      return newGrid
    })
  }, [selectedColor])

  const handleClear = useCallback(() => {
    setGridState(createDefaultGrid())
  }, [])

  const handleColorSelect = useCallback((color: string) => {
    setSelectedColor(color)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-2xl font-bold text-white mb-4">Pixel Art Canvas</h1>

        <CanvasGrid
          gridState={gridState}
          onPixelClick={handlePixelClick}
        />

        <ColorPalette
          selectedColor={selectedColor}
          onColorSelect={handleColorSelect}
        />

        <Toolbar
          onClear={handleClear}
        />
      </div>
    </div>
  )
}

export default App