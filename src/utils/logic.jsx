import React, { useEffect, useRef, useState } from 'react';
import { animationMessage } from '../pages/Contact';
// import { animationMessage1 } from '../pages/Resume';
// import { animationMessage2 } from '../pages/Home';


export default function TextAnimation() {
  const containerRef = useRef(null);
  const [text, setText] = useState(''); // State to manage the displayed text
   const fullText = animationMessage;// The full text to animate
   
  useEffect(() => {
    let characterIndex = 0;

    function updateText() {
      if (characterIndex < fullText.length) {
        setText(fullText.slice(0, characterIndex + 1)); // Update the state with the next character
        characterIndex++;
        setTimeout(updateText, 100); // Continue animation until the full text is displayed
      }
    }

    updateText(); // Start the animation

    return () => clearTimeout(updateText); // Cleanup in case the component unmounts
  }, [fullText]);

  return <div style={{ color: 'antiquewhite', fontFamily: 'Brush Script MT' }} ref={containerRef}><h1 style={{ fontSize: '45px' }}>{text}</h1></div>;
}
