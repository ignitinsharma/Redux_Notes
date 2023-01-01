import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../Redux/Auth/auth.action";
// import { useEffect } from "react";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const { isLoggedIn } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { state } = useLocation();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // authLogin(loginCreds, dispatch);
    dispatch(authLogin(loginCreds));
  };

  // After login if u want move user to Home page

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     if (state.from) {
  //       // <Navigate to={state.from} replace={true}/>
  //       navigate(state.from, {replace:true});
  //     } else {
  //       navigate("/");
  //     }
  //   }
  // }, [isLoggedIn]);

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
