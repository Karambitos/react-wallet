import React, { memo } from 'react';
import Select, { components } from 'react-select';
import { ReactComponent as DropdowArrow } from '../../assets/svg/dropdowArrow.svg';

const customStyles = {
  control: provided => ({
    ...provided,
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0',
    borderBottom: '1px solid #e0e0e0',
    padding: '0 8px',
    minHeight: '32px',
    fontSize: '18px',
    fontFamily: 'Circe',
    lineHeight: '27px',
    fontWeight: '700',
    color: '#bdbdbd',
  }),
  input: provided => ({
    ...provided,
    padding: '0',
    margin: '0',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0',
  }),
  placeholder: provided => ({
    ...provided,
    fontSize: '16px',
    fontFamily: 'Circe',
    lineHeight: '24px',
    fontWeight: '400',
    color: '#BDBDBD',
  }),
  singleValue: provided => ({
    ...provided,
    color: 'black',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: '0',
    color: 'red',
  }),
  indicatorsContainer: provided => ({
    ...provided,
    padding: '0',
    color: '#000',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    background: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(25px)',
    borderRadius: '20px',
    color: '#000',
    fontSize: '16px',
    overflow: 'hidden',
  }),
  // option: provided => ({
  //   ...provided,
  //   color: 'black',
  //   fontSize: '18px',
  // }),
  // ":hover": { background: "red" }
};

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdowArrow />
    </components.DropdownIndicator>
  );
};

function Selector({
  options,
  onSelect,
  styles,
  defaultInputValue,
  placeholder,
}) {
  const handleOptionSelect = selectedOption => {
    onSelect(selectedOption.value);
  };

  return (
    <>
      <Select
        options={options.map((option, index) => ({
          value: option.id ? option.id : index + 1,
          label: option.name,
        }))}
        components={{ DropdownIndicator }}
        onChange={handleOptionSelect}
        placeholder={placeholder ? placeholder : 'Select an option'}
        styles={styles ? styles : customStyles}
        defaultInputValue={defaultInputValue}
        required
      />
    </>
  );
}

export default memo(Selector);
