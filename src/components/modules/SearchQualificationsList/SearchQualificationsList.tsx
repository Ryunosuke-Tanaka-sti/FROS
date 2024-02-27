import { useNavigate } from 'react-router-dom';

import { SearchQualification } from '@/types/search.type';

type SearchQualificationsListProps = {
  qualifications: SearchQualification['qualifications'];
};

export const SearchQualificationsList = (props: SearchQualificationsListProps) => {
  const { qualifications } = props;
  const navigate = useNavigate();
  const onClickUser = (uid: string) => {
    navigate(`/users/${uid}`);
  };
  return (
    <>
      <div className="flex flex-col p-1">
        <h2 className="w-full bg-main-500 px-2 py-1 text-xl font-bold text-white">資格検索結果</h2>
        <ul className="flex flex-col gap-2 p-2">
          {qualifications.map((user) => (
            <li key={user.uid}>
              <span className="hover:cursor-pointer" onClick={() => onClickUser(user.uid)}>
                {user.displayName}
              </span>
              <span>{user.qualification.displayName}</span>
              <span>{user.qualification.expiryDate ? 'has expireDate' : 'unlimited'}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
