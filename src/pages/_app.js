import "../styles/globals.css";
import "../styles/charles.css";

import initAuth from "../util/initAuth";

initAuth();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
