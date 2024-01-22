import React, { useEffect } from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';

declare global {
  interface Window {
    kakao: any;
  }
}
interface ScheduleAddrProps {
  isOpenAddrPopup: boolean;
  scheduleAddress: { address: string; latitude: number; longitude: number };
  setScheduleAddress: React.Dispatch<
    React.SetStateAction<{
      address: string;
      latitude: number;
      longitude: number;
    }>
  >;
  handleAddrComplete: (data: Address) => void;
  handleAddrPopup: () => void;
}

const ScheduleAddr = ({
  scheduleAddress,
  handleAddrComplete,
  setScheduleAddress,
  handleAddrPopup,
  isOpenAddrPopup
}: ScheduleAddrProps) => {
  useEffect(() => {
    // 위도 및 경도 좌푯값 구하기
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(
      scheduleAddress.address || '서울 강남구 가로수길 5',
      (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          // console.log(`위도 : ${result[0].y}`);
          // console.log(`경도 : ${result[0].x}`);
          const lat = result[0].x;
          const long = result[0].y;

          setScheduleAddress(prevState => ({
            ...prevState,
            latitude: Number(lat),
            longitude: Number(long)
          }));
        }
      }
    );
  }, [scheduleAddress.address]);

  return (
    <div className="flex">
      <input
        className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3 w-80 flex-1"
        type="text"
        placeholder="주소를 검색해주세요."
        value={scheduleAddress.address}
        readOnly
      />
      <button
        className="border border-gray3 w-16 ml-2 rounded-lg text-body2"
        type="button"
        onClick={handleAddrPopup}
      >
        검색
      </button>
      {isOpenAddrPopup && (
        <div className="before:content-[''] before:fixed before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-45 before:z-[99]">
          <div className="fixed top-1/2 left-0 right-0 m-auto -translate-y-1/2 z-[100] max-w-default">
            <DaumPostcode onComplete={handleAddrComplete} />
          </div>
        </div>
      )}
    </div>
  );
};
export default ScheduleAddr;
