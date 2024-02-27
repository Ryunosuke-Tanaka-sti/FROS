import { useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { FilterFormSelect } from '@/components/modules/FilterFormSelect/FilterFormSelect';
import { SearchSkillsTable } from '@/components/modules/SearchSkillsTable/SearchSkillsTable';
import { useSearchSkills } from '@/hooks/useSearch';

export const SearchSkillsPage = () => {
  const [searchParams] = useSearchParams({ ids: '' });
  console.log(searchParams.get('ids'));

  const navigate = useNavigate();
  const ids = searchParams.get('ids') ?? undefined;
  const { searchSkillData, isLoadingSearchData, mutateSearchSkill } = useSearchSkills(ids);

  const utilities = useMemo(() => (ids ? ids.split(',') : []), [ids]);
  const onSubmitAction = (ids: string) => {
    navigate(`/search?ids=${ids}`);
    mutateSearchSkill(ids);
  };

  if (isLoadingSearchData) return <div>loading</div>;
  if (!searchSkillData) return <div>loading</div>;
  return (
    <div className="flex flex-col gap-2">
      <FilterFormSelect
        filterName="スキル検索"
        utility={searchSkillData.utilities.skills}
        selectUtility={utilities}
        onActionSearch={onSubmitAction}
      />
      <SearchSkillsTable utilities={searchSkillData.utilities} users={searchSkillData.users} />
    </div>
  );
};
