import { useEffect } from "react";
import "../styles/global.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return <Component {...pageProps} />;
}
