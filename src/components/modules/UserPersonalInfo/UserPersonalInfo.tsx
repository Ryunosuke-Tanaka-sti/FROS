import { Tips } from '@/components/common/Tips/Tips';
import { Title } from '@/components/common/Title/Title';
import { UserPersonalInfoType } from '@/types/userData.type';

type UserPersonalInfoProps = {
  personalInfo: UserPersonalInfoType;
};

export const UserPersonalInfo = (props: UserPersonalInfoProps) => {
  const { personalInfo } = props;
  const { displayName, photoURL, sl } = personalInfo;
  return (
    <>
      <div className=" flex w-96 flex-col overflow-hidden rounded-2xl border-inherit bg-white shadow">
        <h2 className="w-full bg-main-500 px-2 py-1 text-xl font-bold text-white">ユーザー情報</h2>
        <div className="flex flex-col gap-3 p-4">
          <h3 className="flex flex-row items-center gap-2">
            <img
              className="size-10 rounded-full object-contain"
              src={photoURL != '' ? photoURL : 'https://placehold.jp/150x150.png'}
              alt=""
            />
            <span>{displayName}</span>
          </h3>
          <div className="flex flex-col gap-1">
            <Title text="所属SL" size="sm" />
            <div className="flex flex-row flex-wrap gap-2">
              {sl.map((value) => (
                <Tips key={value.uid} text={value.displayName} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
