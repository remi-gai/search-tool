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

const CalendarOuterWrapper = styled.div`
  ${ResultOuterWrapper}
`;

const CalendarLeftWrapper = styled.div`
  ${ResultLeftWrapper}
`;

const CalendarRightWrappper = styled.div`
  ${ResultRightWrapper}
`;

const CalendarDate = styled.div`
  ${ResultDate}
`;

const CalendarIcon = styled.img.attrs({
  src: "./icons/Calendar-icon.png",
})`
  width: 20px;
  height: 20px;
`;

const CalendarIconWrapper = styled.div`
  ${ResultIconWrapper}
`;

const CalendarDetailsWrapper = styled.div`
  ${ResultDetailsWrapper}
`;

const CalendarTitle = styled.div`
  ${ResultTitle}
`;

const CalendarInvitees = styled.div`
  ${ResultContent}
`;

export {
  CalendarOuterWrapper,
  CalendarLeftWrapper,
  CalendarRightWrappper,
  CalendarDate,
  CalendarIcon,
  CalendarIconWrapper,
  CalendarDetailsWrapper,
  CalendarTitle,
  CalendarInvitees,
};
