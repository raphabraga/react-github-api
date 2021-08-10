import { githubContext } from "../providers/GithubProvider";
import { useContext } from "react";

const useGithub = () => {
  const { githubState, getUser } = useContext(githubContext);
  return { githubState, getUser };
};
export default useGithub;
