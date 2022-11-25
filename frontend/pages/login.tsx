import { ChangeEvent, FormEvent, useState } from "react";
import Router from 'next/router'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const loginCall = (e: FormEvent) => {
    e.preventDefault();
    // todo: api call here - login
    console.log(username)
    console.log(password)
    Router.push('/home')
  };
  return (
    <form onSubmit={loginCall}>
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

      <button type="submit">login</button>
    </form>
  );
}
