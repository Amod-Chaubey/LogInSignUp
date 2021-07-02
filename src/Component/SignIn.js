import React, { useState } from "react";
import "../CSS/Form.css";
import { Button } from "@material-ui/core";

function SignIn() {
  const [name, setName] = useState({ userID: "", password: "" });

  const handleSubmit = (e) => {
    alert(`${name.userID} ${name.password}`);
    e.preventDefault();
  };
  return (
    <form class="form" onSubmit={handleSubmit}>
      <div>
        <div>
          <h2>Log in to Twitter</h2>
        </div>

        <div>
          <label>Phone,email,or username</label>
        </div>
        <input
          type="text"
          value={name.userID}
          onChange={(e) => setName({ ...name, userID: e.target.value })}
        ></input>
        <div>
          <label>Password</label>
          <div>
            <input
              type="password"
              value={name.password}
              onChange={(e) => setName({ ...name, password: e.target.value })}
            ></input>
          </div>
          <div>
            <Button variant="contained" type="submit" color="primary">
              Log in
            </Button>
          </div>
        </div>
        <label>Forgot password .</label>
        <label> Sign up for Twitter</label>
      </div>
    </form>
  );
}

export default SignIn;
