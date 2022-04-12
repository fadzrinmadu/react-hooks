import React, { useState } from "react";

// state = UI - LOGIC - Variables

// export default function StateTutorial() {
//   let [inputValue, setInputValue] = useState('Fadzrin');

//   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = event.target.value;
//     inputValue = newValue;
//     setInputValue(newValue);
//   };

//   console.log('outside: ', inputValue);

//   return (
//     <div>
//       <input type="text" placeholder="enter something..." onChange={onChange} />
//     </div>
//   );
// }

export default function StateTutorial() {
  let counter = 0;
  // const [counter, setCounter] = useState(0);

  const increment = () => {
    counter += 1;
    // setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
