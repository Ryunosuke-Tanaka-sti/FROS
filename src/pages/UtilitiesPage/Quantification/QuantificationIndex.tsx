import { useUtilitiesDataQualification } from '@/hooks/useUtilities';

export const QuantificationIndexPage = () => {
  const { utilitiesDataQualification, isLoadingUtilitiesDataQualification } =
    useUtilitiesDataQualification();
  if (!utilitiesDataQualification || isLoadingUtilitiesDataQualification)
    return <h1>Loading...</h1>;
  return <>{JSON.stringify(utilitiesDataQualification)}</>;
};
