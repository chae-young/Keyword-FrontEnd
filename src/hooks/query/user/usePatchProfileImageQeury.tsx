import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { axiosAuth } from '@/apis';
import useToast from '@/hooks/useToast';

const fetchAPI = async (formData: FormData): Promise<boolean> => {
  const res = await axiosAuth.patch('/members/profile-image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return res.data;
};

const usePatchProfileImageQuery = () => {
  const navigate = useNavigate();
  const { toastSuccess } = useToast();
  const queryClient = useQueryClient();
  const {
    data: isProfileImageUpdate,
    mutate: profileImageUpdateIsMutate,
    isError: profileImageUpdateIsError,
    isSuccess: profileImageUpdateIsSuccess
  } = useMutation({
    mutationKey: ['profileImageUpdate'],
    mutationFn: (formData: FormData) => fetchAPI(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myProfile'] });
      toastSuccess('프로필 변경이 완료되었습니다.');
      navigate('/mypage', { replace: true });
    }
  });

  return {
    isProfileImageUpdate,
    profileImageUpdateIsMutate,
    profileImageUpdateIsError,
    profileImageUpdateIsSuccess
  };
};

export default usePatchProfileImageQuery;
