import "./App.css";
import { ClassState } from "./components/ClassState";
import { UseState } from "./components/UseState";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <UseState name="UseState" />
      <ClassState name="ClassState" />
    </>
  );
}

export default App;
