import styled from "styled-components";

const FilterMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  margin-left: 20px;
  align-items: center;
  width: 200px;
  height: 400px;
  border: solid 1px black;
`;

const TagsFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  height: 40px;
  border-radius: 4px;
  &:hover {
    background-color: #d6eee7;
    cursor: pointer;
  }
`;

export { TagsFilter, FilterMenuWrapper };
