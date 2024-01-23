import { FaRegBell } from '@react-icons/all-files/fa/FaRegBell';
import { Link } from 'react-router-dom';

const Alarm = () => (
  <Link
    to="/alarm"
    className="w-14 h-full flex justify-center items-center absolute right-0 top-0"
  >
    <FaRegBell className="text-xl text-bk" />
  </Link>
);

export default Alarm;
