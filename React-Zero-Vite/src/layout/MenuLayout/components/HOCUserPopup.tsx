import { IUserPopup } from '@/ts/interfaces/menu';
import React, { ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';

const withUserMenu = <T,>(WrappedComponent: ComponentType<T>) => {
  const ComponentChildren = (props: T) => {
    const navigate = useNavigate();

    const userNavigation: IUserPopup[] = [
      {
        name: 'Dashboard',
        onClick: (event: React.ChangeEvent<HTMLDivElement>) => {
          event.preventDefault();
          navigate('/dashboard');
        },
      },
    ];

    return (
      <>
        <WrappedComponent {...props} userNavigation={userNavigation} />
      </>
    );
  };

  return ComponentChildren;
};

export default withUserMenu;
