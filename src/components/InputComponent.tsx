import React, { ChangeEvent, useState } from 'react';

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-4">
      <label htmlFor="inputField" className="block text-sm font-medium text-gray-700">
        Enter something:
      </label>
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleInputChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Type here..."
      />
      <p className="mt-2 text-sm text-gray-500">
        You typed: <span className="font-semibold">{inputValue}</span>
      </p>
    </div>
  );
};

export default InputComponent;