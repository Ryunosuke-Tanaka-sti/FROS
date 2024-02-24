import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

type FormTextInputProps<T extends FieldValues> = UseControllerProps<T>;

export const FormTextInput = <T extends FieldValues>(props: FormTextInputProps<T>) => {
  const { name, control, rules, defaultValue } = props;
  const { field, fieldState } = useController<T>({ name, control, rules });
  const { error } = fieldState;
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type="text" {...field} id={name} defaultValue={defaultValue} />
      {error && (
        <p>
          {error.message} : {JSON.stringify(error)}
        </p>
      )}
    </div>
  );
};
