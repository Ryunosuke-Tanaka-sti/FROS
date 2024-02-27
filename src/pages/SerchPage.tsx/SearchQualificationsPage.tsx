import { useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { FilterFormSelect } from '@/components/modules/FilterFormSelect/FilterFormSelect';
import { SearchQualificationsList } from '@/components/modules/SearchQualificationsList/SearchQualificationsList';
import { useSearchQualification } from '@/hooks/useSearch';

export const SearchQualificationsPage = () => {
  // SearchMangersPage.tsxを参考に　useSearchQualificationsを使用したバージョンを作成してください
  const [searchParams] = useSearchParams({ ids: '' });

  const navigate = useNavigate();
  const ids = searchParams.get('ids') ?? undefined;
  const { searchQualificationData, isLoadingSearchData, mutateSearchQualification } =
    useSearchQualification(ids);
  const utilities = useMemo(() => (ids ? ids.split(',') : []), [ids]);
  const onSubmitAction = (ids: string) => {
    mutateSearchQualification(ids);
    navigate(`/search/qualifications?ids=${ids}`);
  };
  const onClickUser = (uid: string) => {
    navigate(`/users/${uid}`);
  };
  if (isLoadingSearchData) return <div>loading</div>;
  if (!searchQualificationData) return <div>loading</div>;
  return (
    <div className="flex flex-col gap-2">
      <FilterFormSelect
        filterName="資格検索"
        utility={searchQualificationData.utilities.qualifications}
        selectUtility={utilities}
        onActionSearch={onSubmitAction}
      />
      <SearchQualificationsList
        qualifications={searchQualificationData.qualifications}
        onClickUser={onClickUser}
      />
    </div>
  );
};
