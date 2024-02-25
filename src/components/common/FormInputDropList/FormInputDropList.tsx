import { FieldValues, UseControllerProps, useController } from 'react-hook-form';
import Select, { SingleValue } from 'react-select';

import { utilitiesDataType } from '@/types/utilitiesData.type';

type FormInputDropListProps<T extends FieldValues> = UseControllerProps<T> & {
  utilityData: utilitiesDataType[];
};

export const FormInputDropList = <T extends FieldValues>(props: FormInputDropListProps<T>) => {
  const { utilityData, name, control, rules } = props;
  const { field } = useController<T>({ name, control, rules });

  const removeListSelectedUtility: utilitiesDataType[] = utilityData.filter(
    (data) => field.value.indexOf(data.uid) === -1,
  );
  const listSelectedUtility: utilitiesDataType[] = field.value.map((value: string) => {
    const target = utilityData.find((data) => data.uid === value);
    if (target) return target;
  });

  const removeSelectedUtility = (uid: string) => {
    field.onChange(field.value.filter((v: string) => v !== uid));
  };
  console.log(listSelectedUtility, removeListSelectedUtility);

  const handleChange = (
    option: SingleValue<{
      value: string;
      label: string;
    }>,
  ) => {
    if (option) {
      field.onChange([...field.value, option.value]);
    }
  };

  return (
    <div>
      <div>
        <Select
          instanceId={'search-select-box'}
          value={null}
          options={removeListSelectedUtility.map((value) => ({
            value: value.uid,
            label: value.displayName,
          }))}
          onChange={handleChange}
          noOptionsMessage={() => '検索に引っかかりませんでした'}
          placeholder="権限情報を選択してください"
          isSearchable={true}
        />
      </div>
      <div>
        <ul>
          {listSelectedUtility.map((value) => (
            <li key={value.uid}>
              {value.displayName}
              <button onClick={() => removeSelectedUtility(value.uid)}>削除</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
