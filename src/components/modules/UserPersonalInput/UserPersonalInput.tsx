import { useForm } from 'react-hook-form';

import { Button } from '@/components/common/Button/Button';
import { FormInputSelect } from '@/components/common/FormInputSelect/FormInputSelect';
import { FormTextInput } from '@/components/common/FormTextInput/FormTextInput';
import { UserPersonalInfoType } from '@/types/userData.type';
import { utilitiesDataType } from '@/types/utilitiesData.type';

type UserPersonalInputProps = {
  userPersonalInfo: UserPersonalInfoType;
  onClickRegistration: (data: UserPersonalInfoType) => void;
  utilityDataSL: utilitiesDataType[];
};

export const UserPersonalInput = (props: UserPersonalInputProps) => {
  const { userPersonalInfo, onClickRegistration, utilityDataSL } = props;
  const { handleSubmit, control } = useForm<UserPersonalInfoType>({
    defaultValues: userPersonalInfo,
  });
  return (
    <>
      <form onSubmit={handleSubmit(onClickRegistration)}>
        <FormTextInput
          name="displayName"
          control={control}
          rules={{ required: '情報を入力してください' }}
        />
        <FormTextInput name="photoURL" control={control} />
        <FormInputSelect name={'sl'} control={control} utilityData={utilityDataSL} />
        <Button text="Submit" type="submit" />
      </form>
    </>
  );
};
