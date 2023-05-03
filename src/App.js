import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const generatedColor = randomColor();
  const [color, setColor] = useState(generatedColor);
  return (
    <div className="App">
      <div>
        <h1>Random Color Generator</h1>
      </div>
      <div>
        {color}
        <p>Generated Color:</p>
      </div>
      <div style={{ backgroundColor: generatedColor }} className="container">
        <button onClick={() => setColor(randomColor())}>Generate</button>
      </div>
    </div>
  );
}
