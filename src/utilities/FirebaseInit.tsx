import { useEffect, useState } from 'react';

import { User, onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/auth/authFirebase';
import { useAuthAction } from '@/hooks/useAuth';

type Props = {
  children: React.ReactNode;
};

export const FirebaseInit = (props: Props) => {
  const { children } = props;
  const { signInAction } = useAuthAction();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (getAuthUser: User | null) => {
      // console.log('getAuthUser', getAuthUser);

      if (!getAuthUser) return signInAction();
      setLoading(false);
    });

    return () => {
      unsubscribe;
    };
  });

  if (loading || auth.currentUser == null) return <div>loading</div>;

  return <>{children}</>;
};
