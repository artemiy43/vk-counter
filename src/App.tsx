// import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  const buttonSizes: Array<{ buttonSize: number; counterSize: number }> = [
    { buttonSize: 56, counterSize: 24 },
    { buttonSize: 36, counterSize: 20 },
    { buttonSize: 28, counterSize: 16 },
  ];
  return (
    <>
      {/* <Counter
        varient={"primary"}
        size={24}
        stroke={true}
        quantity={111}
        pulse={true}
      /> */}
      <Button
        varient={"secondary"}
        size={buttonSizes[0]}
        state={"enabled"}
        counter={true}
        focused={false}
      >
        Что сделать
      </Button>
    </>
  );
}

export default App;
