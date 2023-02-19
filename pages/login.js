import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useQuery } from "../convex/_generated/react";
import { useMutation } from "../convex/_generated/react";
import { useRef, useState, useEffect } from "react";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const register = useMutation("register");
    // const login = useQuery("login") || null;

    async function handleRegister(event) {
        event.preventDefault();
        setUsername("");
        setPassword("");
        await register(username, password);
    }

    async function handleLogin(event) {
        event.preventDefault();
        setUsername("");
        setPassword("");
        await login(username, password);
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

        <input type="submit" value="Login"/>

        </form>

        <Link href="/">Back to home</Link>
    </>
    );
  }


// Register & Login