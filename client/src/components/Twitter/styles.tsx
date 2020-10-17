import styled from "styled-components";

const TwitterOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
`;

const TwitterLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;

const TwitterRightWrappper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
`;

const TwitterDate = styled.div``;

const TwitterIcon = styled.img.attrs({
  src: "./icons/twitter-icon.png",
})`
  width: 20px;
  height: 20px;
`;

const TwitterIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TwitterDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const TwitterUser = styled.div`
  border: 1px solid black;
`;

const TwitterMessage = styled.div`
  border: 1px solid black;
`;

export {
  TwitterOuterWrapper,
  TwitterLeftWrapper,
  TwitterRightWrappper,
  TwitterDate,
  TwitterIcon,
  TwitterIconWrapper,
  TwitterDetailsWrapper,
  TwitterUser,
  TwitterMessage,
};
