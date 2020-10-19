import styled from "styled-components";

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TaggedIcon = styled.img.attrs({ src: "./icons/tagged-icon.png" })`
  width: 25px;
  height: 25px;
`;

const UntaggedIcon = styled.img.attrs({ src: "./icons/untagged-icon.png" })`
  width: 25px;
  height: 25px;
`;

export { TagWrapper, TaggedIcon, UntaggedIcon };
