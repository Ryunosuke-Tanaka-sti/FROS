import useSWR from 'swr';

import { fetchUserMe } from '@/api/User';

export const useUser = () => {
  const {
    data: userData,
    isLoading: isLoadingUserData,
    mutate: userDataRefresh,
  } = useSWR('users/me', fetchUserMe);

  return { userData, isLoadingUserData, userDataRefresh };
};
