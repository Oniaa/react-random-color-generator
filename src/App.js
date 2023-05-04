import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  // Is the default state variable and setter randomColor
  // Creates random Color when you reload the page
  const [color, setColor] = useState(randomColor());
  // Function that sets the color value to randomColor() and creates a variable that has the same value
  const handleClick = () => {
    const generatedColor = randomColor();
    setColor(generatedColor);
  };

  // Gradient for part of my Title
  const gradient = 'linear-gradient(45deg, #5f00b8, #ff2d55, #ffa300)';
  // Css Properties in an Object that is used to style the h1 span Title
  const userGradient = {
    background: gradient,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <div className="App">
      <h1>
        <span style={userGradient} className="Radient">
          Random Color
        </span>{' '}
        Generator
      </h1>
      <h2>
        Generate endless color possibilities with our Random Color Generator
        tool.
      </h2>

      <div style={{ backgroundColor: color }} className="Container">
        <p>Generated Color: {color}</p>
        <br />
        <button onClick={handleClick}> Generate</button>
      </div>
    </div>
  );
}
