import { useMemo } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import Select, { SingleValue } from 'react-select';

import { FormInputSkill } from '@/components/common/FormInputSkill/FormInputSkill';
import { RequestUpdateSkills } from '@/types/requestUser.type';
import { UserSkillDataType } from '@/types/userData.type';
import { utilitiesDataType } from '@/types/utilitiesData.type';

type UserSkillInputProps = {
  utilitySkill: utilitiesDataType[];
  skill: Omit<UserSkillDataType, 'displayName'>[];
  onClickUpdate: (data: RequestUpdateSkills) => void;
};

export const UserSkillInput = (props: UserSkillInputProps) => {
  const { skill, utilitySkill, onClickUpdate } = props;
  const { control, handleSubmit } = useForm<RequestUpdateSkills>({
    defaultValues: {
      skills: skill,
    },
  });
  const { fields, append, remove } = useFieldArray({ name: 'skills', control });

  const removeListSelectedUtility: utilitiesDataType[] = utilitySkill.filter((data) => {
    const target = fields.find((field) => field.uid === data.uid);
    if (!target) return true;
  });
  const selectListUtility: UserSkillDataType[] = useMemo(
    () =>
      fields
        .map((field) => {
          const target = utilitySkill.find((data) => data.uid === field.uid);
          if (target) return { ...target, level: field.level };
        })
        .filter((item): item is UserSkillDataType => item !== undefined),
    [fields, utilitySkill],
  );

  const handleChange = (
    option: SingleValue<{
      value: string;
      label: string;
    }>,
  ) => {
    if (option) {
      append({ uid: option.value, level: 0 });
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
          placeholder="スキルを選択してください"
          isSearchable={true}
        />
        {selectListUtility.map((field, index) => (
          <div key={field.uid}>
            {field.displayName}
            <FormInputSkill name={`skills.${index}.level`} control={control} rules={{}} />
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
