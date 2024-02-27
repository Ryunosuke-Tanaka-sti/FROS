import { RequestUpdatePersonalInfo } from '@/types/requestUser.type';
import { UserDataType } from '@/types/userData.type';

export const userPersonalInfo: RequestUpdatePersonalInfo = {
  personalInfo: {
    displayName: 'test',
    photoURL: 'test',
    sl: ['aaaaaa', 'bbbbbb'],
  },
};

export const userData: UserDataType = {
  uid: 'aaaaaa',
  personalInfo: {
    displayName: 'test',
    photoURL: 'test',
    sl: [
      {
        uid: 'aaaaaa',
        displayName: 'aaaaaa',
      },
      {
        uid: 'bbbbbb',
        displayName: 'bbbbbb',
      },
    ],
  },
  skills: [
    {
      uid: 'aaaaaa',
      displayName: 'aaaaaa',
      level: 1,
    },
    {
      uid: 'bbbbbb',
      displayName: 'bbbbbb',
      level: 2,
    },
  ],
  qualification: [
    {
      uid: 'aaaaaa',
      displayName: 'aaaaaa',
    },
    {
      uid: 'bbbbbb',
      displayName: 'bbbbbb',
      expiryDate: new Date(),
    },
  ],
  manager: [
    {
      uid: 'aaaaaa',
      displayName: 'aaaaaa',
    },
    {
      uid: 'bbbbbb',
      displayName: 'bbbbbb',
    },
  ],
};
