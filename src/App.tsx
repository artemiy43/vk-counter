import Counter from "./components/Counter/Counter";
import "./App.css";

function App() {
  return (
    <Counter
      varient={"primary"}
      size={24}
      stroke={true}
      quantity={111}
      pulse={true}
    />
  );
}

export default App;
