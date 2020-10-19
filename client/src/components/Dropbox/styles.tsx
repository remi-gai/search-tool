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

const DropboxOuterWrapper = styled.div`
  ${ResultOuterWrapper}
`;

const DropboxLeftWrapper = styled.div`
  ${ResultLeftWrapper}
`;

const DropboxRightWrappper = styled.div`
  ${ResultRightWrapper}
`;

const DropboxDate = styled.div`
  ${ResultDate}
`;

const DropboxIcon = styled.img.attrs({
  src: "./icons/Dropbox-icon.png",
})`
  width: 20px;
  height: 20px;
`;

const DropboxIconWrapper = styled.div`
  ${ResultIconWrapper}
`;

const DropboxDetailsWrapper = styled.div`
  ${ResultDetailsWrapper}
`;

const DropboxTitle = styled.div`
  ${ResultTitle}
`;

const DropboxPath = styled.div`
  ${ResultContent}
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
