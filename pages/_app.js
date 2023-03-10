import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useQuery } from "../convex/_generated/react";
import { useMutation } from "../convex/_generated/react";
import { useRef, useState } from "react";
import "../index.css";

const address = process.env.NEXT_PUBLIC_CONVEX_URL;
const convex = new ConvexReactClient(address);

export default function MyApp({ Component, pageProps }) {
    return (
    <ConvexProvider client={convex}>
        <Component {...pageProps} />
    </ConvexProvider>
    )
  }