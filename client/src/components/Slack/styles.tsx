import styled from "styled-components";

const SlackOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
`;

const SlackLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;

const SlackRightWrappper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
`;

const SlackDate = styled.div``;

const SlackIcon = styled.img.attrs({
  src: "./icons/Slack-icon.png",
})`
  width: 20px;
  height: 20px;
`;

const SlackIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SlackDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const SlackChannel = styled.div`
  border: 1px solid black;
`;

const SlackMessage = styled.div`
  border: 1px solid black;
`;

export {
  SlackOuterWrapper,
  SlackLeftWrapper,
  SlackRightWrappper,
  SlackDate,
  SlackIcon,
  SlackIconWrapper,
  SlackDetailsWrapper,
  SlackChannel,
  SlackMessage,
};
