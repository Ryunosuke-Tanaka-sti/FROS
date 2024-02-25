import { useNavigate } from 'react-router-dom';

import { UserManagerInput } from '@/components/modules/UserManagerInput/UserManagerInput';
import { useUser } from '@/hooks/useUser';
import { useAllUtilitiesData, useUtilitiesDataManager } from '@/hooks/useUtilities';
import { RequestUpdateManager } from '@/types/requestUser.type';

export const UserEditPage = () => {
  const navigate = useNavigate();
  const { userData, isLoadingUserData, updateUserMeManagerFunction } = useUser();
  const { utilitiesDataManager, isLoadingUtilitiesDataManager } = useUtilitiesDataManager();
  const { allUtilitiesData, isLoadingAllUtilitiesData } = useAllUtilitiesData();

  const onClickUpdate = async (data: RequestUpdateManager) => {
    await updateUserMeManagerFunction(data);
    navigate('/my-page');
  };

  if (!userData || isLoadingUserData) return <div>loading</div>;
  if (!allUtilitiesData || isLoadingAllUtilitiesData) return <div>loading</div>;
  if (!utilitiesDataManager || isLoadingUtilitiesDataManager) return <div>loading</div>;

  return (
    <div>
      <h1>UserEditPage</h1>
      <UserManagerInput
        manager={userData.manager.map((value) => value.uid)}
        utilityManager={utilitiesDataManager}
        onClickUpdate={onClickUpdate}
      />
    </div>
  );
};
