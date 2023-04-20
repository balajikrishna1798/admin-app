import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="py-5"
      style={{ backgroundColor: "#ffd333", minHeight: "100vh" }}
    >
      <div
        className="my-25 w-25 bg-white rounded-3 mx-auto p-3"
        style={{ margin: "10%" }}
      >
        <form action="/">
          <h3 className="text-center">Login</h3>
          <p className="text-center">Login to your account to continue</p>
          <CustomInput type="email" label="Email Address" id="email" />
          <CustomInput type="password" label="Password" id="password" />
          <div className="mb-3 text-end">
          <Link to="/forgot-password" className="text-decoration-none">
            Forgot Password?
          </Link>
          </div>
          <Link
            to="/admin"
            className="px-3 py-2 border-0 w-100 text-white fw-bold text-center text-decoration-none"
            style={{ backgroundColor: "#ffd333" }}
            type="submit"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
