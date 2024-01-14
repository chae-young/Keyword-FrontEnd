import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { Address } from 'react-daum-postcode';
import WideButton from '@/components/common/Button/WideButton';
import ScheduleFriends from './ScheduleFriends';
import usePostSchedulesQuery from '@/hooks/query/schedules/usePostSchedulesQuery';
import useInput from '@/hooks/useInput';
import ScheduleInputBox from './ScheduleInputBox';
import Input from '@/components/common/Input';
import SelectDate from '@/components/common/DateTimePicker/Date';
import {
  ScheduleDetailType,
  ScheduleTime
} from '@/types/schedule/scheduleDataType';
import TimePicker from '@/components/common/DateTimePicker/Time';
import SelectRemind from '@/components/common/Select/SelectOption';
import ScheduleAddr from './ScheduleAddr';
import { formatTime } from '@/util/\bdate';
import useModalState from '@/hooks/recoil/useModalState';
import usePatchScheduleQuery from '@/hooks/query/schedules/usePatchScheduleQuery';

interface ScheduleCreateProps {
  scheduleToEdit?: ScheduleDetailType;
}

const ScheduleCreate = ({ scheduleToEdit }: ScheduleCreateProps) => {
  const navigate = useNavigate();
  const parms = useParams();

  const { scheduleIsMutate } = usePostSchedulesQuery();
  const { patchedScheduleIsMutate } = usePatchScheduleQuery();
  const { saveMySelectedFriends } = useModalState();
  const { mySelectdFriends, openModal } = useModalState();
  const [allInputValid, setAllInputValid] = useState(false);
  const [isOpenAddrPopup, setIsOpenAddrPopup] = useState(false);

  // form 관련 state
  const [scheduleDateAndTime, setScheduleDateAndTime] = useState<ScheduleTime>({
    date: '',
    time: ''
  });
  const [scheduleTitle, setScheduleTitle, handleChangeScheduleTitle] =
    useInput('');
  const [contents, setContents, handleChangeContents] = useInput('');
  const [scheduleDate, setScheduleDate] = useState<Date | null>(null);
  const [scheduleSelectedTime, setScheduleSelectedTime] = useState<Date | null>(
    null
  );
  const [scheduleSelectedRemind, setScheduleSelectedRemind] = useState('');
  const [scheduleAddress, setScheduleAddress] = useState({
    address: '',
    latitude: 0,
    longitude: 0
  });
  // 유효성 검사 체크 TODO: 리팩토링 필요..
  useEffect(() => {
    if (
      scheduleTitle &&
      contents &&
      // scheduleDateAndTime.date &&
      // scheduleDateAndTime.time &&
      scheduleDate &&
      scheduleSelectedTime &&
      scheduleSelectedRemind &&
      scheduleAddress.address &&
      scheduleAddress.latitude &&
      scheduleAddress.longitude &&
      mySelectdFriends.length
    ) {
      setAllInputValid(true);
    } else {
      setAllInputValid(false);
    }
  }, [
    scheduleTitle,
    contents,
    scheduleDateAndTime.date,
    scheduleDateAndTime.time,
    scheduleDate,
    scheduleSelectedTime,
    scheduleSelectedRemind,
    scheduleAddress.address,
    scheduleAddress.latitude,
    scheduleAddress.longitude,
    mySelectdFriends
  ]);

  // useEffect(() => {
  //   const allInputChecked = Object.values(scheduleCreateState).every(value =>
  //     Array.isArray(value) ? value.length > 0 : value !== ''
  //   );
  //   if (allInputChecked) {
  //     setAllInputValid(true);
  //   } else {
  //     setAllInputValid(false);
  //   }
  // }, [scheduleCreateState]);

  // 전송
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const scheduleData = {
      title: scheduleTitle,
      contents,
      scheduleDateTime: '',
      locationExplanation: scheduleAddress.address,
      latitude: scheduleAddress.latitude,
      longitude: scheduleAddress.longitude,
      remindDateTime: scheduleSelectedRemind,
      friendList: mySelectdFriends // TODO: 주최자 추가해야함(나자신)
    };
    if (scheduleToEdit) {
      patchedScheduleIsMutate(Number(parms.id));
    } else {
      scheduleIsMutate(scheduleData);
    }

    navigate('/', { replace: true });
  };

  // 일정 수정시 defaultValue setting
  useEffect(() => {
    if (scheduleToEdit) {
      const [date, time] = scheduleToEdit.scheduleDateTime.split('T');
      setScheduleTitle(scheduleToEdit.title);
      setContents(scheduleToEdit.contents);
      setScheduleDate(new Date(date));
      setScheduleSelectedTime(new Date(`${date} ${time}`));
      setScheduleAddress(prevState => ({
        ...prevState,
        address: scheduleToEdit.locationExplanation
      }));
      saveMySelectedFriends(scheduleToEdit.friendList);
    }
  }, [scheduleToEdit]);
  // 날짜
  const handleDate = (date: Date) => {
    setScheduleDate(date);
    const newDate = moment(date).format('YYYY-MM-DD');
    setScheduleDateAndTime((prevState: ScheduleTime) => ({
      ...prevState,
      date: newDate
    }));
  };
  // 시간
  const handleSelectedTime = (date: Date) => {
    setScheduleSelectedTime(date);

    setScheduleDateAndTime((prevState: ScheduleTime) => ({
      ...prevState,
      time: formatTime(date)
    }));
  };

  // 알림
  const handleRemind = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setScheduleSelectedRemind(e.target.value);
  };

  // 주소 팝업
  const handleAddrPopup = () => {
    setIsOpenAddrPopup(prev => !prev);
  };

  // 주소 입력 완료
  const handleAddrComplete = (data: Address) => {
    handleAddrPopup();
    setScheduleAddress(prevState => ({
      ...prevState,
      address: data.address
    }));
  };

  return (
    <form className="pt-0" onSubmit={handleSubmit}>
      <ScheduleInputBox
        title="제목"
        element={
          <Input
            type="text"
            placeholder="일정 제목을 입력해주세요."
            value={scheduleTitle}
            handleChangeInput={handleChangeScheduleTitle}
          />
        }
      />
      <ScheduleInputBox
        title="내용"
        element={
          <textarea
            className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 p-3 w-full resize-none h-20"
            placeholder="내용을 입력해주세요."
            value={contents}
            onChange={handleChangeContents}
          />
        }
      />
      <ScheduleInputBox
        title="날짜"
        element={
          <SelectDate scheduleDate={scheduleDate} handleDate={handleDate} />
        }
      />
      <ScheduleInputBox
        title="시간"
        element={
          <TimePicker
            scheduleSelectedTime={scheduleSelectedTime}
            handleSelectedTime={handleSelectedTime}
          />
        }
      />
      <ScheduleInputBox
        title="알림"
        element={
          <SelectRemind
            scheduleSelectedRemind={scheduleSelectedRemind}
            handleRemind={handleRemind}
          />
        }
      />
      <ScheduleInputBox
        title="주소"
        element={
          <ScheduleAddr
            isOpenAddrPopup={isOpenAddrPopup}
            scheduleAddress={scheduleAddress}
            setScheduleAddress={setScheduleAddress}
            handleAddrComplete={handleAddrComplete}
            handleAddrPopup={handleAddrPopup}
          />
        }
      />
      <ScheduleFriends />
      {scheduleToEdit ? (
        <WideButton text="수정하기" status={allInputValid} />
      ) : (
        <WideButton text="등록하기" status={allInputValid} />
      )}
    </form>
  );
};

export default ScheduleCreate;
