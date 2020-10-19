import styled from "styled-components";

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TagIcon = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export { TagWrapper, TagIcon };
