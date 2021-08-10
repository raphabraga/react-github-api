import React from "react";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import useGithub from "./hooks/github-hooks";
import NoSearch from "./components/NoSearch";

const App = () => {
  const { loading } = useGithub();
  return (
    <Layout>
      {loading ? (
        <>
          <Profile />
          <Repositories />
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
