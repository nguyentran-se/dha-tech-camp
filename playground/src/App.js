import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Challenge from "./challenge";
import Challenge1 from "./challenge/Challenge1";
import Challenge2 from "./challenge/Challenge2";
import Challenge3 from "./challenge/Challenge3";
import Playground from "./play";
import Counter from "./play/Counter";
import Form from "./play/Form";
import Reference from "./reference";
import Challenge1Reference from "./reference/Challenge1";
import Challenge2Reference from "./reference/Challenge2";
import Challenge3Reference from "./reference/Challenge3";

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <NavLink to="/">Playground</NavLink>
        <NavLink to="challenge">Challenge</NavLink>
        <NavLink to="reference">Reference</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Playground />}>
          <Route path="counter" element={<Counter />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="challenge" element={<Challenge />}>
          <Route path="1" element={<Challenge1 />} />
          <Route path="2" element={<Challenge2 />} />
          <Route path="3" element={<Challenge3 />} />
        </Route>
        <Route path="reference" element={<Reference />}>
          <Route path="1" element={<Challenge1Reference />} />
          <Route path="2" element={<Challenge2Reference />} />
          <Route path="3" element={<Challenge3Reference />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
