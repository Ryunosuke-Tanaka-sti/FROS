import { useMemo } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import Select, { SingleValue } from 'react-select';

import { Button } from '@/components/common/Button/Button';
import { FormInputQualification } from '@/components/common/FormInputQualification/FormInputQualification';
import { RequestUpdateQualification } from '@/types/requestUser.type';
import { UserQualificationDataType } from '@/types/userData.type';
import { utilitiesDataType } from '@/types/utilitiesData.type';

type FormQualificationProps = {
  utilityQualification: utilitiesDataType[];
  qualification: Omit<UserQualificationDataType, 'displayName'>[];
  onClickUpdate: (data: RequestUpdateQualification) => void;
};

export const FormQualification = (props: FormQualificationProps) => {
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
      <div className="flex flex-col overflow-hidden rounded-2xl border-inherit   bg-white  shadow">
        <h2 className="w-full bg-main-500 px-2 py-1 text-xl font-bold text-white">資格入力</h2>
        <form className="flex min-h-60 flex-col gap-3 p-4" onSubmit={handleSubmit(onClickUpdate)}>
          <div className="flex grow flex-col gap-2">
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
            <ul className="flex flex-col gap-3">
              {selectListUtility.map((field, index) => (
                <li className="flex flex-row items-center justify-between py-2" key={field.uid}>
                  {field.displayName}
                  <FormInputQualification
                    name={`qualification.${index}.expiryDate`}
                    control={control}
                    rules={{}}
                    removeAction={() => remove(index)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button text="更新" type="submit" />
        </form>
      </div>
    </>
  );
};
