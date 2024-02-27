import { useMemo, useState } from 'react';
import Select from 'react-select';

import { Button } from '@/components/common/Button/Button';
import { utilitiesDataType } from '@/types/utilitiesData.type';

type FilterFormSelectProps = {
  filterName: string;
  selectUtility: string[];
  utility: utilitiesDataType[];
  onActionSearch: (ids: string) => void;
};

export const FilterFormSelect = (props: FilterFormSelectProps) => {
  const { filterName, selectUtility, utility, onActionSearch } = props;

  const [searchIDS, setSearchIDS] = useState<string>(selectUtility.join(','));

  const options = utility.map((value) => ({
    value: value.uid,
    label: value.displayName,
  }));

  const defaultValue: { value: string; label: string }[] = useMemo(
    () =>
      selectUtility
        .map((value) => {
          const target = options.find((data) => data.value === value);
          if (target) return target;
        })
        .filter((value) => value !== undefined) as { value: string; label: string }[],
    [selectUtility, options],
  );

  const handleChange = (
    options: readonly {
      value: string;
      label: string;
    }[],
  ) => {
    setSearchIDS(options.map((value) => value.value).join(','));
  };

  const onClickSearch = () => {
    onActionSearch(searchIDS);
  };

  return (
    <>
      <div className="flex w-96 flex-col gap-2 px-1 py-4">
        <h2 className="flex w-full flex-row justify-between bg-main-500 px-2 py-1 text-xl font-bold text-white">
          {filterName}
        </h2>
        <div className="flex flex-col gap-1">
          <Select
            instanceId={'search-select-box'}
            className="w-full"
            options={options}
            defaultValue={defaultValue}
            isMulti
            onChange={handleChange}
            noOptionsMessage={() => '検索に引っかかりませんでした'}
            placeholder="権限情報を選択してください"
            isSearchable={true}
          />
          <Button text="検索" color="primary" onClick={onClickSearch} />
        </div>
      </div>
    </>
  );
};
