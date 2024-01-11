import React, { useEffect, useState } from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';
import useScheduleState from '@/hooks/recoil/useScheduleState';

declare global {
  interface Window {
    kakao: any;
  }
}

const SearchPlace = () => {
  const { setScheduleCreateState } = useScheduleState();
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState('');

  const onToggleModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleComplete = (data: Address) => {
    onToggleModal();
    setAddress(data.address);
    setScheduleCreateState(prevSchedule => ({
      ...prevSchedule,
      locationExplanation: data.address
    }));
  };

  useEffect(() => {
    // 위도 및 경도 좌푯값 구하기
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, (result: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        // console.log(`위도 : ${result[0].y}`);
        // console.log(`경도 : ${result[0].x}`);
        const lat = `${result[0].x}`;
        const long = `${result[0].y}`;

        setScheduleCreateState(prevSchedule => ({
          ...prevSchedule,
          latitude: lat,
          longitude: long
        }));
      }
    });
  }, [address]);

  return (
    <div className="flex">
      <input
        className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3 w-80 flex-1"
        type="text"
        placeholder="주소를 검색해주세요."
        value={address}
        readOnly
      />
      <button
        className="border border-gray3 w-16 ml-2 rounded-lg text-body2"
        type="button"
        onClick={onToggleModal}
      >
        검색
      </button>
      {isOpen && (
        <div className="before:content-[''] before:fixed before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-45 before:z-10">
          <div className="fixed top-1/2 left-0 right-0 m-auto -translate-y-1/2 z-20">
            <DaumPostcode onComplete={handleComplete} />
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchPlace;
