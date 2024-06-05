import "./App.css";
import { UseReducer } from "./UseReducer";
import { ClassState } from "./components/ClassState";
// import { UseState } from "./components/UseState";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseState name="UseState" /> */}
      <UseReducer name="UseReducer" />
      <ClassState name="ClassState" />
    </>
  );
}

export default App;
