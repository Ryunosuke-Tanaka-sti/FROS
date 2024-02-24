import { useUtilitiesDataSL } from '@/hooks/useUtilities';

export const SLIndexPage = () => {
  const { utilitiesDataSL, isLoadingUtilitiesDataSL } = useUtilitiesDataSL();

  if (!utilitiesDataSL || isLoadingUtilitiesDataSL) return <h1>Loading...</h1>;
  return <>{JSON.stringify(utilitiesDataSL)}</>;
};
