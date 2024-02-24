import { useForm } from 'react-hook-form';

import { useUtilitiesDataSL } from '@/hooks/useUtilities';

export const SLIndexPage = () => {
  const { utilitiesDataSL, isLoadingUtilitiesDataSL, createDataSL, deleteDataSL, mutateSL } =
    useUtilitiesDataSL();
  type Inputs = {
    displayName: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    await createDataSL(data.displayName);
    reset();
    mutateSL();
  };

  const onDelete = async (uid: string) => {
    await deleteDataSL(uid);
    mutateSL();
  };

  if (!utilitiesDataSL || isLoadingUtilitiesDataSL) return <h1>Loading...</h1>;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('displayName', {
            required: '必須項目です',
            validate: (value) =>
              !utilitiesDataSL.find((data) => data.displayName == value) || '既に登録されています',
          })}
        />
        {errors.displayName && <p>{errors.displayName.message}</p>}
        <button type="submit">Submit</button>
      </form>
      <ul>
        {utilitiesDataSL.map((data) => (
          <li key={data.uid} onClick={() => onDelete(data.uid)}>
            {data.displayName}
          </li>
        ))}
      </ul>
      {JSON.stringify(utilitiesDataSL)}
    </div>
  );
};
