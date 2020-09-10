import React, { useEffect } from "react";
/* import { Workbox } from "workbox-window"; */
 
function App({ Component, pageProps }) {
  useEffect(() => {
    /* if (
      !("serviceWorker" in navigator) ||
      process.env.NODE_ENV !== "production"
    ) {
      console.warn("Pwa support is disabled");
      return;
    }
 
    const wb = new Workbox("sw.js", { scope: "/" });
    wb.register(); */
  }, []);
 
  return <Component {...pageProps} />;
}
export default App