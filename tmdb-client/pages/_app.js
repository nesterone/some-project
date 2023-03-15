import { useEffect } from "react";
import "../styles/global.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    (async function () {
      (await import("tw-elements")).default;
    })();
  }, []);
  return <Component {...pageProps} />;
}
