import React from "react";
import Layout from "./components/Layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img
            src={"https://avatars.githubusercontent.com/u/39008435?v=4"}
            alt={"avatar of the user"}
          ></img>
          <h1>Matheus Benites</h1>
          <h3>Username: </h3>
          <span>benits</span>
          <div>
            <div>
              <h4>Followers: </h4>
              <span>4</span>
            </div>
            <div>
              <h4>Starred: </h4>
              <span>10</span>
            </div>
            <div>
              <h4>Followings: </h4>
              <span>7</span>
            </div>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starred</div>
      </Layout>
    </main>
  );
}

export default App;
