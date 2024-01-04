import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirectAfterToast = (status: boolean, path: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    let countRefId: NodeJS.Timeout;
    if (status) {
      countRefId = setTimeout(() => {
        navigate(path);
      }, 1500);
    }

    return () => {
      clearTimeout(countRefId);
    };
  }, [status]);
};

export default useRedirectAfterToast;
