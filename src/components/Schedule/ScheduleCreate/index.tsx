import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ko';
import { Address } from 'react-daum-postcode';
import { IoPersonAddSharp } from '@react-icons/all-files/io5/IoPersonAddSharp';
import WideButton from '@/components/common/Button/WideButton';
import usePostSchedulesQuery from '@/hooks/query/schedules/usePostSchedulesQuery';
import useInput from '@/hooks/useInput';
import ScheduleInputBox from './ScheduleInputBox';
import Input from '@/components/common/Input';
import SelectDate from '@/components/common/DateTimePicker/Date';
import {
  ScheduleDetailType,
  ScheduleEditDataType,
  ScheduleTime
} from '@/types/schedule/scheduleDataType';
import TimePicker from '@/components/common/DateTimePicker/Time';
import SelectRemind from '@/components/common/Select/SelectOption';

import { formatTime } from '@/util/\bdate';
import useModalState from '@/hooks/recoil/useModalState';
import usePatchScheduleQuery from '@/hooks/query/schedules/usePatchScheduleQuery';
import ScheduleAddr from './ScheduleAddr';
import useUserState from '@/hooks/recoil/useUserState';

interface ScheduleCreateProps {
  scheduleToEdit?: ScheduleDetailType;
}

const ScheduleCreate = ({ scheduleToEdit }: ScheduleCreateProps) => {
  const navigate = useNavigate();
  const parms = useParams();
  const { userState } = useUserState();
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
    // 일정 날짜 localdatetime으로 변환
    const dateAndTime = `${scheduleDateAndTime.date} ${scheduleDateAndTime.time}`;
    const momentObject = moment(dateAndTime, 'YYYY-MM-DD HH:mm');
    const localDatetimeString = momentObject
      .local()
      .format('YYYY-MM-DDTHH:mm:ss');

    const scheduleData: ScheduleDetailType = {
      organizerId: userState.memberId,
      title: scheduleTitle,
      contents,
      scheduleAt: localDatetimeString,
      locationExplanation: scheduleAddress.address,
      latitude: scheduleAddress.latitude,
      longitude: scheduleAddress.longitude,
      remindAt: Number(scheduleSelectedRemind),
      scheduleFriendList: mySelectdFriends
    };

    if (scheduleToEdit) {
      const editData: ScheduleEditDataType = {
        schedule: { ...scheduleData },
        scheduleId: Number(parms.id)
      };
      patchedScheduleIsMutate(editData);
      navigate(-1);
    } else {
      scheduleIsMutate(scheduleData);
      navigate('/', { replace: true });
    }

    navigate('/', { replace: true });
  };

  // 일정 수정시 defaultValue setting
  useEffect(() => {
    if (scheduleToEdit) {
      const [date, time] = scheduleToEdit.scheduleAt.split('T');
      setScheduleTitle(scheduleToEdit.title);
      setContents(scheduleToEdit.contents);
      setScheduleDate(new Date(date));
      setScheduleDateAndTime({ date, time });
      setScheduleSelectedRemind(`${scheduleToEdit.remindAt}`);
      setScheduleSelectedTime(new Date(`${date} ${time}`));
      setScheduleAddress(prevState => ({
        ...prevState,
        address: scheduleToEdit.locationExplanation
      }));
      saveMySelectedFriends(scheduleToEdit.scheduleFriendList);
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
  // 친구 선택
  const handleFriendSelect = () => {
    openModal();
  };

  return (
    <form className="pt-0" onSubmit={handleSubmit}>
      <ScheduleInputBox
        title="제목"
        element={
          <Input
            type="text"
            placeholder="일정 제목을 입력해주세요. (30자 이하)"
            value={scheduleTitle}
            maxLength={30}
            handleChangeInput={handleChangeScheduleTitle}
          />
        }
      />
      <ScheduleInputBox
        title="내용"
        element={
          <textarea
            className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 p-3 w-full resize-none h-20"
            placeholder="내용을 입력해주세요. (15자 이상)"
            value={contents}
            minLength={15}
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
      <ScheduleInputBox
        title="친구"
        element={
          <div className="">
            {mySelectdFriends.length > 0 ? (
              <button
                className="w-full text-body2 h-10 text-white bg-primary rounded-xl"
                type="button"
                onClick={handleFriendSelect}
              >
                {`${mySelectdFriends.length}명의 친구가 선택되었어요`}
              </button>
            ) : (
              <button
                className="w-full rounded-xl h-10 text-body2 bottom-0 text-gray4 bg-white border border-dashed border-gray3 flex justify-center items-center "
                type="button"
                onClick={handleFriendSelect}
              >
                <IoPersonAddSharp className="mr-1" />
                친구 선택하기
              </button>
            )}
          </div>
        }
      />
      <WideButton
        text={scheduleToEdit ? '수정하기' : '등록하기'}
        status={allInputValid}
      />
    </form>
  );
};

export default ScheduleCreate;
