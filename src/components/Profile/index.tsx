import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import useGetProfileQuery from '@/hooks/query/user/useGetProfileQuery';
import Avatar from '../common/Avatar';

const Profile = () => {
  const { user } = useGetProfileQuery();
  return (
    <div className="flex justify-between">
      <div className="avatar items-center">
        {user?.imageUrl ? (
          <div className="w-20 rounded-full mr-4">
            <img src={user?.imageUrl} alt={user?.name} />
          </div>
        ) : (
          <div className="w-20 rounded-full bg-gray3 mr-4">
            <Avatar />
          </div>
        )}

        <div className="!flex flex-col justify-center">
          <p className="mt-5">{user?.name}</p>
          <p className="text-body4 text-gray4">{user?.email}</p>
        </div>
      </div>
      <Link to="edit" className="text-body2 text-gray4 flex items-center">
        내 정보 수정 <IoIosArrowForward className="text-body2" />
      </Link>
    </div>
  );
};

export default Profile;
