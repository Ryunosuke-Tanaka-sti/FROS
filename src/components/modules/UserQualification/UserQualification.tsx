import { UserQualificationDataType } from '@/types/userData.type';

type UserQualificationProps = {
  qualification: UserQualificationDataType[];
};

export const UserQualification = (props: UserQualificationProps) => {
  const { qualification } = props;
  console.log(qualification);

  const convertQualification: UserQualificationDataType[] = qualification.map((value) => {
    if (value.expiryDate) {
      const date = new Date(value.expiryDate);
      return {
        ...value,
        expiryDate: date,
      };
    }
    return {
      ...value,
    };
  });
  const convertDate = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-2xl border-inherit   bg-white  shadow">
        <h2 className="w-full bg-main-500 px-2 py-1 text-xl font-bold text-white">スキル情報</h2>
        <div className="flex flex-col gap-3 p-4">
          {convertQualification.length === 0 && <span>スキル情報がありません</span>}
          {convertQualification.map((value) => (
            <div key={value.uid} className="flex flex-row justify-between">
              <span>{value.displayName}</span>
              <span>{value.expiryDate ? convertDate(value.expiryDate) : '無制限'}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
