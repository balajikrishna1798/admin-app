import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"
import {useDispatch,useSelector} from "react-redux"
import { login } from "../features/auth/authSlice";
const Login = () => {
  const dispatch = useDispatch()
  const schema = Yup.object().shape({
    email:Yup.string().email("Email Should be Valid").required("This field is Required"),
    password:Yup.string().required("This field is Required")
  })
  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validationSchema:schema,
    onSubmit:(values)=>{
      dispatch(login(values))
    }
  });
  return (
    <div
      className="py-5"
      style={{ backgroundColor: "#ffd333", minHeight: "100vh" }}
    >
      <br />
      <br />
      <br />
      <br />
      <div
        className="my-5 w-25 bg-white rounded-3 mx-auto p-3"
        style={{ margin: "10%" }}
      >
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue</p>
        <form action="/" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Email Address"
            id="email"
            name="email"
            onCh={formik.handleChange("email")}
            val={formik.values.email}
          />
          <div className="error">
          {formik.touched.email&&formik.errors.email?(
            <div>{formik.errors.email}</div>
          ):null}
          </div>
          <CustomInput
            type="password"
            label="Password"
            id="password"
            name="password"
            onCh={formik.handleChange("password")}
            val={formik.values.password}
          />
          <div className="error">
          {formik.touched.password&&formik.errors.password?(
            <div>{formik.errors.password}</div>
          ):null}
          </div>
          <div className="mb-3 text-end">
            <Link to="/forgot-password" className="text-decoration-none">
              Forgot Password?
            </Link>
          </div>
          <button
            to="/admin"
            className="px-3 py-2 border-0 w-100 text-white fw-bold text-center text-decoration-none"
            style={{ backgroundColor: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
