/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import StateTutorial from "./UseState/StateTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import EffectTutorial from "./UseEffect/EffectTutorial";
import RefTutorial from "./UseRef/RefTutorial";
import CallbackTutorial from "./UseCallback/CallbackTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";

function App() {
  return (
    <div className="App">
      {/* <StateTutorial /> */}
      {/* <ReducerTutorial /> */}
      {/* <EffectTutorial /> */}
      {/* <RefTutorial /> */}
      <MemoTutorial />
      {/* <CallbackTutorial /> */}
    </div>
  );
}

export default App;
