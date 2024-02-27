import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { TextConvertor } from '@/constant/TextConvertor';

type FormTextInputProps<T extends FieldValues> = UseControllerProps<T>;

export const FormTextInput = <T extends FieldValues>(props: FormTextInputProps<T>) => {
  const { name, control, rules, defaultValue } = props;
  const { field, fieldState } = useController<T>({ name, control, rules });
  const { error } = fieldState;
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-2">
        <label className="w-36" htmlFor={name}>
          {TextConvertor[`${name}`] ? TextConvertor[`${name}`] : name}
        </label>
        <input
          className="grow rounded border p-2"
          type="text"
          {...field}
          id={name}
          defaultValue={defaultValue}
        />
      </div>
      <div className="h-4 w-full">
        <span className="text-xs text-red-500">{error && <p>{error.message}</p>}</span>
      </div>
    </div>
  );
};
