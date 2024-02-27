import { utilitiesDataType } from '@/types/utilitiesData.type';

export type SearchSkill = {
  users: {
    uid: string;
    displayName: string;
    skills: {
      uid: string;
      displayName: string;
      level: number;
    }[];
  }[];
  utilities: {
    skills: utilitiesDataType[];
  };
};

export type SearchManager = {
  managers: {
    uid: string;
    displayName: string;
    manager: utilitiesDataType;
  }[];
  utilities: {
    managers: utilitiesDataType[];
  };
};

export type SearchQualification = {
  qualifications: {
    uid: string;
    displayName: string;
    qualification: {
      uid: string;
      displayName: string;
      expiryDate?: Date;
    };
  }[];
  utilities: {
    qualifications: utilitiesDataType[];
  };
};
