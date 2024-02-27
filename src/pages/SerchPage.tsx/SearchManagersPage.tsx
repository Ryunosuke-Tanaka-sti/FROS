import { useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { FilterFormSelect } from '@/components/modules/FilterFormSelect/FilterFormSelect';
import { SearchManagersList } from '@/components/modules/SearchManagersList/SearchManagersList';
import { useSearchManager } from '@/hooks/useSearch';

export const SearchManagersPage = () => {
  const [searchParams] = useSearchParams({ ids: '' });

  const navigate = useNavigate();
  const ids = searchParams.get('ids') ?? undefined;
  const { searchManagerData, isLoadingSearchData, mutateSearchManager } = useSearchManager(ids);

  const utilities = useMemo(() => (ids ? ids.split(',') : []), [ids]);
  const onSubmitAction = (ids: string) => {
    mutateSearchManager(ids);
    navigate(`/search/managers?ids=${ids}`);
  };

  if (isLoadingSearchData) return <div>loading</div>;
  if (!searchManagerData) return <div>loading</div>;

  return (
    <div className="flex flex-col gap-2">
      <FilterFormSelect
        filterName="マネージャー検索"
        utility={searchManagerData.utilities.managers}
        selectUtility={utilities}
        onActionSearch={onSubmitAction}
      />
      <SearchManagersList managers={searchManagerData.managers} />
    </div>
  );
};
