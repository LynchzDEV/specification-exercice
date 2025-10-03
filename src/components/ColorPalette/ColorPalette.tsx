import React from 'react'

const colors = [
  '#FFFFFF', // White
  '#000000', // Black
  '#FF0000', // Red
  '#00FF00', // Green
  '#0000FF', // Blue
  '#FFFF00', // Yellow
  '#FF00FF', // Magenta
  '#00FFFF', // Cyan
  '#FFA500', // Orange
  '#800080', // Purple
  '#FFC0CB', // Pink
  '#A52A2A', // Brown
  '#808080', // Gray
  '#C0C0C0', // Silver
  '#800000', // Maroon
  '#008000', // Dark Green
]

interface ColorPaletteProps {
  selectedColor?: string
  onColorSelect?: (color: string) => void
}

const ColorPalette: React.FC<ColorPaletteProps> = ({
  selectedColor = '#000000',
  onColorSelect = () => {}
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-white text-sm font-medium mb-3 text-center">Color Palette</h3>
      <div className="grid grid-cols-8 gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onColorSelect(color)}
            className={`
              w-8 h-8 rounded border-2 transition-all duration-200 hover:scale-110
              ${selectedColor === color
                ? 'border-white shadow-lg'
                : 'border-gray-600 hover:border-gray-400'
              }
            `}
            style={{ backgroundColor: color }}
            title={color}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
      <div className="mt-3 text-center">
        <span className="text-gray-400 text-xs">Selected: </span>
        <span className="text-white text-xs font-mono">{selectedColor}</span>
      </div>
    </div>
  )
}

export default ColorPalette