import { utilitiesDataType } from '@/types/utilitiesData.type';

export type UserDataType = {
  uid: string;
  personalInfo: UserPersonalInfoType;
  skills: UserSkillDataType[];
  qualification: UserQualificationDataType[];
  manager: UserManagerDataType[];
};

export type UserPersonalInfoType = {
  displayName: string;
  photoURL: string;
  sl: utilitiesDataType[];
};

export type UserSkillDataType = {
  uid: string;
  displayName: string;
  level: 0 | 1 | 2 | 3 | 4 | 5;
};
export type UserQualificationDataType = {
  uid: string;
  displayName: string;
  expiryDate?: Date;
};

export type UserManagerDataType = {
  uid: string;
  displayName: string;
};
