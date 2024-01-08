import React, { useState } from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';

const SearchPlace = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState('');

  const onToggleModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleComplete = (data: Address) => {
    console.log(data);
    onToggleModal();
    setAddress(data.address);
  };

  return (
    <div>
      <input
        className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3 w-80"
        type="text"
        placeholder="주소를 검색해보세요"
        value={address}
        readOnly
      />
      <button className="btn" type="button" onClick={onToggleModal}>
        검색
      </button>
      {isOpen && (
        <div>
          <DaumPostcode onComplete={handleComplete} />
        </div>
      )}
    </div>
  );
};
export default SearchPlace;
