import { useForm } from 'react-hook-form';

import { Button } from '@/components/common/Button/Button';
import { FormInputDropList } from '@/components/common/FormInputDropList/FormInputDropList';
import { RequestUpdateManager } from '@/types/requestUser.type';
import { utilitiesDataType } from '@/types/utilitiesData.type';

type UserManagerInputProps = {
  utilityManager: utilitiesDataType[];
  manager: string[];
  onClickUpdate: (data: RequestUpdateManager) => void;
};

export const UserManagerInput = (props: UserManagerInputProps) => {
  const { manager, utilityManager, onClickUpdate } = props;
  const { control, handleSubmit } = useForm<RequestUpdateManager>({
    defaultValues: {
      manager: manager,
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit(onClickUpdate)}>
        <FormInputDropList name="manager" control={control} utilityData={utilityManager} />
        <Button text="更新" color="primary" type="submit" />
      </form>
    </>
  );
};
