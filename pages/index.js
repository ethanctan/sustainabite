import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useQuery } from "../convex/_generated/react";
import { useMutation } from "../convex/_generated/react";
import { useRef, useState, useEffect } from "react";
import "./login.js";

export default function Home() {

  const imageInput = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [postName, setPostName] = useState("");
  const [postDesc, setPostDesc] = useState("");

  // Database queries and mutations 
  const generateUploadUrl = useMutation("submitPost:generateUploadUrl");
  const postPost = useMutation("submitPost:postPost");
  const data = useQuery("listMessages");
  const sendMessage = useMutation("sendMessage");
  const listPosts = useQuery("listPosts") || [];
  const searchUsers = useMutation("searchUsers");
  const listFriends = useMutation("listFriends");
  const addFriend = useMutation("addFriend");

  const sendHello = () => sendMessage("Hello!", "me");
  console.log(listPosts); //testing

  // Flask backend test (flask to nextjs)

    const [datas, setdatas] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });
  
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("http://127.0.0.1:5000/").then((res) =>
            res.json().then((datas) => {
                // Setting a data from api
                setdatas({
                    name: datas.Name,
                    age: datas.Age,
                    date: datas.Date,
                    programming: datas.programming,
                });
            })
        );
    }, []);
    
  // end test

  return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head> 
        <div>
                <p>API TEST</p>
                <p>{datas.name}</p>
                <p>{datas.age}</p>
                <p>{datas.date}</p>
                <p>{datas.programming}</p>
        </div>
        <main>
        <ul>
        {listPosts.map(post => (
          <li key={post._id.toString()}>
            <span>{post.name}:</span>
            <span>{post.desc}</span>
            <span>{new Date(post._creationTime).toLocaleTimeString()}</span>
            <img src={post.url} height="300px" width="auto" />
          </li>
        ))}
      </ul>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <h1 className="title">
            Read <Link href="/posts/first-post">this page!</Link>
          </h1>

          <p className={styles.description}>
            Get started by editing <code>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
          </a>
        </footer>

        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
  )
}
