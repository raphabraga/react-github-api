import React from "react";

const RepositoryItem = ({ rpName, rpFName, rpLink }) => {
  return (
    <div>
      <h2>{rpName}</h2>
      <h3>Full name: </h3>
      <a href={rpLink} rel="noreferrer" target="_blank">
        {rpFName}
      </a>
    </div>
  );
};

export default RepositoryItem;
