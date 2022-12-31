import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../Redux/Auth/auth.action";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const { isLoggedIn } = useSelector((store) => store.auth.isLoggedIn);
  const dispatch = useDispatch();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authLogin(loginCreds, dispatch);
  };
  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
