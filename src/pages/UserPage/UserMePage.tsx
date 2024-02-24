import { useNavigate } from 'react-router-dom';

import { useUser } from '@/hooks/useUser';

export const UserMePage = () => {
  const { userData, isLoadingUserData } = useUser();
  const navigate = useNavigate();
  const onClickEdit = () => navigate('edit');
  if (!userData || isLoadingUserData) return <div>loading</div>;

  return (
    <>
      <div>
        <div>UserMePage</div>
        <div>{JSON.stringify(userData)}</div>
        <button onClick={onClickEdit}>編集する</button>
      </div>
    </>
  );
};
