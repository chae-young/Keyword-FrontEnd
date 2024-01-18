import FriendsList from '../FriendsList';
import useGetMyFriendsQuery from '@/hooks/query/friends/useGetMyFriendsQuery';
import Modal from '@/components/common/Modal';
import useModalState from '@/hooks/recoil/useModalState';
import ModalInReqOkOrNo from './ModalInReqOkOrNo';
import { REQUESTED } from '@/constants/friends';

const RequestedFriends = () => {
  const { friendsList, friendsListFetchNextPage } =
    useGetMyFriendsQuery(REQUESTED);
  const { reqModalState } = useModalState();

  return (
    <section className="pt-5">
      {friendsList && (
        <FriendsList
          lists={friendsList}
          FetchNextPage={friendsListFetchNextPage}
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
