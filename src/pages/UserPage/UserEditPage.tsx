import { useNavigate } from 'react-router-dom';

import { updateUserMe } from '@/api/User';
import { useUser } from '@/hooks/useUser';
import { useAllUtilitiesData } from '@/hooks/useUtilities';

export const UserEditPage = () => {
  const navigate = useNavigate();
  const { userData, isLoadingUserData, userDataRefresh } = useUser();
  const { allUtilitiesData, isLoadingAllUtilitiesData } = useAllUtilitiesData();

  const onClickUpdate = async () => {
    await updateUserMe({
      personalInfo: { displayName: 'updated', photoURL: 'updated', sl: ['kAdr7RccVaz8iNtNCmhS'] },
      skills: [],
      qualification: [],
      manager: [],
    });
    userDataRefresh();
    navigate('/my-page');
  };

  if (!userData || isLoadingUserData) return <div>loading</div>;
  if (!allUtilitiesData || isLoadingAllUtilitiesData) return <div>loading</div>;

  return (
    <div>
      <h1>UserEditPage</h1>
      <button onClick={onClickUpdate}>更新</button>
      <div>{JSON.stringify(userData)}</div>
      <div>{JSON.stringify(allUtilitiesData)}</div>
    </div>
  );
};
