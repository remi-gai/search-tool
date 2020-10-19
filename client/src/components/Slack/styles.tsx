import styled from "styled-components";
import {
  ResultOuterWrapper,
  ResultLeftWrapper,
  ResultRightWrapper,
  ResultIconWrapper,
  ResultDetailsWrapper,
  ResultTitle,
  ResultContent,
  ResultDate,
} from "../../styles/styles";

const SlackOuterWrapper = styled.div`
  ${ResultOuterWrapper}
`;

const SlackLeftWrapper = styled.div`
  ${ResultLeftWrapper}
`;

const SlackRightWrappper = styled.div`
  ${ResultRightWrapper}
`;

const SlackDate = styled.div`
  ${ResultDate}
`;

const SlackIcon = styled.img.attrs({
  src: "./icons/Slack-icon.png",
})`
  width: 25px;
  height: 25px;
`;

const SlackIconWrapper = styled.div`
  ${ResultIconWrapper}
`;

const SlackDetailsWrapper = styled.div`
  ${ResultDetailsWrapper}
`;

const SlackChannel = styled.div`
  ${ResultTitle}
`;

const SlackMessage = styled.div`
  ${ResultContent}
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
