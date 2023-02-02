import { render } from "react-dom";

let index = -1;
let stateValue = [];

const useState = (initial) => {
  index++;

  const current = index;

  if (stateValue[current] === undefined) stateValue[current] = initial;

  const setValue = (newValue) => {
    stateValue[current] = newValue;
    renderApp();
  };

  return [stateValue[current], setValue];
};

const App = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(1);

  return (
    <div>
      <h2>CountA: {countA}</h2>
      <button onClick={() => setCountA(countA + 1)}>Increment</button>
      <h2>CountB: {countB}</h2>
      <button onClick={() => setCountB(countB + 1)}>Increment</button>
    </div>
  );
};

const renderApp = () => {
  index = -1;
  render(<App />, document.getElementById("root"));
};

renderApp();
