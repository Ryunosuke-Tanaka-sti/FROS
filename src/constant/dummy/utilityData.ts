import { UserQualificationDataType, UserSkillDataType } from '@/types/userData.type';
import { utilitiesDataType } from '@/types/utilitiesData.type';
// ダミーデータを30件作成
export const utilityData: utilitiesDataType[] = [
  {
    uid: 'aaaaaa',
    displayName: 'aaaaaa',
  },
  {
    uid: 'bbbbbb',
    displayName: 'bbbbbb',
  },
  {
    uid: 'cccccc',
    displayName: 'cccccc',
  },
  {
    uid: 'dddddd',
    displayName: 'dddddd',
  },
  {
    uid: 'eeeeee',
    displayName: 'eeeeee',
  },
  {
    uid: 'ffffff',
    displayName: 'ffffff',
  },
  {
    uid: 'gggggg',
    displayName: 'gggggg',
  },
  {
    uid: 'hhhhhh',
    displayName: 'hhhhhh',
  },
  {
    uid: 'iiiiii',
    displayName: 'iiiiii',
  },
  {
    uid: 'jjjjjj',
    displayName: 'jjjjjj',
  },
  {
    uid: 'kkkkkk',
    displayName: 'kkkkkk',
  },
];

export const selectUtility: string[] = ['aaaaaa', 'bbbbbb'];

export const selectQualification: Omit<UserQualificationDataType, 'displayName'>[] = [
  {
    uid: 'aaaaaa',
  },
  {
    uid: 'bbbbbb',
    expiryDate: new Date(),
  },
];

export const selectSkill: Omit<UserSkillDataType, 'displayName'>[] = [
  {
    uid: 'aaaaaa',
    level: 0,
  },
  {
    uid: 'bbbbbb',
    level: 1,
  },
];
