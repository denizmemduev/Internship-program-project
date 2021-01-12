import "./App.css";
import Interns from "./components/Interns/interns";

import Teams from "./components/teams/teams";

import Form2 from "./components/newteam/newteam.js";

import Form from "./components/newintern/newintern";

function App() {
  return (
    <div>
      <Form />
      <Form2 />
      <Interns />
      <Teams />
    </div>
  );
}

export default App;
