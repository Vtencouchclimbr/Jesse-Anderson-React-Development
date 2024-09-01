import React, { useEffect, useRef, useState } from 'react';

export default function TextAnimation() {
  const containerRef = useRef(null);
  const [text, setText] = useState(''); // State to manage the displayed text
   const fullText = "Thank you for visiting";// The full text to animate
   
  useEffect(() => {
    let characterIndex = 0;

    function updateText() {
      if (characterIndex < fullText.length) {
        setText(fullText.slice(0, characterIndex + 1)); // Update the state with the next character
        characterIndex++;
        setTimeout(updateText, 200); // Continue animation until the full text is displayed
      }
    }

    updateText(); // Start the animation

    return () => clearTimeout(updateText); // Cleanup in case the component unmounts
  }, [fullText]);

  return <div ref={containerRef}><h1>{text}</h1></div>;
}
