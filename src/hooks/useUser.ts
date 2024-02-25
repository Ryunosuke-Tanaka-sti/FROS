import useSWR from 'swr';

import {
  fetchUserMe,
  updateUserMe,
  updateUserMeManager,
  updateUserMeQualification,
  updateUserMeSkills,
} from '@/api/User';
import {
  RequestUpdateManager,
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

  const updateUserMeFunction = async (userInfo: RequestUpdateUser) => {
    await updateUserMe(userInfo);
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
    updateUserMeFunction,
    updateUserMeSkillsFunction,
    updateUserMeQualificationFunction,
    updateUserMeManagerFunction,
  };
};
