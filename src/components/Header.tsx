import React, { useCallback, useMemo } from 'react';
import { Layout, Menu, Button } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  CodeOutlined, 
  ExperimentOutlined,
  ProjectOutlined,
  BookOutlined,
  TrophyOutlined,
  MailOutlined 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import '../styles/Header.css';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const menuItems = useMemo<MenuProps['items']>(
    () => [
      {
        key: 'home',
        icon: <HomeOutlined />,
        label: 'Home',
      },
      {
        key: 'about',
        icon: <UserOutlined />,
        label: 'About',
      },
      {
        key: 'skills',
        icon: <CodeOutlined />,
        label: 'Skills',
      },
      {
        key: 'experience',
        icon: <ExperimentOutlined />,
        label: 'Experience',
      },
      {
        key: 'projects',
        icon: <ProjectOutlined />,
        label: 'Projects',
      },
      {
        key: 'education',
        icon: <BookOutlined />,
        label: 'Education',
      },
      {
        key: 'achievements',
        icon: <TrophyOutlined />,
        label: 'Achievements',
      },
    ],
    []
  );

  const handleMenuClick: MenuProps['onClick'] = useCallback(
    (e: Parameters<NonNullable<MenuProps['onClick']>>[0]) => {
      onNavigate(e.key);
    },
    [onNavigate]
  );

  return (
    <AntHeader className="portfolio-header">
      <div className="header-content">
        <div className="logo">&lt;Mukilan/&gt;</div>
        <Menu
          mode="horizontal"
          items={menuItems}
          onClick={handleMenuClick}
          className="header-menu"
          theme="dark"
        />
        <Button 
          type="primary" 
          icon={<MailOutlined />}
          onClick={() => onNavigate('contact')}
          className="contact-button"
          aria-label="Contact Mukilan"
        >
          Contact
        </Button>
      </div>
    </AntHeader>
  );
};

export default Header;