import './App.css';
import Box from './Components/box';
import { useRef } from 'react';

function App() {

  const record = useRef([]);
  const boxes = [[true, true, true], [true, false, true], [true, true, true]];

  const clearRecord = () => {
    const id = setInterval(() => {
      const el = record.current.pop();
      el.classList.remove('on');

      if (record.current.length === 0) {
        clearInterval(id);
        console.log("interval cleared");
      }

    }, 1000);

  }


  const domClicked = (e) => {

    if (e?.target?.className === "Box active" && !e.target.classList.contains('on')) {
      e.target.classList.add('on');
      record.current.push(e.target)
    }

    if (record.current.length >= 8) {
      clearRecord();
    }
  }

  return (
    <div className="App" onClick={(e) => domClicked(e)}>
      {
        boxes.map((row, index) => (
          <div className="row" key={index}>
            {row.map((item, index) => (<Box isVisibel={item} key={index} />))}
          </div>
        ))
      }
    </div>
  );
}

export default App;
