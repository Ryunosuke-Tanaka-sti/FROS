export type utilitiesDataType = {
  uid: string;
  displayName: string;
};

export type utilitiesAllDataType = {
  sl: utilitiesDataType[];
  skills: utilitiesDataType[];
  qualification: utilitiesDataType[];
  manager: utilitiesDataType[];
};

export type createUtilitiesDataType = Omit<utilitiesDataType, 'uid'>;
