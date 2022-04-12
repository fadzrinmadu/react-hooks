import { useCallback, useState } from "react";
import { List } from "./List";

export const CallbackDemo = () => {
  const [input, setInput] = useState(1);
  const [light, setLight] = useState(true);

  const getItems = useCallback(() => {
    return [input + 10, input + 100];
  }, [input]);

  // const getItems = () => {
  //   return [input + 10, input + 100];
  // };

  const theme = {
    backgroundColor: light ? 'white' : 'grey',
    color: light ? 'grey' : 'white',
  };

  return (
    <>
      <div style={theme}>
        <input type="number" value={input} onChange={(event) => setInput(parseInt(event.target.value))} />
        <button onClick={() => setLight((prevLight) => !prevLight)}>{light ? 'dark mode' : 'light mode'}</button>
        <List getItems={getItems} />
      </div>
    </>
  );
};
