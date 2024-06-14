"use client";

import { useState } from "react";

let count = 100;

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: count++,
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error", error);
      });
    setUsername("");
    setPassword("");
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center flex-col gap-5">
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="border rounded-full p-3"
        ></input>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-full p-3"
        ></input>

        <div>
          <button
            onClick={handleClick}
            className="py-2 px-5 bg-slate-800 hover:bg-slate-700 font-bold text-slate-200 rounded-full hover:text-white opacity-90"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
