import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

type FormInputQualificationProps<T extends FieldValues> = UseControllerProps<T>;

export const FormInputQualification = <T extends FieldValues>(
  props: FormInputQualificationProps<T>,
) => {
  const { name, control, rules } = props;
  const { field } = useController<T>({ name, control, rules });
  const onChange = (date: Date | null) => {
    // react-datepickerがObject型で返すため、ISOStringに変換する
    const newDate = date ? date.toISOString() : '';
    console.log(new Date(newDate));
    field.onChange(newDate);
  };

  return (
    <>
      {field.value}

      <DatePicker
        className=""
        dateFormat={'yyyy-MM-dd'}
        selected={field.value}
        isClearable
        onChange={onChange}
      />
    </>
  );
};
