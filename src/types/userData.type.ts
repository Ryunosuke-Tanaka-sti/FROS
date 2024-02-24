export type UserDataType = {
  uid: string;
  personalInfo: UserPersonalInfoType;
  skills: UserSkillDataType[];
  qualification: UserQualificationDataType[];
  manager: string[];
};

export type UserPersonalInfoType = {
  displayName: string;
  photoURL: string;
  sl: string[];
};

export type UserSkillDataType = {
  id: string;
  level: 0 | 1 | 2 | 3 | 4 | 5;
};
export type UserQualificationDataType = {
  id: string;
  expiryDate?: Date;
};
