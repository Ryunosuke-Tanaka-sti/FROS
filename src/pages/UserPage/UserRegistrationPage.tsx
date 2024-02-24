import { useNavigate } from 'react-router-dom';

import { createUserMe } from '@/api/User';
import { UserPersonalInput } from '@/components/modules/UserPersonalInput/UserPersonalInput';
import { useUser } from '@/hooks/useUser';
import { useUtilitiesDataSL } from '@/hooks/useUtilities';
import { UserPersonalInfoType } from '@/types/userData.type';

export const UserRegistrationPage = () => {
  const navigate = useNavigate();
  const { userDataRefresh } = useUser();
  const { utilitiesDataSL, isLoadingUtilitiesDataSL } = useUtilitiesDataSL();

  const onClickRegistration = async (data: UserPersonalInfoType) => {
    await createUserMe({
      personalInfo: data,
    });
    userDataRefresh();
    navigate('/');
  };

  if (!utilitiesDataSL || isLoadingUtilitiesDataSL) return <div>loading...</div>;

  return (
    <div>
      <h1>RegistrationPage</h1>
      <UserPersonalInput
        onClickRegistration={onClickRegistration}
        userPersonalInfo={{ displayName: '', photoURL: '', sl: [] }}
        utilityDataSL={utilitiesDataSL}
      />
    </div>
  );
};
