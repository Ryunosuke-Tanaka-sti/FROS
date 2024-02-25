import { UtilitiesInput } from '@/components/modules/UtilitiesInput/UtilitiesInput';
import { UtilityList } from '@/components/modules/UtilityList/UtilityList';
import { useUtilitiesDataSL } from '@/hooks/useUtilities';

export const SLIndexPage = () => {
  const { utilitiesDataSL, isLoadingUtilitiesDataSL, createDataSL, deleteDataSL, updateDataSL } =
    useUtilitiesDataSL();

  const onCreateSubmit = async (data: { displayName: string }) => {
    await createDataSL(data.displayName);
  };

  const onUpdateSubmit = async (uid: string, displayName: string) => {
    await updateDataSL({ uid, displayName });
  };

  const onDeleteSubmit = async (uid: string) => {
    await deleteDataSL(uid);
  };

  if (!utilitiesDataSL || isLoadingUtilitiesDataSL) return <h1>Loading...</h1>;

  return (
    <div>
      <UtilitiesInput utilityData={utilitiesDataSL} onSubmitParent={onCreateSubmit} />
      <UtilityList
        utilityData={utilitiesDataSL}
        onDeleteSubmitParent={onDeleteSubmit}
        onUpdateSubmitParent={onUpdateSubmit}
      />

      {JSON.stringify(utilitiesDataSL)}
    </div>
  );
};
