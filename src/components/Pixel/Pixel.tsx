import React from 'react'

interface PixelProps {
  color: string
  row: number
  col: number
  onClick?: (row: number, col: number) => void
}

const Pixel: React.FC<PixelProps> = ({ color, row, col, onClick }) => {
  const handleClick = () => {
    onClick?.(row, col)
  }

  return (
    <button
      onClick={handleClick}
      className="w-4 h-4 border-[0.5px] border-gray-500 hover:border-gray-300 transition-colors duration-75 focus:outline-none focus:ring-1 focus:ring-white"
      style={{ backgroundColor: color }}
      aria-label={`Pixel at row ${row}, column ${col}, color ${color}`}
    />
  )
}

export default Pixel