import styled from "styled-components";

export const WrapperHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    height: 35px;
    margin: auto;
    width: 85%;
    text-align: center;
    padding: 4px 10px;
    font-weight: 400;
  }

  button {
    border: none;
    border-radius: 8px;
    width: 120px;
    text-align: center;
    background-color: #4086f4;
    margin-left: 10px;
    padding: 8px 12px;
    transition: all 0.5s;

    span {
      color: white;
      font-weight: bold;
      font-size: 16px;
    }

    span:after {
      content: "\0bb";
      position: relative;
      font-size: 16px;
      opacity: 0;
      top: -2px;
      left: 10px;
      color: white;
      transition: 0.5s;
    }

    &:active {
      opacity: 0.7;
      transform: translateY(1px);
      transition: 0.5s;
    }
    &:hover {
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.5);
      padding-right: 25px;
    }

    &:hover span:after {
      opacity: 1;
      left: 40;
    }
  }
`;
