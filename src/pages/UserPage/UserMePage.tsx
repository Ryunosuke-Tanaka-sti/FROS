import { UserManagerInput } from '@/components/modules/UserManagerInput/UserManagerInput';
import { UserPersonalInput } from '@/components/modules/UserPersonalInput/UserPersonalInput';
import { UserQualificationInput } from '@/components/modules/UserQualificationInput/UserQualificationInput';
import { UserSkillInput } from '@/components/modules/UserSkillInput/UserSkillInput';
import { useUser } from '@/hooks/useUser';
import {
  useUtilitiesDataManager,
  useUtilitiesDataQualification,
  useUtilitiesDataSL,
  useUtilitiesDataSkill,
} from '@/hooks/useUtilities';
import {
  RequestUpdateManager,
  RequestUpdatePersonalInfo,
  RequestUpdateQualification,
  RequestUpdateSkills,
} from '@/types/requestUser.type';

export const UserMePage = () => {
  const {
    userData,
    isLoadingUserData,
    updateUserMeSkillsFunction,
    updateUserMeManagerFunction,
    updateUserMeQualificationFunction,
    updateUserMePersonalInfoFunction,
  } = useUser();
  const { utilitiesDataManager, isLoadingUtilitiesDataManager } = useUtilitiesDataManager();
  const { utilitiesDataSkill, isLoadingUtilitiesDataSkill } = useUtilitiesDataSkill();
  const { utilitiesDataQualification, isLoadingUtilitiesDataQualification } =
    useUtilitiesDataQualification();
  const { utilitiesDataSL, isLoadingUtilitiesDataSL } = useUtilitiesDataSL();
  const onClickUpdateManager = async (data: RequestUpdateManager) => {
    await updateUserMeManagerFunction(data);
  };

  const onClickUpdateSkills = async (data: RequestUpdateSkills) => {
    await updateUserMeSkillsFunction(data);
  };

  const onClickUpdateQualification = async (data: RequestUpdateQualification) => {
    await updateUserMeQualificationFunction(data);
  };

  const onClickUpdatePersonalInfo = async (data: RequestUpdatePersonalInfo) => {
    await updateUserMePersonalInfoFunction(data);
  };

  if (!userData || isLoadingUserData) return <div>loading</div>;
  if (!utilitiesDataManager || isLoadingUtilitiesDataManager) return <div>loading</div>;
  if (!utilitiesDataSkill || isLoadingUtilitiesDataSkill) return <div>loading</div>;
  if (!utilitiesDataQualification || isLoadingUtilitiesDataQualification) return <div>loading</div>;
  if (!utilitiesDataSL || isLoadingUtilitiesDataSL) return <div>loading</div>;
  return (
    <div>
      <h1>UserEditPage</h1>
      <UserManagerInput
        manager={userData.manager.map((value) => value.uid)}
        utilityManager={utilitiesDataManager}
        onClickUpdate={onClickUpdateManager}
      />
      <UserSkillInput
        skill={userData.skills.map((value) => {
          return { uid: value.uid, level: value.level };
        })}
        onClickUpdate={onClickUpdateSkills}
        utilitySkill={utilitiesDataSkill}
      />
      <UserQualificationInput
        qualification={userData.qualification.map((value) => {
          return { uid: value.uid, expiryDate: value.expiryDate };
        })}
        onClickUpdate={onClickUpdateQualification}
        utilityQualification={utilitiesDataQualification}
      />
      <UserPersonalInput
        userPersonalInfo={{
          personalInfo: {
            displayName: userData.personalInfo.displayName,
            photoURL: userData.personalInfo.photoURL,
            sl: userData.personalInfo.sl.map((value) => value.uid),
          },
        }}
        utilityDataSL={utilitiesDataSL}
        onClickRegistration={onClickUpdatePersonalInfo}
      />
    </div>
  );
};
