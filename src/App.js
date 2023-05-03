import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  const handleClick = () => {
    const generatedColor = randomColor();
    setColor(generatedColor);
  };

  const gradient = 'linear-gradient(45deg, #5f00b8, #ff2d55, #ffa300)';

  const userGradient = {
    background: gradient,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <div className="App">
      <div className="Body">
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
      </div>
      <div style={{ backgroundColor: color }} className="Container">
        <p>Generated Color: {color}</p>
      </div>
      <div>
        <button onClick={handleClick}> Generate</button>
      </div>
    </div>
  );
}
