import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { FormListItem } from '@/components/common/FormListItem/FormListItem';
import { utilitiesDataType } from '@/types/utilitiesData.type';

type UtilityListProps = {
  utilityData: utilitiesDataType[];
  onUpdateSubmitParent: (uid: string, displayName: string) => void;
  onDeleteSubmitParent: (uid: string) => void;
};

export const UtilityList = (props: UtilityListProps) => {
  const { utilityData, onDeleteSubmitParent, onUpdateSubmitParent } = props;
  const { control, setValue, getValues } = useForm<{ data: utilitiesDataType[] }>({
    defaultValues: {
      data: [],
    },
    mode: 'onChange',
  });

  const { fields } = useFieldArray({ name: 'data', control });

  useEffect(() => {
    if (!utilityData) return;
    setValue('data', utilityData);
  }, [setValue, utilityData]);

  return (
    <>
      <ul>
        {fields.map((field, index) => (
          <li key={field.id}>
            <FormListItem
              onUpdateSubmit={() =>
                onUpdateSubmitParent(field.uid, getValues(`data.${index}.displayName`))
              }
              onDeleteSubmit={() => onDeleteSubmitParent(field.uid)}
              name={`data.${index}.displayName`}
              control={control}
              rules={{
                required: '情報を入力してください',
                validate: (value) =>
                  (utilityData.length !== 0 &&
                    utilityData.some((data) => data.displayName === value) &&
                    'すでに登録されています') ||
                  true,
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
