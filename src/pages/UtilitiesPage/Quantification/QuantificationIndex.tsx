import { UtilitiesInput } from '@/components/modules/UtilitiesInput/UtilitiesInput';
import { UtilityList } from '@/components/modules/UtilityList/UtilityList';
import { useUtilitiesDataQualification } from '@/hooks/useUtilities';

export const QuantificationIndexPage = () => {
  const {
    utilitiesDataQualification,
    isLoadingUtilitiesDataQualification,
    createDataQualification,
    deleteDataQualification,
    updateDataQualification,
  } = useUtilitiesDataQualification();

  const onCreateSubmit = async (data: { displayName: string }) => {
    await createDataQualification(data.displayName);
  };
  const onUpdateSubmit = async (uid: string, displayName: string) => {
    await updateDataQualification({ uid, displayName });
  };
  const onDeleteSubmit = async (uid: string) => {
    await deleteDataQualification(uid);
  };
  if (!utilitiesDataQualification || isLoadingUtilitiesDataQualification)
    return <h1>Loading...</h1>;
  return (
    <div>
      <UtilitiesInput utilityData={utilitiesDataQualification} onSubmitParent={onCreateSubmit} />
      <UtilityList
        utilityData={utilitiesDataQualification}
        onDeleteSubmitParent={onDeleteSubmit}
        onUpdateSubmitParent={onUpdateSubmit}
      />

      {JSON.stringify(utilitiesDataQualification)}
    </div>
  );
};
