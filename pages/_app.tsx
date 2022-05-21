import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DAppProvider } from "@usedapp/core";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={{}}>
      <Navbar />
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default MyApp;
