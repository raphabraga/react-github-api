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
      .then(({ data }) => {
        setLoading(true);
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
        });
      })
      .catch(() => {
        setLoading(false);
        alert(
          "This username doesn't exist or itsn't public. Please provide a valid one!"
        );
      });
  };

  const getRepos = (user) => {
    api
      .get(`/users/${user}/repos`)
      .then(({ data }) => {
        setGithubState((prevState) => {
          return {
            ...prevState,
            repositories: data,
          };
        });
      })
      .catch((e) => {
        console.log(e, "cannot load repositories");
      });
  };

  const getStarred = (user) => {
    api
      .get(`/users/${user}/starred`)
      .then(({ data }) => {
        setGithubState((prevState) => {
          return {
            ...prevState,
            starred: data,
          };
        });
      })
      .catch((e) => {
        console.log(e, "cannot load starred");
      });
  };

  const contextValue = {
    githubState,
    loading,
    getUser: useCallback((user) => getUser(user), []),
    getRepos: useCallback((user) => getRepos(user), []),
    getStarred: useCallback((user) => getStarred(user), []),
  };

  return (
    <githubContext.Provider value={contextValue}>
      {children}
    </githubContext.Provider>
  );
};
