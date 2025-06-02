import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { LOCALE_KEYS } from 'locales';
import React, { ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnumPathRouters } from 'ts/enum/menu';
import { IUserPopup } from 'ts/interfaces/menu';

const withUserMenu = <T,>(WrappedComponent: ComponentType<T>) => {
  const ComponentChildren = (props: T) => {
    const navigate = useNavigate();
    const { confirm } = Modal;

    const userNavigation: IUserPopup[] = [
      {
        name: LOCALE_KEYS.userpopup.userProfile,
        onClick: (event: React.ChangeEvent<HTMLDivElement>) => {
          event.preventDefault();
          navigate(EnumPathRouters.dashboard);
        },
      },
      {
        name: LOCALE_KEYS.userpopup.settings,
        onClick: (event: React.ChangeEvent<HTMLDivElement>) => {
          event.preventDefault();
          navigate(EnumPathRouters.settings);
        },
      },
      {
        name: LOCALE_KEYS.userpopup.signOut,
        onClick: (event: React.ChangeEvent<HTMLDivElement>) => {
          event.preventDefault();
          confirm({
            title: 'Do you want to delete these items?',
            icon: <ExclamationCircleFilled />,
            content: 'When clicked the OK button, this dialog will be closed after 1 second',
            async onOk() {
              try {
                return await new Promise((resolve, reject) => {
                  setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                });
              } catch {
                return console.log('Oops errors!');
              }
            },
            onCancel() {},
          });
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
