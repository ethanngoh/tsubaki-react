import styled from "@emotion/styled";
import Select, { ActionMeta, SingleValue } from "react-select";
import { ColorKey, getColor, GRAY_RANGE } from "../colors";

const SearchFilterContainer = styled.div`
  width: 100%;
  color: #000;
`;

type SelectOption = { value: string; label: string };

export const SearchInput = ({
  names,
  placeholder,
  setName,
}: {
  names: string[];
  placeholder?: string;
  setName: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const options = [
    ...names.map((d) => {
      return {
        value: d,
        label: d,
      };
    }),
  ];

  const customStyle = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: `1px solid ${GRAY_RANGE[300]}`,
      color: state.isSelected ? GRAY_RANGE[900] : GRAY_RANGE[900],
      backgroundColor: state.isSelected ? GRAY_RANGE[200] : GRAY_RANGE[100],
      padding: "0.5rem 1rem",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: getColor(ColorKey.SEARCH_BACKGROUND),
      border: `1px solid ${GRAY_RANGE[200]}`,
      minHeight: 0,
    }),
    menuList: (provided: any, state: any) => ({
      ...provided,
      padding: 0,
      border: `1px solid ${GRAY_RANGE[300]}`,
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      padding: "0rem 5rem",
      fontSize: "1rem",
    }),
    inputContainer: (provided: any, state: any) => ({
      ...provided,
      fontSize: "0.5rem",
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      fontSize: "1rem",
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      padding: "0.25rem",
    }),
  };

  return (
    <SearchFilterContainer>
      <Select
        name="filters"
        options={options}
        className="select"
        classNamePrefix="select"
        placeholder={placeholder}
        styles={customStyle}
        onChange={(
          newValue: SingleValue<SelectOption>,
          actionMeta: ActionMeta<SelectOption>
        ) => {
          setName(newValue?.value);
        }}
      />
    </SearchFilterContainer>
  );
};
