import { useNavigate } from 'react-router-dom';

import { Logo } from '@/components/common/Logo/Logo';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-row justify-between border-b px-8 py-6">
      <Logo />
      <div className="flex flex-row gap-3">
        <button
          onClick={() => navigate('/my-page')}
          className="w-40 rounded-md border-2 border-main-500 py-4 text-main-500"
        >
          MYページ
        </button>
        <button
          onClick={() => navigate('/')}
          className="w-40 rounded-md border-2 border-main-500 py-4 text-main-500"
        >
          検索ページ
        </button>
      </div>
    </header>
  );
};
