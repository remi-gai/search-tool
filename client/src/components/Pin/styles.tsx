import styled from "styled-components";

const PinWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PinIcon = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export { PinWrapper, PinIcon };
