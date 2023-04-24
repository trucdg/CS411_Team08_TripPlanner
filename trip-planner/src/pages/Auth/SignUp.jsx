import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../client";
import classes from "./SignUp.module.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
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
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      if (error) throw error;
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
  }

  return (
    // <>
    //   <form onSubmit={handleSubmit}>
    //     <input placeholder="Fullname" name="fullName" onChange={handleChange} />
    //     <input placeholder="Email" name="email" onChange={handleChange} />
    //     <input
    //       placeholder="Password"
    //       name="password"
    //       type="password"
    //       onChange={handleChange}
    //     />
    //     <button type="submit">Submit</button>
    //   </form>
    //   <p>
    //     Already have an account? <Link to="/login">Login</Link>
    //   </p>
    // </>
    <div className="vh-100">
      <div className={classes["h-custom"] + " container-fluid"}>
        <h1>Signing you up for TripPlanner!</h1>
        <div className="row d-flex justify-content-center align-items-center h-80">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="/codeGuy.svg"
              className={classes["signup-img"] + " img-fluid"}
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              {/* FullName Input */}
              <div className="form-outline mb-4">
                <input
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter your fullname"
                  name="fullName"
                  onChange={handleChange}
                />
              </div>

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
                  Sign up!
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
