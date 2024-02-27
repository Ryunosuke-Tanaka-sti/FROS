import { useState } from 'react';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { Button } from '@/components/common/Button/Button';
import { TextConvertor } from '@/constant/TextConvertor';

type FormListItemProps<T extends FieldValues> = UseControllerProps<T> & {
  onUpdateSubmit: () => void;
  onDeleteSubmit: () => void;
};

export const FormListItem = <T extends FieldValues>(props: FormListItemProps<T>) => {
  const { name, control, rules, defaultValue, onUpdateSubmit, onDeleteSubmit } = props;
  const { field, fieldState } = useController<T>({ name, control, rules });
  const { error } = fieldState;

  const [openEdit, setOpenEdit] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setOpenEdit((value) => !value)}>
        {openEdit ? '辞めとく' : '編集'}
      </button>
      {openEdit ? (
        <>
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
          <Button text="更新" onClick={onUpdateSubmit} />
          <Button text="削除" onClick={onDeleteSubmit} />
        </>
      ) : (
        <>{field.value}</>
      )}
    </div>
  );
};
