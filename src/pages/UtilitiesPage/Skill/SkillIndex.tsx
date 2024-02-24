import { useUtilitiesDataSkill } from '@/hooks/useUtilities';

export const SkillIndexPage = () => {
  const { utilitiesDataSkill, isLoadingUtilitiesDataSkill } = useUtilitiesDataSkill();

  if (!utilitiesDataSkill || isLoadingUtilitiesDataSkill) return <h1>Loading...</h1>;

  return <>{JSON.stringify(utilitiesDataSkill)}</>;
};
