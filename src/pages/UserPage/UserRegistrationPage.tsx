import { useNavigate } from 'react-router-dom';

import { createUserMe } from '@/api/User';
import { useUser } from '@/hooks/useUser';

export const UserRegistrationPage = () => {
  const navigate = useNavigate();
  const { userDataRefresh } = useUser();

  const onClickRegistration = async () => {
    await createUserMe({
      personalInfo: { displayName: 'updated', photoURL: 'updated', sl: ['CUcwzGAt1EDlcilgz8Zl'] },
    });
    userDataRefresh();
    navigate('/');
  };

  return (
    <div>
      <h1>RegistrationPage</h1>
      <button onClick={onClickRegistration}>登録する</button>
    </div>
  );
};
