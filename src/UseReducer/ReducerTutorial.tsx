import { useReducer } from "react";

enum ReducerActionKind {
  INCREMENT = 'INCREMENT',
  TOGGLE_SHOW_TEXT = 'TOGGLE_SHOW_TEXT',
}

interface ReducerAction {
  type: ReducerActionKind,
}

interface ReducerState {
  count: number;
  showText: boolean;
}

// reducer digunakan untuk mengubah state
const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case ReducerActionKind.INCREMENT:
      return { count: state.count + 1, showText: state.showText };

    case ReducerActionKind.TOGGLE_SHOW_TEXT:
      return { count: state.count, showText: !state.showText };
  }
};

export default function ReducerTutorial() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  console.log('COMPONENT RE-RENDERING');

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          // dispatch fungsi yang mentrigger fungsi reducer berdasarkan type yang dikirim
          dispatch({ type: ReducerActionKind.INCREMENT })
          dispatch({ type: ReducerActionKind.TOGGLE_SHOW_TEXT })
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
}
