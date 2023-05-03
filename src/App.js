import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  const handleClick = () => {
    const generatedColor = randomColor();
    setColor(generatedColor);
  };

  return (
    <div className="App">
      <div>
        <h1>Random Color Generator</h1>
      </div>
      <div>
        {color}
        <p>Generated Color:</p>
      </div>
      <div style={{ backgroundColor: color }} className="container">
        <button onClick={handleClick}>Generate</button>
      </div>
    </div>
  );
}
