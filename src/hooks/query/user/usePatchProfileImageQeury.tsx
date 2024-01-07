import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { FriendAddType } from '@/types/friend/friendsDataType';

const fetchAPI = async (formData: FormData): Promise<FriendAddType> => {
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
    mutationFn: (formData: FormData) => fetchAPI(formData)
  });

  return {
    isProfileImageUpdate,
    profileImageUpdateIsMutate,
    profileImageUpdateIsError,
    profileImageUpdateIsSuccess
  };
};

export default usePatchProfileImageQuery;
