import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useQuery } from "../convex/_generated/react";
import { useMutation } from "../convex/_generated/react";
import { useRef, useState, useEffect } from "react";
import "./_app.js";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [username1, setUsername1] = useState("");
    const [password1, setPassword1] = useState("");
    const register = useMutation("register");
    const login = useQuery("login", username1, password1);
    var user;

    async function handleRegister(event) {
        event.preventDefault();
        setUsername("");
        setPassword("");
        await register(username, password);
    }

    async function handleLogin(event) {
        event.preventDefault();
        setUsername1("");
        setPassword1("");
        if (login.length != 0) {
            console.log("Login successful");
            console.log(login);
            user = username;
        }
    }

    return (
    <>
        <h1>Register:</h1>

        <form onSubmit={handleRegister}>

            <input
              type="text"
              value={username}
              onChange={event => setUsername(event.target.value)}
              placeholder="Username:"
            />

            <input
              type="text"
              value={password}
              onChange={event => setPassword(event.target.value)}
              placeholder="Password:"
            />

            <input type="submit" value="Register"/>
        
        </form>

        <h1>Login:</h1>

        <form onSubmit={handleLogin}>

            <input
            type="text"
            value={username1}
            onChange={event => setUsername1(event.target.value)}
            placeholder="Username:"
            />

            <input
            type="text"
            value={password1}
            onChange={event => setPassword1(event.target.value)}
            placeholder="Password:"
            />

        <input type="submit" value="Login"/>

        </form>

        <Link href="/">Back to home</Link>
    </>
    );
  }


// Register & Login