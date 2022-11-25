import { ChangeEvent, FormEvent, useState } from "react";
import Router from "next/router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const signupCall = (e: FormEvent) => {
    e.preventDefault();

    fetch("http://127.0.0.1:3002/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then(() => {
        Router.push("/login");
      });
  };
  return (
    <form onSubmit={signupCall}>
      <label>
        <b>Email</b>
      </label>
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        required
        onChange={onEmailChange}
      />

      <label>
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        required
        onChange={onPasswordChange}
      />

      <button type="submit">Sign Up</button>
    </form>
  );
}
