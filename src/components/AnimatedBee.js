import React, { useEffect, useState } from 'react';

const AnimatedBee = () => {
  const [position, setPosition] = useState({ x: 20, y: 30 });
  const [direction, setDirection] = useState({ 
    x: (Math.random() - 0.5) * 2, 
    y: (Math.random() - 0.5) * 2 
  });

  useEffect(() => {
    const moveBee = () => {
      setPosition(prevPos => {
        let newX = prevPos.x + direction.x * 0.4;
        let newY = prevPos.y + direction.y * 0.25;
        
        // Bounce off edges with some padding
        let newDirectionX = direction.x;
        let newDirectionY = direction.y;
        
        if (newX <= 2 || newX >= 94) {
          newDirectionX = -direction.x + (Math.random() - 0.5) * 0.8;
          newX = Math.max(2, Math.min(94, newX));
        }
        
        if (newY <= 2 || newY >= 88) {
          newDirectionY = -direction.y + (Math.random() - 0.5) * 0.8;
          newY = Math.max(2, Math.min(88, newY));
        }
        
        if (newDirectionX !== direction.x || newDirectionY !== direction.y) {
          setDirection({ x: newDirectionX, y: newDirectionY });
        }
        
        return { x: newX, y: newY };
      });
    };

    const changeDirection = () => {
      // Randomly change direction for more natural movement
      if (Math.random() < 0.2) {
        setDirection({
          x: (Math.random() - 0.5) * 3,
          y: (Math.random() - 0.5) * 2
        });
      }
    };

    const moveInterval = setInterval(moveBee, 50);
    const directionInterval = setInterval(changeDirection, 2500);

    return () => {
      clearInterval(moveInterval);
      clearInterval(directionInterval);
    };
  }, [direction]);

  return (
    <div 
      className="cartoon-bee"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `scaleX(${direction.x > 0 ? 1 : -1})`
      }}
    >
      <div className="bee-wrapper">
        {/* Wings */}
        <div className="bee-wings-cartoon">
          <div className="wing-cartoon wing-left-1"></div>
          <div className="wing-cartoon wing-left-2"></div>
          <div className="wing-cartoon wing-right-1"></div>
          <div className="wing-cartoon wing-right-2"></div>
        </div>
        
        {/* Body */}
        <div className="bee-body-cartoon">
          <div className="body-segment segment-1"></div>
          <div className="body-segment segment-2"></div>
          <div className="body-segment segment-3"></div>
        </div>
        
        {/* Head */}
        <div className="bee-head-cartoon">
          <div className="bee-eye-cartoon eye-left"></div>
          <div className="bee-eye-cartoon eye-right"></div>
          <div className="antenna-cartoon antenna-left">
            <div className="antenna-tip-cartoon"></div>
          </div>
          <div className="antenna-cartoon antenna-right">
            <div className="antenna-tip-cartoon"></div>
          </div>
        </div>
        
        {/* Legs */}
        <div className="bee-legs-cartoon">
          <div className="leg-cartoon leg-front"></div>
          <div className="leg-cartoon leg-middle"></div>
          <div className="leg-cartoon leg-back"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBee;