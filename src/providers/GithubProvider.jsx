import React, { useState, useCallback, createContext } from "react";
import api from "../services/api";
export const githubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

export const GithubProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [githubState, setGithubState] = useState({
    user: {
      login: undefined,
      name: undefined,
      avatarUrl: undefined,
      publicUrl: undefined,
      blog: undefined,
      company: undefined,
      followers: 0,
      followings: 0,
      publicGists: 0,
      publicRepos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (userName) => {
    api
      .get(`/users/${userName}`)
      .then(({ data }) =>
        setGithubState((prevState) => {
          return {
            ...prevState,
            user: {
              login: data.login,
              name: data.name,
              avatarUrl: data.avatar_url,
              publicUrl: data.html_url,
              blog: data.blog,
              company: data.company,
              location: data.location,
              followers: data.followers,
              follwings: data.following,
              publicGists: data.public_gists,
              publicRepos: data.public_repos,
            },
          };
        })
      )
      .catch((er) => console.log(er));
  };

  const contextValue = {
    githubState,
    getUser: useCallback((user) => getUser(user), []),
  };

  return (
    <githubContext.Provider value={contextValue}>
      {children}
    </githubContext.Provider>
  );
};
