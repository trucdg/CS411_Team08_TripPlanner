import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import classes from "./Login.module.css";

const LoginForm = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log(data);
      setToken(data);

      navigate("/welcome");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input placeholder="Email" name="email" onChange={handleChange} />
        <input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up!</Link>
      </p> */}
      <div className={classes["logIn-main"] + " vh-100"}>
        <div className={classes["h-custom"] + " container-fluid"}>
          <h1>Logging you in to TripPlanner!</h1>
          <div className="row d-flex justify-content-center align-items-center h-80">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="/unlock.svg"
                className={classes["signup-img"] + " img-fluid"}
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    name="email"
                    onChange={handleChange}
                  />
                </div>

                {/* Password Input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login!
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account? <Link to="/signup">Sign Up!</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
