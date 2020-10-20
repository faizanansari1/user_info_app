import { IconButton, InputAdornment, TextField } from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useEffect, useState } from "react";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState([]);

  useEffect(() => {
    async function getAPI() {
      await fetch("https://demo4757926.mockable.io/login")
        .then((res) => res.json())
        .then((data) => {
          // console.log("MYAPPI DATA", data);
          setLogin(data);
        });
    }
    getAPI();
  }, []);

  const onShowPassword = () => {
    setShowPassword(true);
  };
  const onHidePassword = () => {
    setShowPassword(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const varify = login.filter(
      (item) => item.username === username && item.password === password
    );

    if (varify.length > 0) {
      console.log("Login Success", varify[0].id);
      localStorage.setItem("loginID", varify[0].id);
      props.history.push("/dashboard");
      setPassword("");
      setUsername("");
    } else {
      alert("Please Cheack the fields");
    }
  };

  return (
    <div className="login-container">
      <div className="content">
        <form onSubmit={onSubmit} className="login-form">
          <h1>
            Login <span>USER info</span>
          </h1>
          <TextField
            required
            className="input-field"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            required
            className="input-field"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    position="end"
                    aria-label="toggle password visibility"
                    onClick={onShowPassword}
                    onMouseDown={onHidePassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p style={{ color: "gray", fontWeight: "bold" }}>Forget Password?</p>
      </div>
    </div>
  );
};
