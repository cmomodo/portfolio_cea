import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Hero from "@/components/Hero";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <main className="relative bg-black-100 flex-justify-center items-center flex-col overflow-hidden mx-auto sm:px:10 px-5">
        <div className="max-w-7xl w-full">
          <h1>Welcome to my portfolio</h1>
        </div>
      </main>
      <Hero />
      <Component {...pageProps} />
    </div>
  );
}
