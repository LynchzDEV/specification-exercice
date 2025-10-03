# 🎨 Pixel Art Canvas

A minimalist, browser-based pixel art editor for creating 32x32 pixel art. Built with React, TypeScript, and Tailwind CSS.

![Pixel Art Canvas](https://img.shields.io/badge/React-18-blue?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue?logo=tailwindcss) ![Vite](https://img.shields.io/badge/Vite-4.5-purple?logo=vite)

## ✨ Features

- **32x32 Pixel Grid**: Perfect canvas size for creating pixel art
- **16-Color Palette**: Curated selection of colors for artistic expression
- **Click to Paint**: Intuitive pixel painting with selected colors
- **Clear Canvas**: Reset the entire canvas with one click
- **Minimalist Design**: Clean, dark theme for distraction-free creation
- **Responsive Layout**: Centered design that works on all screen sizes
- **TypeScript**: Full type safety throughout the application
- **Comprehensive Tests**: Unit tests with Vitest and React Testing Library

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd specification-exercice
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run test` - Run unit tests

## 📖 How to Use

1. **Select a Color**: Click on any color in the palette below the canvas
2. **Paint Pixels**: Click on any cell in the 32x32 grid to paint it with your selected color
3. **Change Colors**: Select a different color and continue painting
4. **Clear Canvas**: Click the "Clear Canvas" button to reset all pixels to white

## 🏗️ Architecture

### Component Structure

```
src/
├── components/
│   ├── CanvasGrid/         # 32x32 pixel grid component
│   ├── ColorPalette/       # Color selection component
│   ├── Pixel/              # Individual pixel component
│   └── Toolbar/            # Action buttons (Clear)
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

### Key Technologies

- **React 18**: Modern React with functional components and hooks
- **TypeScript 5.2**: Full type safety and enhanced developer experience
- **Tailwind CSS 3.4**: Utility-first CSS framework for rapid styling
- **Vite 4.5**: Fast build tool and development server
- **Vitest**: Lightning-fast unit testing framework

### State Management

The application uses React's built-in state management with `useState` hooks:

- `selectedColor`: Currently selected color from the palette
- `gridState`: 32x32 2D array representing the pixel canvas

## 🧪 Testing

The application includes comprehensive unit tests covering:

- Component rendering
- User interactions (color selection, pixel painting)
- State management (clear functionality)
- Accessibility features

Run tests with:
```bash
bun run test
```

## 🎯 Requirements Fulfilled

This implementation satisfies all specified requirements:

### Functional Requirements
- ✅ 32x32 pixel grid display
- ✅ Color palette for color selection
- ✅ Click-to-paint functionality
- ✅ Color changing for existing pixels
- ✅ Clear canvas functionality

### Non-Functional Requirements
- ✅ Minimalist UI design
- ✅ Instantaneous pixel painting (< 50ms)
- ✅ Centered layout (horizontal and vertical)
- ✅ Color palette positioned below canvas

### Technical Requirements
- ✅ TypeScript implementation
- ✅ React with modern hooks
- ✅ Tailwind CSS styling
- ✅ Component-based architecture
- ✅ Unit testing coverage

## 🚀 Future Enhancements

The following optional features could be added:

- **Hover Effects**: Visual feedback when hovering over pixels
- **Keyboard Shortcuts**: Quick color selection and canvas operations
- **Drag to Paint**: Paint multiple pixels by dragging
- **Save/Load**: Export artwork or save to local storage
- **Undo/Redo**: History management for editing actions
- **Color Picker**: Custom color selection beyond the preset palette

## 📁 Project Structure

```
pixel-art-canvas/
├── specs/                  # Project specifications
│   ├── requirements.md     # Feature requirements
│   ├── design.md          # Technical design
│   ├── tasks.md           # Implementation tasks
│   └── changelogs.md      # Development log
├── src/                   # Source code
├── public/                # Static assets
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is part of a software design and development class exercise.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**