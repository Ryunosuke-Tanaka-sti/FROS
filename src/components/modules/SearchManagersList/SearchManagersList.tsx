import { SearchManager } from '@/types/search.type';

type SearchManagersListProps = {
  managers: SearchManager['managers'];
  onClickUser: (uid: string) => void;
};

export const SearchManagersList = (props: SearchManagersListProps) => {
  const { managers, onClickUser } = props;

  return (
    <>
      <div className="flex flex-col p-1">
        <h2 className="w-full bg-main-500 px-2 py-1 text-xl font-bold text-white">資格検索結果</h2>
        <ul className="flex flex-col gap-2 p-2">
          {managers.map((user) => (
            <li key={user.uid}>
              <span className="hover:cursor-pointer" onClick={() => onClickUser(user.uid)}>
                {user.displayName}
              </span>
              <span>{user.manager.displayName}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
