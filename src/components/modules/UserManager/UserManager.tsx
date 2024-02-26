import { UserManagerDataType } from '@/types/userData.type';

type UserManagerProps = {
  manager: UserManagerDataType[];
};

export const UserManager = (props: UserManagerProps) => {
  const { manager } = props;
  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-2xl border-inherit   bg-white  shadow">
        <h2 className="flex w-full flex-row justify-between bg-main-500 px-2 py-1 text-xl font-bold text-white">
          権限情報
        </h2>
        <div className="flex  flex-col gap-3 p-4">
          {manager.length === 0 && <span>権限情報がありません</span>}
          {manager.map((value) => (
            <div key={value.uid} className="flex flex-row justify-between">
              <span>{value.displayName}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
