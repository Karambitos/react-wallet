import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'c9d9e447-1b83-4238-8712-edc77b18b739', label: 'Main Expenses' },
  { value: '27eb4b75-9a42-4991-a802-4aefe21ac3ce', label: 'Products' },
  { value: 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4', label: 'Self care' },
  { value: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386', label: 'Car' },
  { value: '76cc875a-3b43-4eae-8fdb-f76633821a34', label: 'Child care' },
  {
    value: '128673b5-2f9a-46ae-a428-ec48cf1effa1',
    label: 'Household products',
  },
  { value: '1272fcc4-d59f-462d-ad33-a85a075e5581', label: 'Education' },
  { value: 'c143130f-7d1e-4011-90a4-54766d4e308e', label: 'Leisure' },
  { value: '719626f1-9d23-4e99-84f5-289024e437a8', label: 'Other expenses' },
  { value: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402', label: 'Entertainment' },
  
];





const customStyles = {
  control: provided => ({
    ...provided,
    borderRadius: '0',
    borderColor: 'grey',
    '&:hover': {
      borderColor: 'grey',
    },
    pointerEvents: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'blue' : 'white',
    color: state.isSelected ? 'white' : 'black',
    '&:hover': {
      backgroundColor: state.isSelected ? 'blue' : '#f2f2f2',
    },
  }),
};

const CustomSelect = ({ defaultInputValue, onSelect }) => {
  const handleSelectChange = option => {
    onSelect(option.value);
  };
  const defaultOption = options.find(
    option => option.value === defaultInputValue
  );

  return (
    <Select
      onChange={handleSelectChange}
      defaultValue={defaultOption}
      options={options}
      styles={customStyles}
    />
  );
};

export default CustomSelect;
