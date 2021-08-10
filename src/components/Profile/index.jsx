import React from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Profile = () => {
  const { githubState: data } = useGithub();
  return (
    <S.Wrapper>
      <S.WrapperImg
        src={data.user.avatarUrl}
        alt={"avatar of the user"}
      ></S.WrapperImg>
      <S.WrapperInfoUser>
        <div>
          <h1>{data.user.name}</h1>
          <S.WrapperUserName>
            <h3>Username: </h3>
            <a href={data.user.publicUrl} rel="noreferrer" target="_blank">
              {data.user.login}
            </a>
          </S.WrapperUserName>
          <S.WrapperUserGeneric>
            <h3>Company: </h3>
            <span>{data.user.company}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Location: </h3>
            <span>{data.user.location}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Blog: </h3>
            <a href={data.user.blog} rel="noreferrer" target="_blank">
              {data.user.blog}
            </a>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers: </h4>
            <span>{data.user.followers}</span>
          </div>
          <div>
            <h4>Followings: </h4>
            <span>{data.user.publicRepos}</span>
          </div>
          <div>
            <h4>Gists: </h4>
            <span>{data.user.publicGists}</span>
          </div>
          <div>
            <h4>Repositories: </h4>
            <span>{data.user.publicRepos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
