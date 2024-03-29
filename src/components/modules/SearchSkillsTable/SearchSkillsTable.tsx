import { SearchSkill } from '@/types/search.type';

type SearchSkillsTableProps = {
  skills: SearchSkill;
  onClickUser: (uid: string) => void;
};

export const SearchSkillsTable = (props: SearchSkillsTableProps) => {
  const { onClickUser, skills } = props;
  const { users, utilities } = skills;

  return (
    <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          <th className="">ユーザー名</th>
          {utilities.skills.map((skill) => (
            <th className="" key={skill.uid}>
              {skill.displayName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.length === 0 && <tr>データががありません</tr>}
        {users.map((user) => (
          <tr className="border-b dark:border-neutral-500" key={user.uid}>
            <td className="hover:cursor-pointer" onClick={() => onClickUser(user.uid)}>
              {user.displayName}
            </td>
            {utilities.skills.map((skill) => (
              <td key={skill.uid}>
                {user.skills.find((userSkill) => userSkill.uid === skill.uid)?.level}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
