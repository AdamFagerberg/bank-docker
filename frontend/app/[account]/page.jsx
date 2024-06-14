"use client";
import { useEffect, useState } from "react";

export default function AccountPage({ params }) {
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("");
  const [input, setInput] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/me/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: params.account,
      }),
    })
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/me/name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: params.account,
      }),
    })
      .then((response) => response.json())
      .then((data) => setUserName(data));
  }, []);

  function handleClick() {
    fetch("http://localhost:4000/me/account/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: params.account,
        amount: input,
      }),
    })
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }

  return (
    <>
      <div className="flex h-screen justify-center flex-col">
        <div className="flex flex-col items-center gap-5 w-1/2 self-center max-w-96 text-center bg-slate-800 bg-opacity-90 rounded-2xl p-10">
          <h1 className="text-white text-4xl font-bold">Welcome {userName}!</h1>
          <h1 className="text-white text-2xl font-bold">
            Balance: {userData.amount}
          </h1>
          <input
            type="number"
            min="0"
            onChange={(e) => setInput(parseFloat(e.target.value))}
            className="border rounded-full p-3"
          ></input>
          <button
            onClick={handleClick}
            className="py-2 px-5 bg-slate-600 hover:bg-slate-500 font-bold text-white rounded-full hover:text-white opacity-90"
          >
            Deposit
          </button>
        </div>
      </div>
    </>
  );
}
