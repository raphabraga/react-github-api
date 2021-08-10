import React from "react";
import RepositoryItem from "../RepositoryItem";
import * as S from "./styled";

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem
          rpName={"App Ideas"}
          rpFName={"benits/app-ideas"}
          rpLink={"https://github.com/benits/app-ideas"}
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          rpName={"Appium"}
          rpFName={"benits/appium"}
          rpLink={"https://github.com/benits/appium"}
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};

export default Repositories;
