// Form.jsx
"use client";

import React from "react";

const Form = ({ user, setUser }) => {
  return (
    <form method="dialog" className="flex flex-col items-center flex-1">
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="w-1/2 rounded-2xl bg-[var(--bg)] px-2 py-2 mb-3"
        placeholder="Enter your name"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="w-1/2 rounded-2xl bg-[var(--bg)] px-2 py-2 mb-3"
        placeholder="Enter your email"
      />
      <input
        type="password"
        name="pass"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="w-1/2 rounded-2xl bg-[var(--bg)] px-2 py-2 mb-3"
        placeholder="Enter your password"
      />
    </form>
  );
};

export default Form;
