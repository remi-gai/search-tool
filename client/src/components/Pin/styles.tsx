import styled from "styled-components";

const PinWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PinIcon = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 14px;
  height: 18px;
`;

export { PinWrapper, PinIcon };
