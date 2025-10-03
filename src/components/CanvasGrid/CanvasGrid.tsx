import React from 'react'
import Pixel from '../Pixel'

interface CanvasGridProps {
  gridState?: string[][]
  onPixelClick?: (row: number, col: number) => void
}

// Create a 32x32 grid filled with white by default
const createDefaultGrid = (): string[][] => {
  return Array(32).fill(null).map(() => Array(32).fill('#FFFFFF'))
}

const CanvasGrid: React.FC<CanvasGridProps> = ({
  gridState = createDefaultGrid(),
  onPixelClick
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-white text-sm font-medium mb-3 text-center">32x32 Canvas</h3>
      <div
        className="grid gap-0 border border-gray-600 bg-white"
        style={{
          gridTemplateColumns: 'repeat(32, 1fr)',
          gridTemplateRows: 'repeat(32, 1fr)'
        }}
      >
        {gridState.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <Pixel
              key={`${rowIndex}-${colIndex}`}
              color={color}
              row={rowIndex}
              col={colIndex}
              onClick={onPixelClick}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default CanvasGrid