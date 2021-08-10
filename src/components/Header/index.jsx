import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Header = () => {
  const [query, setQuery] = useState();
  const { getUser } = useGithub();

  const handleClickSubmit = () => {
    if (query) getUser(query);
  };

  return (
    <S.WrapperHeader>
      <input
        type={"text"}
        placeholder={"Type a github username"}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit" onClick={handleClickSubmit}>
        <span>Search</span>
      </button>
    </S.WrapperHeader>
  );
};

export default Header;
