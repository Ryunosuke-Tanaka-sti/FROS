import { useForm } from 'react-hook-form';

import { Button } from '@/components/common/Button/Button';
import { FormInputSelect } from '@/components/common/FormInputSelect/FormInputSelect';
import { FormTextInput } from '@/components/common/FormTextInput/FormTextInput';
import { RequestUpdatePersonalInfo } from '@/types/requestUser.type';
import { utilitiesDataType } from '@/types/utilitiesData.type';

type FormPersonalInfoProps = {
  userPersonalInfo: RequestUpdatePersonalInfo;
  utilityDataSL: utilitiesDataType[];
  onClickRegistration: (data: RequestUpdatePersonalInfo) => void;
};

export const FormPersonalInfo = (props: FormPersonalInfoProps) => {
  const { userPersonalInfo, onClickRegistration, utilityDataSL } = props;
  const { handleSubmit, control } = useForm<RequestUpdatePersonalInfo>({
    defaultValues: userPersonalInfo,
  });
  return (
    <>
      <div className=" flex w-96 flex-col overflow-hidden rounded-2xl border-inherit bg-white shadow">
        <h2 className="w-full bg-main-500 px-2 py-1 text-xl font-bold text-white">
          ユーザー情報入力
        </h2>
        <form className="flex flex-col gap-3 p-4" onSubmit={handleSubmit(onClickRegistration)}>
          <FormTextInput
            name="personalInfo.displayName"
            control={control}
            rules={{ required: '情報を入力してください' }}
          />
          <FormTextInput name="personalInfo.photoURL" control={control} />
          <FormInputSelect name={'personalInfo.sl'} control={control} utilityData={utilityDataSL} />
          <Button text="Submit" type="submit" />
        </form>
      </div>
    </>
  );
};
