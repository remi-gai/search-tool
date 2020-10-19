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

const TwitterOuterWrapper = styled.div`
  ${ResultOuterWrapper}
`;

const TwitterLeftWrapper = styled.div`
  ${ResultLeftWrapper}
`;

const TwitterRightWrappper = styled.div`
  ${ResultRightWrapper}
`;

const TwitterIcon = styled.img.attrs({
  src: "./icons/twitter-icon.png",
})`
  width: 20px;
  height: 18px;
`;

const TwitterIconWrapper = styled.div`
  ${ResultIconWrapper}
`;

const TwitterDetailsWrapper = styled.div`
  ${ResultDetailsWrapper}
`;

const TwitterUser = styled.div`
  ${ResultTitle}
`;

const TwitterMessage = styled.div`
  ${ResultContent}
`;

const TwitterDate = styled.div`
  ${ResultDate}
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
