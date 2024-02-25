import { useMemo } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import Select, { SingleValue } from 'react-select';

import { FormInputQualification } from '@/components/common/FormInputQualification/FormInputQualification';
import { RequestUpdateQualification } from '@/types/requestUser.type';
import { UserQualificationDataType } from '@/types/userData.type';
import { utilitiesDataType } from '@/types/utilitiesData.type';

type UserQualificationInputProps = {
  utilityQualification: utilitiesDataType[];
  qualification: Omit<UserQualificationDataType, 'displayName'>[];
  onClickUpdate: (data: RequestUpdateQualification) => void;
};

export const UserQualificationInput = (props: UserQualificationInputProps) => {
  const { onClickUpdate, qualification, utilityQualification } = props;
  const { control, handleSubmit } = useForm<RequestUpdateQualification>({
    defaultValues: {
      qualification: qualification,
    },
  });
  const { fields, append, remove } = useFieldArray({ name: 'qualification', control });
  const removeListSelectedUtility: utilitiesDataType[] = utilityQualification.filter((data) => {
    const target = fields.find((field) => field.uid === data.uid);
    if (!target) return true;
  });
  const selectListUtility: UserQualificationDataType[] = useMemo(
    () =>
      fields
        .map((field) => {
          const target = utilityQualification.find((data) => data.uid === field.uid);
          if (target) {
            if (field.expiryDate === undefined) return { ...target };
            return { ...target, expiryDate: field.expiryDate };
          }
        })
        .filter((item): item is UserQualificationDataType => item !== undefined),
    [fields, utilityQualification],
  );
  const handleChange = (
    option: SingleValue<{
      value: string;
      label: string;
    }>,
  ) => {
    if (option) {
      append({ uid: option.value });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onClickUpdate)}>
        <Select
          instanceId={'search-select-box'}
          value={null}
          options={removeListSelectedUtility.map((value) => ({
            value: value.uid,
            label: value.displayName,
          }))}
          onChange={handleChange}
          noOptionsMessage={() => '検索に引っかかりませんでした'}
          placeholder="取得した資格を追加してください"
          isSearchable={true}
        />
        {selectListUtility.map((field, index) => (
          <div key={field.uid}>
            {field.displayName}
            <FormInputQualification
              name={`qualification.${index}.expiryDate`}
              control={control}
              rules={{}}
            />
            <button type="button" onClick={() => remove(index)}>
              削除
            </button>
          </div>
        ))}
        <button type="submit">更新</button>
      </form>
    </>
  );
};
