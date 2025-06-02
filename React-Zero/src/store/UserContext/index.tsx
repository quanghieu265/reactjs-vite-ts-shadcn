import React, { ReactNode, useEffect, useState } from 'react';
import { IUserData } from 'ts/interfaces/user';
import { UserContextType } from 'ts/type/userContext';
import { getUserInfoEffect } from './api';

export const UserContext = React.createContext<UserContextType | null>(null);

const UserWrapperContext = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUserData>({
    name: '',
    email: '',
    imageUrl: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getUserInfoEffect();

      console.log('data :>> ', data);
      setUser({
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl: 'https://derx6btlql1t8.cloudfront.net/messi.jpg',
        ...data,
      });
      setLoading(false);
    })();
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{loading ? 'Loading...' : children}</UserContext.Provider>;
};

export default UserWrapperContext;
