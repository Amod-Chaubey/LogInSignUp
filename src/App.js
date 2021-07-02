import React from "react";
import "./App.css";
import "./CSS/Form.css";

import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <div className="App">
      <SignIn />
      {/* <SignUp></SignUp> */}
    </div>
  );
}

export default App;
