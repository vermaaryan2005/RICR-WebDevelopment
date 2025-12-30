import React, { useState } from "react";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setSignupData({
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log(signupData);

      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
     handleClearForm();
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-danger">
      <div className=" p-4 bg-gradient">
        <h2 className="text-center mb-4">Signup</h2>

        <form onSubmit={handleSubmit} onReset={handleClearForm}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={signupData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={signupData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              value={signupData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={signupData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={signupData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
            />
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button type="reset" className="btn btn-outline-danger">
              Clear
            </button>

            <button
              type="submit"
              className="btn btn-success"
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Signup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
