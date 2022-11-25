import { ChangeEvent, FormEvent, useState } from "react";
import Router from 'next/router'

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const signupCall = (e: FormEvent) => {
    e.preventDefault();
    // todo: api call here -signup
    console.log(username)
    console.log(password)
    Router.push('/login')
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
        onChange={onUsernameChange}
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
