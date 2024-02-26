import { UserSkillDataType } from '@/types/userData.type';

type UserSkillProps = {
  skill: UserSkillDataType[];
};

export const UserSkill = (props: UserSkillProps) => {
  const { skill } = props;
  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-2xl border-inherit   bg-white  shadow">
        <h2 className="w-full bg-main-500 px-2 py-1 text-xl font-bold text-white">スキル情報</h2>
        <div className="flex flex-col gap-3 p-4">
          {skill.length === 0 && <span>スキル情報がありません</span>}
          {skill.map((value) => (
            <div key={value.uid} className="flex flex-row justify-between">
              <span>{value.displayName}</span>
              <span>{value.level}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
