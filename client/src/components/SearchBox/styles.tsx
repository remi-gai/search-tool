import styled, { css } from "styled-components";

const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 80px;
`;

const SearchInput = styled.input`
  height: 60px;
  font-size: 25px;
  font-weight: 300;
  width: 85%;
  border: #ffffff;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.img.attrs({ src: "./icons/search-icon.png" })`
  margin-left: 30px;
  margin-right: 5px;
  width: 28px;
  height: 25px;
`;

const Button = css`
  margin: 5px;
  width: 90px;
  height: 40px;
  background: #415aff;
  cursor: pointer;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  padding: 6px 18px;
  border-radius: 4px;
  color: rgb(255, 255, 255);
  border: 1px solid #415aff;
  &:hover {
    background: #213eff;
    border: 1px solid #213eff;
  }
  &:focus {
    outline: none;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 15%;
  justify-content: center;
`;

const SubmitButton = styled.button`
  ${Button}
`;

const ClearButton = styled.button`
  ${Button}
  background: #FFFFFF;
  color: #585858;
  border: 1px solid #dcdcdc;
  &:hover {
    background: #f0f0f0;
    border: 1px solid #dcdcdc;
  }
`;

export {
  SearchBoxWrapper,
  SearchInput,
  ButtonsWrapper,
  SubmitButton,
  ClearButton,
  SearchIcon,
};
