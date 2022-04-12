import { useRef } from 'react';

const test: React.FC = () => {
  return (
    <div>Hello World</div>
  );
}

console.log(test);

export default function RefTutorial(): React.ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}
