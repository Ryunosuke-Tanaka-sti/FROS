import { useState } from 'react';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { Button } from '@/components/common/Button/Button';
import { FormTextInput } from '@/components/common/FormTextInput/FormTextInput';

type FormListItemProps<T extends FieldValues> = UseControllerProps<T> & {
  onUpdateSubmit: () => void;
  onDeleteSubmit: () => void;
};

export const FormListItem = <T extends FieldValues>(props: FormListItemProps<T>) => {
  const { name, control, rules, onUpdateSubmit, onDeleteSubmit } = props;
  const { field } = useController<T>({ name, control, rules });

  const [openEdit, setOpenEdit] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setOpenEdit((value) => !value)}>
        {openEdit ? '辞めとく' : '編集'}
      </button>
      {openEdit ? (
        <>
          <FormTextInput {...props} />
          <Button text="更新" onClick={onUpdateSubmit} />
          <Button text="削除" onClick={onDeleteSubmit} />
        </>
      ) : (
        <>{field.value}</>
      )}
    </div>
  );
};
