import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useQuery } from "../convex/_generated/react";
import { useMutation } from "../convex/_generated/react";
import { useRef, useState } from "react";

const address = process.env.NEXT_PUBLIC_CONVEX_URL;
const convex = new ConvexReactClient(address);

export default function MyApp({ Component, pageProps }) {
    var user;
    return (
    <ConvexProvider client={convex}>
        <Component {...pageProps} />
    </ConvexProvider>
    )
  }