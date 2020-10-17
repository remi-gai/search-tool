import styled from "styled-components";

const ContactOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
`;

const ContactLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;

const ContactRightWrappper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
`;

const ContactDate = styled.div``;

const ContactIcon = styled.img.attrs({
  src: "./icons/contact-icon.png",
})`
  width: 20px;
  height: 20px;
`;

const ContactIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContactDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const ContactTitle = styled.div`
  border: 1px solid black;
`;

const ContactEmail = styled.div`
  border: 1px solid black;
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
