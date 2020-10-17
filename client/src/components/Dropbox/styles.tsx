import styled from "styled-components";

const DropboxOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
`;

const DropboxLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;

const DropboxRightWrappper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
`;

const DropboxDate = styled.div``;

const DropboxIcon = styled.img.attrs({
  src: "./icons/Dropbox-icon.png",
})`
  width: 20px;
  height: 20px;
`;

const DropboxIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DropboxDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const DropboxTitle = styled.div`
  border: 1px solid black;
`;

const DropboxPath = styled.div`
  border: 1px solid black;
`;

export {
  DropboxOuterWrapper,
  DropboxLeftWrapper,
  DropboxRightWrappper,
  DropboxDate,
  DropboxIcon,
  DropboxIconWrapper,
  DropboxDetailsWrapper,
  DropboxTitle,
  DropboxPath,
};
