import React, { useState } from 'react';
import usePatchMyPasswordQuery from '@/hooks/query/user/usePatchMyPasswordQuery';
import TopTitle from '@/components/common/TopTitle';

const MyPasswordUpdate = () => {
  const [newPassword, setNewPassword] = useState('');
  const { MyPasswordUpdateIsMutate } = usePatchMyPasswordQuery();

  const handlePasswordUpdate = () => {
    MyPasswordUpdateIsMutate(newPassword);
    setNewPassword('');
  };

  return (
    <div>
      <TopTitle title="비밀번호 변경하기" />
      <input
        type="password"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
      />

      <button className="btn" type="submit" onClick={handlePasswordUpdate}>
        변경하기
      </button>
    </div>
  );
};

export default MyPasswordUpdate;
