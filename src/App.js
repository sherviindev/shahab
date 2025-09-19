import React, { useState, useEffect } from 'react';
import Meteor from './components/Meteor';
import AnimatedText from './components/AnimatedText';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [theme, setTheme] = useState('night');
  const [meteors, setMeteors] = useState([]);

  // Initialize theme based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    const initialTheme = (hour >= 6 && hour < 18) ? 'day' : 'night';
    setTheme(initialTheme);
  }, []);

  // Create meteor animation
  const createMeteor = (minDelay = 0.1, maxDelay = 0.8, minDuration = 0.5, maxDuration = 3) => {
    const angle = Math.random() * 20 + 45;
    const delay = Math.random() * (maxDelay - minDelay) + minDelay;
    const duration = Math.random() * (maxDuration - minDuration) + minDuration;
    const isMobile = window.innerWidth < 600;
    const chance = Math.random();

    let left, top;
    if (isMobile && chance > 0.7) {
      left = window.innerWidth + 20;
      top = Math.floor(Math.random() * window.innerHeight);
    } else {
      left = Math.floor(Math.random() * window.innerWidth);
      top = -20;
    }

    const meteorId = Date.now() + Math.random();
    const newMeteor = {
      id: meteorId,
      left,
      top,
      angle,
      delay,
      duration,
      theme
    };

    setMeteors(prev => [...prev, newMeteor]);

    // Remove meteor after animation
    setTimeout(() => {
      setMeteors(prev => prev.filter(meteor => meteor.id !== meteorId));
    }, (delay + duration) * 1000);
  };

  // Spawn meteors
  useEffect(() => {
    const spawnMeteors = () => {
      for (let i = 0; i < 10; i++) {
        setTimeout(() => createMeteor(0.1, 0.8, 0.5, 3), Math.random() * 1000);
      }
    };

    spawnMeteors();
    const interval = setInterval(() => {
      createMeteor(0.1, 0.8, 0.5, 3);
    }, 100);

    return () => clearInterval(interval);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'night' ? 'day' : 'night');
  };

  return (
    <div className={`app ${theme}`}>
      <div className="header">
        <button 
          className="toggle-button" 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'night' ? '🌙' : '☀️'}
        </button>
      </div>

      <AnimatedText 
        text="BluestMoon" 
        className="text"
        animationType="blurInUp"
        delay={0.05}
      />

      <AnimatedText 
        text="آبی‌ترین ماه، دنیایی از فرصت‌ها برای پیشرفت و شتاب‌دهی به کسب‌وکار شماست."
        className="animated-text"
        animationType="scaleSlideLeftToRight"
        delay={0.05}
        by="word"
      />

      {meteors.map(meteor => (
        <Meteor key={meteor.id} {...meteor} />
      ))}

      <CustomCursor />
    </div>
  );
}

export default App;
