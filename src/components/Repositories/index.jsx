import React, { useState, useEffect } from "react";
import RepositoryItem from "../RepositoryItem";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Repositories = () => {
  const [showRepos, setShowRepos] = useState(false);
  const { githubState, getRepos, getStarred } = useGithub();

  useEffect(() => {
    if (!!githubState.user.login) {
      getRepos(githubState.user.login);
    }
    setShowRepos(!!githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  useEffect(() => {
    if (!!githubState.user.login) {
      getStarred(githubState.user.login);
    }
    setShowRepos(!!githubState.starred);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return showRepos ? (
    <>
      <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >
        <S.WrapperTabList>
          <S.WrapperTab>Repositories</S.WrapperTab>
          <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
          <S.WrapperList>
            {githubState.repositories.map((rep) => (
              <RepositoryItem
                key={rep.id}
                rpName={rep.name}
                rpFName={rep.full_name}
                rpLink={rep.html_url}
              />
            ))}
          </S.WrapperList>
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
          <S.WrapperList>
            {githubState.starred.map((rep) => (
              <RepositoryItem
                key={rep.id}
                rpName={rep.name}
                rpFName={rep.full_name}
                rpLink={rep.html_url}
              />
            ))}
          </S.WrapperList>
        </S.WrapperTabPanel>
      </S.WrapperTabs>
    </>
  ) : null;
};

export default Repositories;
