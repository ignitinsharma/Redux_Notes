import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authLogout } from "../Redux/Auth/auth.action";

const Navbar = () => {
  /* Getting login value from initialState and using it */
  const { isLoggedIn } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginClick = () => {
    if (isLoggedIn) {
      /* This is simple logout out app if u want too.... */
      // authLogout(dispatch);

      /* After thunk */
      dispatch(authLogout())
    } else {
      // he wants to login
      navigate("/login");
    }
  };
  return (
    <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
      Navbar:
      <Link to="">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/feeds">Feeds</Link>
      <button onClick={handleLoginClick}>
        {/* Spacer */}
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
