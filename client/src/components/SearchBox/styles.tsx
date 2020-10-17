import styled from "styled-components";

const SearchBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  border: solid 1px black;
`;

const SearchInput = styled.input`
  height: 80px;
`;

export { SearchBoxWrapper, SearchInput };