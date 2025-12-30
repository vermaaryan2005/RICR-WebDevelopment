import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleClearForm = () => {
    setLoginData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log(loginData);

      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );

    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      handleClearForm(); 
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="p-4 bg-gradient rounded">
        <h2 className="text-center mb-4 text-white">Login</h2>

        <form onSubmit={handleSubmit} onReset={handleClearForm}>
          <div className="mb-3">
            <label className="form-label text-white">
              Email / Username
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter email or username"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>

          <div className="d-flex gap-2">
            <button type="reset" className="btn btn-outline-light w-50">
              Clear
            </button>

            <button
              type="submit"
              className="btn btn-primary w-50"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
