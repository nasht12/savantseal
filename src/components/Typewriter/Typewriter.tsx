import React, { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState<string>('');
  const index = useRef<number>(0); // Define index as a ref

  useEffect(() => {
    const timerId = setInterval(() => {
      setDisplayText((prev) => prev + text.charAt(index.current)); // Use index.current
      index.current++; // Increment index.current
      if (index.current >= text.length) {
        clearInterval(timerId);
      }
    }, speed);

    // Cleanup function
    return () => clearInterval(timerId);
  }, [text, speed]); // Dependencies

  return <div style={{ fontFamily: 'Arial', fontSize: '15px' }}>{displayText}</div>;
}

export default Typewriter;