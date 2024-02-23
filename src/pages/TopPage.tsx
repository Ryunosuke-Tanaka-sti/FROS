import { useAuthAction } from '@/hooks/useAuth';

export const TopPage = () => {
  const { signInAction, singOutAction } = useAuthAction();
  // const { data, error, isLoading } = useSWR('users/me', () => axiosClient.get('/api/users/me'));
  // if (isLoading) return <div>loading</div>;
  // axiosClient.get('/api/users/me');

  return (
    <div className="bg-white">
      TopPage <button onClick={signInAction}>login</button>{' '}
      <button onClick={singOutAction}>logout</button>
    </div>
  );
};
