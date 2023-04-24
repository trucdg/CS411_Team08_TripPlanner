import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../client";

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
      <form onSubmit={handleSubmit}>
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
      </p>
    </>
  );
};

export default LoginForm;
