import { atom } from 'recoil';

interface MyFriendDeleteStateType {
  id: number;
}

const myFriendDeleteAtom = atom<MyFriendDeleteStateType>({
  key: 'myFriendDeleteAtom',
  default: {
    id: 0
  }
});

export default myFriendDeleteAtom;
