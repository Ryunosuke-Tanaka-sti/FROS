import { useUtilitiesDataManager } from '@/hooks/useUtilities';

export const ManagerIndexPage = () => {
  const { utilitiesDataManager, isLoadingUtilitiesDataManager } = useUtilitiesDataManager();
  if (!utilitiesDataManager || isLoadingUtilitiesDataManager) return <h1>Loading...</h1>;

  return <>{JSON.stringify(utilitiesDataManager)}</>;
};
