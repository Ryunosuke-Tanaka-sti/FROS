import { UtilitiesInput } from '@/components/modules/UtilitiesInput/UtilitiesInput';
import { UtilityList } from '@/components/modules/UtilityList/UtilityList';
import { useUtilitiesDataSkill } from '@/hooks/useUtilities';

export const SkillIndexPage = () => {
  const {
    utilitiesDataSkill,
    isLoadingUtilitiesDataSkill,
    createDataSkill,
    deleteDataSkill,
    mutateSkill,
    updateDataSkill,
  } = useUtilitiesDataSkill();
  const onCreateSubmit = async (data: { displayName: string }) => {
    await createDataSkill(data.displayName);
    mutateSkill();
  };
  const onUpdateSubmit = async (uid: string, displayName: string) => {
    await updateDataSkill({ uid, displayName });
    mutateSkill();
  };
  const onDeleteSubmit = async (uid: string) => {
    await deleteDataSkill(uid);
    mutateSkill();
  };

  if (!utilitiesDataSkill || isLoadingUtilitiesDataSkill) return <h1>Loading...</h1>;

  return (
    <div>
      <UtilitiesInput utilityData={utilitiesDataSkill} onSubmitParent={onCreateSubmit} />
      <UtilityList
        utilityData={utilitiesDataSkill}
        onDeleteSubmitParent={onDeleteSubmit}
        onUpdateSubmitParent={onUpdateSubmit}
      />
      {JSON.stringify(utilitiesDataSkill)}
    </div>
  );
};
