"use client";

import { useState } from "react";

const AuthForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => handleSubmit(e, email, password)} className="my-4">
      <label>
        <span>Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block p-2 rounded-lg"
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block p-2 rounded-lg"
        />
      </label>
      <button className="bg-primary text-white font-bold w-full px-4 py-2 rounded-lg my-4">
        Submit
      </button>
    </form>
  );
};

export default AuthForm;
