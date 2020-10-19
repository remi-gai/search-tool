import { css } from "styled-components";

const ResultOuterWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const ResultLeftWrapper = css`
  display: flex;
  flex-direction: row;
`;

const ResultRightWrapper = css`
  display: flex;
  align-items: center;
`;

const ResultIconWrapper = css`
  display: flex;
  align-items: center;
`;

const ResultDetailsWrapper = css`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

const ResultTitle = css`
  font-size: 16px;
  font-weight: bolder;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ResultContent = css`
  font-size: 14px;
  font-weight: lighter;
`;

const ResultDate = css`
  font-size: 12px;
  color: #585858;
  margin-right: 20px;
`;

export {
  ResultOuterWrapper,
  ResultLeftWrapper,
  ResultRightWrapper,
  ResultIconWrapper,
  ResultDetailsWrapper,
  ResultTitle,
  ResultContent,
  ResultDate,
};
