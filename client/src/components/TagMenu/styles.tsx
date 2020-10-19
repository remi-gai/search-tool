import styled from "styled-components";

const TagMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  margin-left: 20px;
  align-items: center;
  width: 200px;
  height: 400px;
  border: solid 1px black;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tag = styled.div``;

const DeleteIcon = styled.img.attrs({ src: "./icons/delete-icon.png" })`
  width: 14px;
  height: 18px;
`;

export { TagMenuWrapper, TagWrapper, Tag, DeleteIcon };
