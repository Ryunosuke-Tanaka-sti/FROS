import { useParams } from 'react-router-dom';

import { UserManager } from '@/components/modules/UserManager/UserManager';
import { UserPersonalInfo } from '@/components/modules/UserPersonalInfo/UserPersonalInfo';
import { UserQualification } from '@/components/modules/UserQualification/UserQualification';
import { UserSkill } from '@/components/modules/UserSkill/UserSkill';
import { useUserById } from '@/hooks/useUser';

export const UserPage = () => {
  const { userID } = useParams();

  if (!userID) throw new Error('userID is required');

  const { userData, isLoadingUserData } = useUserById(userID);
  if (!userData || isLoadingUserData) return <div>loading</div>;

  return (
    <div className="flex w-full flex-row items-start gap-5 p-10">
      <UserPersonalInfo personalInfo={userData.personalInfo} />
      <div className="flex grow flex-col gap-5">
        <UserSkill skill={userData.skills} />
        <UserQualification qualification={userData.qualification} />
        <UserManager manager={userData.manager} />
      </div>
    </div>
  );
};
