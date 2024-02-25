import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { Tips } from '@/components/common/Tips/Tips';
import { utilitiesDataType } from '@/types/utilitiesData.type';

type FormInputSelectProps<T extends FieldValues> = UseControllerProps<T> & {
  utilityData: utilitiesDataType[];
};

export const FormInputSelect = <T extends FieldValues>(props: FormInputSelectProps<T>) => {
  const { utilityData, name, control, rules } = props;
  const { field } = useController<T>({ name, control, rules });
  console.log(field.value);

  const removeListSelectedUtility: utilitiesDataType[] = utilityData.filter((data) => {
    const target = field.value.find((value: string) => value === data.uid);
    if (!target) return true;
  });
  const listSelectedUtility: utilitiesDataType[] = field.value.map((value: string) => {
    return utilityData.find((data) => data.uid === value);
  });
  const appendSelectedUtility = (uid: string) => {
    field.onChange([...field.value, uid]);
  };
  const removeSelectedUtility = (uid: string) => {
    field.onChange(field.value.filter((v: string) => v !== uid));
  };

  // console.log('field.value', field.value);
  // console.log('removeListSelectedUtility', removeListSelectedUtility);
  // console.log('listSelectedUtility', listSelectedUtility);

  return (
    <div>
      <div>
        {listSelectedUtility.map((value) => (
          <Tips
            key={value.uid}
            text={value.displayName}
            onClick={() => removeSelectedUtility(value.uid)}
          />
        ))}
      </div>
      <div>lll</div>
      <div>
        {removeListSelectedUtility.map((value) => (
          <Tips
            key={value.uid}
            text={value.displayName}
            onClick={() => appendSelectedUtility(value.uid)}
          />
        ))}
      </div>
    </div>
  );
};
