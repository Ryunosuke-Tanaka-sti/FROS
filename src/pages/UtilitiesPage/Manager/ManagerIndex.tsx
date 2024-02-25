import { UtilitiesInput } from '@/components/modules/UtilitiesInput/UtilitiesInput';
import { UtilityList } from '@/components/modules/UtilityList/UtilityList';
import { useUtilitiesDataManager } from '@/hooks/useUtilities';

export const ManagerIndexPage = () => {
  const {
    utilitiesDataManager,
    isLoadingUtilitiesDataManager,
    createDataManager,
    deleteDataManager,
    updateDataManager,
  } = useUtilitiesDataManager();

  const onCreateSubmit = async (data: { displayName: string }) => {
    await createDataManager(data.displayName);
  };
  const onUpdateSubmit = async (uid: string, displayName: string) => {
    await updateDataManager({ uid, displayName });
  };
  const onDeleteSubmit = async (uid: string) => {
    await deleteDataManager(uid);
  };

  if (!utilitiesDataManager || isLoadingUtilitiesDataManager) return <h1>Loading...</h1>;

  return (
    <div>
      <UtilitiesInput utilityData={utilitiesDataManager} onSubmitParent={onCreateSubmit} />
      <UtilityList
        utilityData={utilitiesDataManager}
        onDeleteSubmitParent={onDeleteSubmit}
        onUpdateSubmitParent={onUpdateSubmit}
      />
      {JSON.stringify(utilitiesDataManager)}
    </div>
  );
};
