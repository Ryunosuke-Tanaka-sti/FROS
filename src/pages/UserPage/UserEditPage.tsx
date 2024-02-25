import { useNavigate } from 'react-router-dom';

import { useUser } from '@/hooks/useUser';
import {
  useAllUtilitiesData,
  useUtilitiesDataManager,
  useUtilitiesDataQualification,
  useUtilitiesDataSL,
  useUtilitiesDataSkill,
} from '@/hooks/useUtilities';

export const UserEditPage = () => {
  const navigate = useNavigate();
  const {
    userData,
    isLoadingUserData,
    updateUserMeSkillsFunction,
    updateUserMeManagerFunction,
    updateUserMeQualificationFunction,
  } = useUser();
  const { utilitiesDataManager, isLoadingUtilitiesDataManager } = useUtilitiesDataManager();
  const { utilitiesDataSkill, isLoadingUtilitiesDataSkill } = useUtilitiesDataSkill();
  const { utilitiesDataQualification, isLoadingUtilitiesDataQualification } =
    useUtilitiesDataQualification();
  const { allUtilitiesData, isLoadingAllUtilitiesData } = useAllUtilitiesData();
  const { utilitiesDataSL, isLoadingUtilitiesDataSL } = useUtilitiesDataSL();
  // const onClickUpdate = async (data: RequestUpdateManager) => {
  //   await updateUserMeManagerFunction(data);
  //   navigate('/my-page');
  // };

  // const onClickUpdate = async (data: RequestUpdateSkills) => {
  //   await updateUserMeSkillsFunction(data);
  //   navigate('/my-page');
  // };

  // const onClickUpdate = async (data: RequestUpdateQualification) => {
  //   await updateUserMeQualificationFunction(data);
  //   navigate('/my-page');
  // };

  // const onClickUpdate = async (data: RequestUpdateQualification) => {
  //   await updateUserMeQualificationFunction(data);
  //   navigate('/my-page');
  // }

  if (!userData || isLoadingUserData) return <div>loading</div>;
  if (!allUtilitiesData || isLoadingAllUtilitiesData) return <div>loading</div>;
  if (!utilitiesDataManager || isLoadingUtilitiesDataManager) return <div>loading</div>;
  if (!utilitiesDataSkill || isLoadingUtilitiesDataSkill) return <div>loading</div>;
  if (!utilitiesDataQualification || isLoadingUtilitiesDataQualification) return <div>loading</div>;
  if (!utilitiesDataSL || isLoadingUtilitiesDataSL) return <div>loading</div>;
  return (
    <div>
      <h1>UserEditPage</h1>
      {/* <UserManagerInput
        manager={userData.manager.map((value) => value.uid)}
        utilityManager={utilitiesDataManager}
        onClickUpdate={onClickUpdate}
      /> */}
      {/* <UserSkillInput
        skill={userData.skills.map((value) => {
          return { uid: value.uid, level: value.level };
        })}
        onClickUpdate={onClickUpdate}
        utilitySkill={utilitiesDataSkill}
      /> */}
      {/* <UserQualificationInput
        qualification={userData.qualification.map((value) => {
          return { uid: value.uid, expiryDate: value.expiryDate };
        })}
        onClickUpdate={onClickUpdate}
        utilityQualification={utilitiesDataQualification}
      /> */}
      {/* <UserPersonalInput
        userPersonalInfo={userData.personalInfo}
        utilityDataSL={utilitiesDataSL}
        onClickRegistration={}
      /> */}
    </div>
  );
};
