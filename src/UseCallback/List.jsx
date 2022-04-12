import { useEffect, useState } from "react";

export const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('List Component useEffect() function call');
    setItems(getItems());
  }, [getItems]);

  return (
    <div>
      {items.map(item => <div key={item}>{item}</div>)}
    </div>
  );
}
