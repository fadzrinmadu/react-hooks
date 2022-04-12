import { useState } from "react";
import Child from './Child';

export default function CallbackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('Yo, pls sub to the channel!');

  console.log(setData);

  const returnComment = () => {
    return data;
  };

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );

}
