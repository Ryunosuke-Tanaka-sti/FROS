import {
  RequestUpdateManager,
  RequestUpdatePersonalInfo,
  RequestUpdateQualification,
  RequestUpdateSkills,
  RequestUpdateUser,
} from '@/types/requestUser.type';
import { UserDataType } from '@/types/userData.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const fetchUserMe = async () => {
  const res = await axiosClient.get<UserDataType>('/api/users/me');
  return res.data;
};

export const createUserMe = async (request: RequestUpdatePersonalInfo) => {
  await axiosClient.post('/api/users', request);
};

export const updateUserMe = async (request: RequestUpdateUser) => {
  await axiosClient.put('/api/users', request);
};

export const updateUserMePersonalInfo = async (request: RequestUpdatePersonalInfo) => {
  await axiosClient.put('/api/users/personalInfo', request);
};

export const updateUserMeSkills = async (request: RequestUpdateSkills) => {
  await axiosClient.put('/api/users/skills', request);
};

export const updateUserMeQualification = async (request: RequestUpdateQualification) => {
  await axiosClient.put('/api/users/qualification', request);
};
export const updateUserMeManager = async (request: RequestUpdateManager) => {
  await axiosClient.put('/api/users/manager', request);
};
