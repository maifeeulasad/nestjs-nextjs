import { ChangeEvent, FormEvent, useState } from "react";
import Router from 'next/router'
import { useRecoilState } from "recoil";
import { accessTokenAtom } from "../atoms/atoms";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [_, setAccessToken] = useRecoilState(accessTokenAtom);


  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const loginCall = (e: FormEvent) => {
    e.preventDefault();
    
    fetch("http://127.0.0.1:3002/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then(({access_token}) => {
        setAccessToken(access_token)
        Router.push("/home");
      });

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

      <button type="submit">login</button>
    </form>
  );
}
