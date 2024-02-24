import { useNavigate } from 'react-router-dom';

import { useAllUtilitiesData } from '@/hooks/useUtilities';

export const TopPage = () => {
  const navigate = useNavigate();
  const onClickMyPage = () => navigate('my-page');

  const { allUtilitiesData, isLoadingAllUtilitiesData } = useAllUtilitiesData();
  if (!allUtilitiesData || isLoadingAllUtilitiesData) return <div>loading</div>;

  return (
    <div className="bg-white">
      <div>TopPage</div>
      <div>
        <button onClick={onClickMyPage}>my page</button>
      </div>
      {JSON.stringify(allUtilitiesData)}
    </div>
  );
};
