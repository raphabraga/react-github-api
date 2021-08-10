import { githubContext } from "../providers/GithubProvider";
import { useContext } from "react";

const useGithub = () => {
  const { githubState, getUser, loading, getRepos, getStarred } =
    useContext(githubContext);
  return { githubState, getUser, loading, getRepos, getStarred };
};
export default useGithub;
