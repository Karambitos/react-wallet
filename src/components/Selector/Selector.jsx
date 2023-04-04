import React, { memo } from 'react';
import Select from 'react-select';

const customStyles = {
  control: provided => ({
    ...provided,
    backgroundColor: 'white',
    border: 'none',
    borderBottom: '1px solid #e0e0e0',

    minHeight: '32px',
    fontSize: '18px',
    fontFamily: 'Circe',
    lineHeight: '27px',
    fontWeight: '700',
    color: '#bdbdbd',
  }),
  option: provided => ({
    ...provided,
    color: 'black',
    fontSize: '18px',
  }),
  singleValue: provided => ({
    ...provided,
    color: 'black',
  }),
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
    <Select
      options={options.map((option, index) => ({
        value: option.id ? option.id : index + 1,
        label: option.name,
      }))}
      onChange={handleOptionSelect}
      placeholder={placeholder ? placeholder : 'Select an option'}
      styles={styles ? styles : customStyles}
      defaultInputValue={defaultInputValue}
      required
    />
  );
}

export default memo(Selector);
