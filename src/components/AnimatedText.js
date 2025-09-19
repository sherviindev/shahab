import React, { useState, useEffect } from 'react';

const AnimatedText = ({ 
  text, 
  className, 
  animationType = 'blurInUp', 
  delay = 0.05, 
  by = 'character' 
}) => {
  const [spans, setSpans] = useState([]);

  useEffect(() => {
    let segments = [];
    
    switch (by) {
      case 'character':
        segments = text.split('');
        break;
      case 'word':
        segments = text.split(/(\s+)/);
        break;
      case 'text':
      default:
        segments = [text];
        break;
    }

    const newSpans = segments.map((segment, index) => ({
      id: index,
      content: segment === ' ' ? '\u00A0' : segment,
      delay: index * delay,
      animationType: animationType
    }));

    setSpans(newSpans);
  }, [text, animationType, delay, by]);

  return (
    <div className={className}>
      {spans.map(span => (
        <span
          key={span.id}
          className={animationType === 'scaleSlideLeftToRight' ? 'scale-slide' : ''}
          style={{
            animationDelay: `${span.delay}s`,
            animationDuration: animationType === 'scaleSlideLeftToRight' ? '0.3s' : '0.4s'
          }}
        >
          {span.content}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
