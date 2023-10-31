import './App.css';
import Box from './Components/box';
import { useRef } from 'react';

function App() {
  const record = useRef([]);
  const boxes = [[true, true, true], [true, false, true], [true, true, true]];

  const style = {
    display: "grid",
    gap: "0.8rem",
    gridTemplateColumns: `repeat(${boxes[0].length} , 1fr)`
  };

  const clearRecord = () => {
    const id = setInterval(() => {
      const el = record.current.pop();
      el.classList.remove('on');

      if (record.current.length === 0) {
        clearInterval(id);
      }
    }, 1000);
  }


  const domClicked = (e) => {

    if (e.target.classList.contains("Box") && !e.target.classList.contains('on')) {
      e.target.classList.add('on');
      record.current.push(e.target);

      if (record.current.length === boxes.flat(1).filter(bx => bx).length) {
        clearRecord();
      }
    }
  }

  return (
    <div className="App" onClick={(e) => domClicked(e)} style={style}>
      {boxes.flat(1).map((item, index) => (
        <Box
          isVisibel={item}
          key={index}
        />
      ))}
    </div>
  );
}

export default App;