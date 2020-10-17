import styled from "styled-components";

const CalendarOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
`;

const CalendarLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;

const CalendarRightWrappper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
`;

const CalendarDate = styled.div``;

const CalendarIcon = styled.img.attrs({
  src: "./icons/Calendar-icon.png",
})`
  width: 20px;
  height: 20px;
`;

const CalendarIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CalendarDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const CalendarTitle = styled.div`
  border: 1px solid black;
`;

const CalendarInvitees = styled.div`
  border: 1px solid black;
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
