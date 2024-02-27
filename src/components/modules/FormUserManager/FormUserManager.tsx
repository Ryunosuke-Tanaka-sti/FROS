import { useForm } from 'react-hook-form';

import { Button } from '@/components/common/Button/Button';
import { FormInputDropList } from '@/components/common/FormInputDropList/FormInputDropList';
import { RequestUpdateManager } from '@/types/requestUser.type';
import { utilitiesDataType } from '@/types/utilitiesData.type';

type FormUserManagerProps = {
  utilityManager: utilitiesDataType[];
  manager: string[];
  onClickUpdate: (data: RequestUpdateManager) => void;
};

export const FormUserManager = (props: FormUserManagerProps) => {
  const { manager, utilityManager, onClickUpdate } = props;

  const { control, handleSubmit } = useForm<RequestUpdateManager>({
    defaultValues: {
      manager: manager,
    },
  });

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-2xl border-inherit   bg-white  shadow">
        <h2 className="flex w-full flex-row justify-between bg-main-500 px-2 py-1 text-xl font-bold text-white">
          権限情報入力
        </h2>
        <form className="flex min-h-60 flex-col gap-3 p-4" onSubmit={handleSubmit(onClickUpdate)}>
          <FormInputDropList name="manager" control={control} utilityData={utilityManager} />
          <Button text="更新" color="primary" type="submit" />
        </form>
      </div>
    </>
  );
};
