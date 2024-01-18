import { FaUserAlt } from 'react-icons/fa';
// 프로필 사진 x
interface AvatarProps {
  h: string;
  iconWidth?: string;
}
const Avatar = ({ h, iconWidth }: AvatarProps) => (
  <div className={`bg-gray2 ${h}`}>
    <div className="flex justify-center items-center h-full ">
      <FaUserAlt className={`${iconWidth || 'text-7xl'} text-white`} />
    </div>
  </div>
);

export default Avatar;
