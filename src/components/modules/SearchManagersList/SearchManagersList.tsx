import { useNavigate } from 'react-router-dom';

import { SearchManager } from '@/types/search.type';

type SearchManagersListProps = {
  managers: SearchManager['managers'];
};

export const SearchManagersList = (props: SearchManagersListProps) => {
  const { managers } = props;
  const navigate = useNavigate();
  const onClickUser = (uid: string) => {
    navigate(`/users/${uid}`);
  };
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
