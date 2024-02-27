import { useNavigate } from 'react-router-dom';

import { Title } from '@/components/common/Title/Title';
import { FormPersonalInfo } from '@/components/modules/FormPersonalInfo/FormPersonalInfo';
import { useUserMe } from '@/hooks/useUser';
import { useUtilitiesDataSL } from '@/hooks/useUtilities';
import { RequestUpdatePersonalInfo } from '@/types/requestUser.type';

export const UserRegistrationPage = () => {
  const navigate = useNavigate();
  const { createUserMeFunction } = useUserMe();
  const { utilitiesDataSL, isLoadingUtilitiesDataSL } = useUtilitiesDataSL();

  const onClickRegistration = async (data: RequestUpdatePersonalInfo) => {
    await createUserMeFunction(data);
    navigate('/');
  };

  if (!utilitiesDataSL || isLoadingUtilitiesDataSL) return <div>loading...</div>;

  return (
    <div className="flex h-full grow flex-col items-center justify-center gap-10">
      <Title text="初回登録お願いします" size="xl" />
      <FormPersonalInfo
        onClickRegistration={onClickRegistration}
        userPersonalInfo={{ personalInfo: { displayName: '', photoURL: '', sl: [] } }}
        utilityDataSL={utilitiesDataSL}
      />
    </div>
  );
};
