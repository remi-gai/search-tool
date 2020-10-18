import styled from "styled-components";

const PinWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PinnedIcon = styled.img.attrs({ src: "./icons/saved-icon.png" })`
  width: 14px;
  height: 18px;
`;

const UnpinnedIcon = styled.img.attrs({ src: "./icons/save-icon.png" })`
  width: 15px;
  height: 18px;
`;

export { PinWrapper, PinnedIcon, UnpinnedIcon };
