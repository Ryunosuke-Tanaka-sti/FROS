import useSWR from 'swr';

import {
  createUserMe,
  fetchUserMe,
  updateUserMe,
  updateUserMeManager,
  updateUserMePersonalInfo,
  updateUserMeQualification,
  updateUserMeSkills,
} from '@/api/User';
import {
  RequestUpdateManager,
  RequestUpdatePersonalInfo,
  RequestUpdateQualification,
  RequestUpdateSkills,
  RequestUpdateUser,
} from '@/types/requestUser.type';

export const useUser = () => {
  const {
    data: userData,
    isLoading: isLoadingUserData,
    mutate: userDataRefresh,
  } = useSWR('users/me', fetchUserMe);

  const createUserMeFunction = async (userInfo: RequestUpdatePersonalInfo) => {
    await createUserMe(userInfo);
    userDataRefresh();
  };

  const updateUserMeFunction = async (userInfo: RequestUpdateUser) => {
    await updateUserMe(userInfo);
    userDataRefresh();
  };

  const updateUserMePersonalInfoFunction = async (userInfo: RequestUpdatePersonalInfo) => {
    await updateUserMePersonalInfo(userInfo);
    userDataRefresh();
  };

  const updateUserMeSkillsFunction = async (skills: RequestUpdateSkills) => {
    await updateUserMeSkills(skills);
    userDataRefresh();
  };

  const updateUserMeQualificationFunction = async (qualification: RequestUpdateQualification) => {
    await updateUserMeQualification(qualification);
    userDataRefresh();
  };
  const updateUserMeManagerFunction = async (manager: RequestUpdateManager) => {
    await updateUserMeManager(manager);
    userDataRefresh();
  };

  return {
    userData,
    isLoadingUserData,
    userDataRefresh,
    createUserMeFunction,
    updateUserMeFunction,
    updateUserMeSkillsFunction,
    updateUserMeQualificationFunction,
    updateUserMeManagerFunction,
    updateUserMePersonalInfoFunction,
  };
};
