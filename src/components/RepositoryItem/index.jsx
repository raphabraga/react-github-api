import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ rpName, rpFName, rpLink }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{rpName}</S.WrapperTitle>
      <S.WrapperFName>Full name: </S.WrapperFName>
      <S.WrapperLink href={rpLink} rel="noreferrer" target="_blank">
        {rpFName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;
