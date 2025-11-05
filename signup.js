import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          className="border w-full p-2 mb-3 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-3 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white w-full p-2 rounded hover:bg-green-700"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
