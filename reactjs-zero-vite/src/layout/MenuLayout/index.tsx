import { EnumLanguages } from '@/ts/enum/locale';
import {
  BellOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  LeftOutlined,
  PieChartOutlined,
  RightOutlined,
  SettingOutlined,
  TableOutlined,
  UserOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'dashboard',
    icon: <PieChartOutlined />,
    label: 'Dashboard',
  },
  {
    key: 'table-management',
    icon: <TableOutlined />,
    label: 'Table Management',
  },
  {
    key: 'reservations',
    icon: <CalendarOutlined />,
    label: 'Reservations',
  },
  {
    key: 'waitlist',
    icon: <ClockCircleOutlined />,
    label: 'Waitlist',
  },
  {
    key: 'customers',
    icon: <UserOutlined />,
    label: 'Customers',
  },
  {
    key: 'notifications',
    icon: <BellOutlined />,
    label: 'Notifications',
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
];

const MenuLayout: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onClickMenu: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('LOCALE_ID_STORAGE', lang);
  };

  const languageItems = [
    {
      key: EnumLanguages.en,
      label: (
        <div className="flex items-center gap-2">
          <span>🇺🇸</span>
          <span>English</span>
        </div>
      ),
      onClick: () => changeLanguage(EnumLanguages.en),
    },
    {
      key: EnumLanguages.vi,
      label: (
        <div className="flex items-center gap-2">
          <span>🇻🇳</span>
          <span>Tiếng Việt</span>
        </div>
      ),
      onClick: () => changeLanguage(EnumLanguages.vi),
    },
  ];

  return (
    <Layout hasSider className="min-h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="lg"
        className="h-screen fixed left-0 top-0 bottom-0 border-r border-gray-200"
        style={{ background: colorBgContainer }}
        trigger={null}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="text-center font-semibold text-sm sm:text-base relative flex h-16 items-center border-b px-6">
            <img src={logo} alt="Eastgate Software" className="w-4 h-4 sm:w-6 sm:h-6 inline-block" />
            <span style={{ display: collapsed ? 'none' : 'inline' }} className="hidden sm:inline">Eastgate Software</span>
          </div>

          {/* Menu - Scrollable Section */}
          <div className="flex-1 overflow-y-auto">
            <Menu onClick={onClickMenu} className='py-3 py-2' defaultSelectedKeys={['dashboard']} mode="inline" items={items} />
          </div>

          <div className='mt-auto w-full flex items-center justify-between gap-2 p-2 border-t'>
            {/* Language Switcher */}
            <Dropdown menu={{ items: languageItems }} placement="topCenter">
              <Button
                size='large'
                type="text"
                icon={<GlobalOutlined />}              >
                {!collapsed && (
                  <span className="text-sm">
                    {i18n.language === EnumLanguages.vi ? '🇻🇳 VN' : '🇺🇸 EN'}
                  </span>
                )}
              </Button>
            </Dropdown>

            {/* Custom Collapse Trigger */}
            <Button
              size='large'
              type="text"
              icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>

        </div>
      </Sider>

      <Layout className={`transition-all duration-200 ${collapsed ? 'ml-20' : 'ml-48'}`}>
        <Content className="overflow-visible">
          <div
            className="p-8 min-h-full"
            style={{ background: colorBgContainer }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MenuLayout;
