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

const ContactOuterWrapper = styled.div`
  ${ResultOuterWrapper}
`;

const ContactLeftWrapper = styled.div`
  ${ResultLeftWrapper}
`;

const ContactRightWrappper = styled.div`
  ${ResultRightWrapper}
`;

const ContactDate = styled.div`
  ${ResultDate}
`;

const ContactIcon = styled.img.attrs({
  src: "./icons/contact-icon.png",
})`
  width: 20px;
  height: 20px;
`;

const ContactIconWrapper = styled.div`
  ${ResultIconWrapper}
`;

const ContactDetailsWrapper = styled.div`
  ${ResultDetailsWrapper}
`;

const ContactTitle = styled.div`
  ${ResultTitle}
`;

const ContactEmail = styled.div`
  ${ResultContent}
`;

export {
  ContactOuterWrapper,
  ContactLeftWrapper,
  ContactRightWrappper,
  ContactDate,
  ContactIcon,
  ContactIconWrapper,
  ContactDetailsWrapper,
  ContactTitle,
  ContactEmail,
};
