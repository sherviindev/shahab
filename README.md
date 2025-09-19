# BluestMoon React App

A React version of the original HTML meteors day/night switch application.

## Features

- 🌙 Day/Night theme toggle
- ☄️ Animated meteors
- ✨ Text animations
- 📱 Responsive design
- 🌍 Persian/Farsi text support

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Meteor.js          # Meteor animation component
│   └── AnimatedText.js   # Text animation component
├── App.js                # Main application component
├── App.css              # Global styles
└── index.js             # React entry point
```

## Components

### App
Main application component that manages:
- Theme state (day/night)
- Meteor spawning and animation
- Theme toggle functionality

### Meteor
Individual meteor component with:
- Random positioning
- Animation timing
- Theme-based styling

### AnimatedText
Text animation component supporting:
- Character-by-character animation
- Word-by-word animation
- Multiple animation types
- Customizable delays

## Styling

The app uses CSS classes with theme-based styling:
- `.app.night` - Dark theme styles
- `.app.day` - Light theme styles
- Responsive design with media queries
- CSS animations for meteors and text

## Original Features Preserved

- Automatic theme detection based on time of day
- Persian text with RTL support
- Meteor animations with different behaviors for mobile
- Smooth theme transitions
- Text animations with blur and scale effects
