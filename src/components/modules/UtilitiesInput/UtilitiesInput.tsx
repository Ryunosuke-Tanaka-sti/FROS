import { useForm } from 'react-hook-form';

import { Button } from '@/components/common/Button/Button';
import { FormTextInput } from '@/components/common/FormTextInput/FormTextInput';
import { utilitiesDataType } from '@/types/utilitiesData.type';

type UtilitiesInputProps = {
  utilityData: utilitiesDataType[];
  onSubmitParent: (data: { displayName: string }) => void;
};

type Inputs = {
  displayName: string;
};

export const UtilitiesInput = (props: UtilitiesInputProps) => {
  const { utilityData, onSubmitParent } = props;

  const { handleSubmit, reset, control } = useForm<Inputs>({
    defaultValues: {
      displayName: '',
    },
  });

  const onSubmit = async (data: Inputs) => {
    onSubmitParent(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTextInput
          name="displayName"
          control={control}
          rules={{
            required: '情報を入力してください',
            validate: (value) =>
              (utilityData.length != 0 &&
                utilityData.some((data) => data.displayName == value) &&
                'すでに登録されています') ||
              true,
          }}
        />
        <Button text="Submit" onClick={handleSubmit(onSubmit)} type="submit" />
      </form>
    </>
  );
};
