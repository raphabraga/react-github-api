import React from "react";
import { GithubProvider } from "./providers/GithubProvider";
import ResetCSS from "./global/ResetCSS";
import App from "./App";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
