import { useEffect, useRef, useState } from 'react';

const  animationMessage  = "Thank you for visiting! Please enter your contact information below.↓";

export default function TextAnimation() {
  const containerRef = useRef(null);
  const [text, setText] = useState(''); // State to manage the displayed text
  const fullText = animationMessage; // The full text to animate

  useEffect(() => {
    let characterIndex = 0;
    let timeoutId;

    function updateText() {
      if (characterIndex < fullText.length) {
        setText(fullText.slice(0, characterIndex + 1)); // Update the state with the next character
        characterIndex++;
        timeoutId = setTimeout(updateText, 75); // Continue animation until the full text is displayed
      } else {
        // Reset the animation after a brief pause
        timeoutId = setTimeout(() => {
          setText(''); // Clear the text
          characterIndex = 0; // Reset character index
          updateText(); // Start animation again
        }, 1500); // Pause for 1.5 seconds before restarting
      }
    }

    updateText(); // Start the animation

    // Cleanup function to clear timeouts when component unmounts
    return () => clearTimeout(timeoutId);
  }, [fullText]);

  return (
    <div ref={containerRef}>
      <h1 style={{ fontSize: '30px', color: 'rgb(19, 117, 24)' }}>{text}</h1>
    </div>
  );
}
