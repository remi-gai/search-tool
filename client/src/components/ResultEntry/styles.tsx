import styled, { css } from "styled-components";

const ResultOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const ResultLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ResultRightWrappper = styled.div`
  display: flex;
  align-items: center;
`;

const PinWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PinIcon = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TagIcon = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export {
  ResultOuterWrapper,
  ResultLeftWrapper,
  ResultRightWrappper,
  PinWrapper,
  PinIcon,
  TagWrapper,
  TagIcon,
};