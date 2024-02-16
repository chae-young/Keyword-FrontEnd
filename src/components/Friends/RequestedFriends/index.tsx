import FriendsList from '../FriendsList';
import useGetMyFriendsQuery from '@/hooks/query/friends/useGetMyFriendsQuery';
import Modal from '@/components/common/Modal';
import useModalState from '@/hooks/recoil/useModalState';
import ModalInReqOkOrNo from './ModalInReqOkOrNo';
import { REQUESTED } from '@/constants/friends';
import useAlarmState from '@/hooks/recoil/useAlarmState';

const RequestedFriends = () => {
  const { alarmNoticeState } = useAlarmState();
  const { friendsList, friendsListFetchNextPage, friendsListHasNextPage } =
    useGetMyFriendsQuery(REQUESTED, alarmNoticeState.noticeId);

  const { reqModalState } = useModalState();

  return (
    <section className="pt-5">
      {friendsList && (
        <FriendsList
          lists={friendsList}
          FetchNextPage={friendsListFetchNextPage}
          hasNextPage={friendsListHasNextPage}
          reqCheck
        />
      )}
      <Modal>
        <ModalInReqOkOrNo name={reqModalState.friendName} />
      </Modal>
    </section>
  );
};

export default RequestedFriends;
