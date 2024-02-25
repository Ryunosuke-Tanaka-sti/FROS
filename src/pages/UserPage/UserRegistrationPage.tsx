import { useNavigate } from 'react-router-dom';

import { UserPersonalInput } from '@/components/modules/UserPersonalInput/UserPersonalInput';
import { useUser } from '@/hooks/useUser';
import { useUtilitiesDataSL } from '@/hooks/useUtilities';
import { RequestUpdatePersonalInfo } from '@/types/requestUser.type';

export const UserRegistrationPage = () => {
  const navigate = useNavigate();
  const { createUserMeFunction } = useUser();
  const { utilitiesDataSL, isLoadingUtilitiesDataSL } = useUtilitiesDataSL();

  const onClickRegistration = async (data: RequestUpdatePersonalInfo) => {
    await createUserMeFunction(data);
    navigate('/');
  };

  if (!utilitiesDataSL || isLoadingUtilitiesDataSL) return <div>loading...</div>;

  return (
    <div>
      <h1>RegistrationPage</h1>
      <UserPersonalInput
        onClickRegistration={onClickRegistration}
        userPersonalInfo={{ personalInfo: { displayName: '', photoURL: '', sl: [] } }}
        utilityDataSL={utilitiesDataSL}
      />
    </div>
  );
};
