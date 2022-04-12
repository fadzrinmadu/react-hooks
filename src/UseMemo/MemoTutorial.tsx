import { useEffect, useState, useMemo, useCallback } from "react";
import axios from 'axios';

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response: any) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments: any) => {
    // setiap kali komponen di re-render maka code dibawah akan di hitung ulang

    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]); // useMemo, menyimpan nilai kembalian
  const grapLongestName = useCallback(() => findLongestName(data), [data]); // useCallback, tidak menyimpan nilai kembalian

  // console.log('useMemo: ', getLongestName);
  // console.log('useCallback: ', grapLongestName);

  return (
    <div className="App">
      {/* <div>{findLongestName(data)}</div> */}
      {/* <div>{getLongestName}</div> */}
      <div>{grapLongestName}</div>

      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );
}
