import React from "react";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import ResetCSS from "./global/ResetCSS";
import { GithubProvider } from "./providers/GithubProvider";

const App = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
};

export default App;
