import { UserDataType } from '@/types/userData.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const fetchUserMe = async () => {
  const res = await axiosClient.get<UserDataType>('/api/users/me');
  return res.data;
};

export const createUserMe = async (
  request: Omit<UserDataType, 'uid' | 'skills' | 'qualification' | 'manager'>,
) => {
  await axiosClient.post('/api/users', request);
};

export const updateUserMe = async (request: Omit<UserDataType, 'uid'>) => {
  await axiosClient.put('/api/users', request);
};
