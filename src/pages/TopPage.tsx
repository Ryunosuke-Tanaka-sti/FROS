import { useAuthAction } from '@/hooks/useAuth';
import { axiosClient } from '@/utilities/AxiosConfig';

export const TopPage = () => {
  const { signInAction, singOutAction } = useAuthAction();
  axiosClient.post('/api');

  return (
    <div className="bg-white">
      TopPage <button onClick={signInAction}>login</button>{' '}
      <button onClick={singOutAction}>logout</button>
    </div>
  );
};
