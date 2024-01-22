import { IoPersonAddSharp } from 'react-icons/io5';
import ScheduleInputBox from '../ScheduleInputBox';

const ScheduleFriends = () => (
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
);

export default ScheduleFriends;
