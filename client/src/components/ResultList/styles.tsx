import styled from "styled-components";

const ResultListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* width: 400px; */
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bolder;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Date = styled.div`
  font-size: 12px;
  color: #585858;
  margin-right: 20px;
`;

const Details = styled.div`
  font-size: 14px;
  font-weight: lighter;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContactIcon = styled.img.attrs({
  src: "./icons/contact-icon.png",
})`
  width: 20px;
  height: 20px;
`;

const CalendarIcon = styled.img.attrs({
  src: "./icons/Calendar-icon.png",
})`
  width: 20px;
  height: 20px;
`;

const DropboxIcon = styled.img.attrs({
  src: "./icons/Dropbox-icon.png",
})`
  width: 20px;
  height: 20px;
`;

const SlackIcon = styled.img.attrs({
  src: "./icons/Slack-icon.png",
})`
  width: 25px;
  height: 25px;
`;

const TwitterIcon = styled.img.attrs({
  src: "./icons/twitter-icon.png",
})`
  width: 20px;
  height: 18px;
`;

export {
  ResultListWrapper,
  DetailsWrapper,
  Title,
  Date,
  Details,
  IconWrapper,
  ContactIcon,
  CalendarIcon,
  DropboxIcon,
  SlackIcon,
  TwitterIcon,
};
