import React from "react";
import * as S from "./styled";

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImg
        src={"https://avatars.githubusercontent.com/u/39008435?v=4"}
        alt={"avatar of the user"}
      ></S.WrapperImg>
      <S.WrapperInfoUser>
        <div>
          <h1>Matheus Benites</h1>
          <S.WrapperUserName>
            <h3>Username: </h3>
            <a
              href={"https://github.com/benits"}
              rel="noreferrer"
              target="_blank"
            >
              benits
            </a>
          </S.WrapperUserName>
        </div>
        <S.WrapperStatusCount>
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
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
