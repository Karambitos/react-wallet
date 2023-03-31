import React from 'react';
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

function Selector({ options, onSelect }) {
  const handleOptionSelect = selectedOption => {
    onSelect(selectedOption.value);
  };

  return (
    <Select
      options={options.map(option => ({ value: option, label: option }))}
      onChange={handleOptionSelect}
      placeholder="Select an option"
      styles={customStyles}
    />
  );
}

export default Selector;