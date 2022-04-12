import { useEffect, useLayoutEffect, useRef } from "react";

export default function LayoutEffectTutorial() {
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (inputRef.current !== null) {
      console.log(inputRef.current.value);
    }
  }, []);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.value = 'HELLO';
    }
  }, []);

  return (
    <div className="App">
      <input type="text" value="PEDRO" style={{ width: 400, height: 60 }} ref={inputRef} />
    </div>
  );
}
