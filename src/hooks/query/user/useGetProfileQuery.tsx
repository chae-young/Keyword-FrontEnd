import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { UserDataType } from '@/types/user/userDataType';

const fetchAPI = async (): Promise<UserDataType> => {
  try {
    const res = await axiosAuth.get('/members');
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const useGetProfileQuery = () => {
  const {
    data: user,
    isLoading: userIsLoading,
    isSuccess: userIsSuceess,
    isError: userIsError
  } = useQuery({
    queryKey: ['myProfile'],
    queryFn: () => fetchAPI(),

    staleTime: Infinity
  });

  return {
    user,
    userIsLoading,
    userIsSuceess,
    userIsError
  };
};

export default useGetProfileQuery;
