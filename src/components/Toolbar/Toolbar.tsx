import React from 'react'

interface ToolbarProps {
  onClear?: () => void
}

const Toolbar: React.FC<ToolbarProps> = ({ onClear }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="flex justify-center">
        <button
          onClick={onClear}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Clear Canvas
        </button>
      </div>
    </div>
  )
}

export default Toolbar