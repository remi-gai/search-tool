import styled from "styled-components";

const FilterMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;
  margin-left: 20px;
  width: 240px;
  height: 400px;
`;

const TagsFilter = styled.div``;

const TagIcon = styled.img.attrs({ src: "./icons/tagged-icon.png" })`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-right: 5px;
`;

const TagsFilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  height: 40px;
  border-radius: 4px;
  &:hover {
    color: #415aff;
    background-color: #f9f9f9;
    font-weight: bolder;
    cursor: pointer;
  }
`;

const FilterTitle = styled.div`
  font-weight: bolder;
  color: gray;
`;

const CategoryFilter = styled.div`
  font-weight: ${(props) => (props.category ? "bolder" : "normal")};
  color: ${(props) => (props.category ? "#415aff" : "black")};
  &:hover {
    color: #415aff;
    font-weight: bolder;
    cursor: pointer;
  }
`;

const CategoryFilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CategoryResultCount = styled.div`
  font-size: 14px;
  color: gray;
  font-weight: ${(props) => (props.category ? "bolder" : "normal")};
  color: ${(props) => (props.category ? "#415aff" : "black")};
`;

export {
  TagsFilter,
  TagIcon,
  TagsFilterWrapper,
  FilterMenuWrapper,
  FilterTitle,
  CategoryFilter,
  CategoryFilterWrapper,
  CategoryResultCount,
};
