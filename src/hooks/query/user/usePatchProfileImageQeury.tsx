import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { axiosAuth } from '@/apis';
import { FriendAddType } from '@/types/friend/friendsDataType';

const responsAPI = async (formData: FormData): Promise<FriendAddType> => {
  const res = await axiosAuth.patch('/members/profile-image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return res.data;
};

const usePatchProfileImageQuery = () => {
  const {
    data: isProfileImageUpdate,
    mutate: profileImageUpdateIsMutate,
    isError: profileImageUpdateIsError,
    isSuccess: profileImageUpdateIsSuccess
  } = useMutation({
    mutationKey: ['profileImageUpdate'],
    mutationFn: (formData: FormData) => responsAPI(formData)
  });

  return {
    isProfileImageUpdate,
    profileImageUpdateIsMutate,
    profileImageUpdateIsError,
    profileImageUpdateIsSuccess
  };
};

export default usePatchProfileImageQuery;
