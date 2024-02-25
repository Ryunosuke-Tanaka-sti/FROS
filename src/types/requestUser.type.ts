import { UserQualificationDataType, UserSkillDataType } from '@/types/userData.type';

export type RequestUpdateManager = {
  manager: string[];
};
export type RequestUpdateSkills = {
  skills: Omit<UserSkillDataType, 'displayName'>[];
};
export type RequestUpdateQualification = {
  qualification: Omit<UserQualificationDataType, 'displayName'>[];
};
export type RequestUpdatePersonalInfo = {
  personalInfo: {
    displayName: string;
    photoURL: string;
    sl: string[];
  };
};
export type RequestUpdateUser = {
  personalInfo: RequestUpdatePersonalInfo;
  skills: RequestUpdateSkills;
  qualification: RequestUpdateQualification;
  manager: RequestUpdateManager;
};
