import React from 'react';
import { Typography, Space } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  LinkedinOutlined, 
  GithubOutlined,
  EnvironmentOutlined 
} from '@ant-design/icons';
import type { PersonalInfo } from '../data/portfolioData';
import '../styles/Hero.css';

const { Title, Text } = Typography;

interface HeroProps {
  personal: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ personal }) => {
  return (
    <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="hero-layout">
              <Space orientation="vertical" size="large" className="hero-text">
            <Title level={1} className="hero-name">
              {personal.name}
            </Title>
            <Title level={2} className="hero-role">
              {personal.role}
            </Title>
            <Text className="hero-tagline">
              {personal.tagline}
            </Text>
          
          <div className="hero-contact">
            <Space wrap size="middle">
              {personal.email && (
                <a href={`mailto:${personal.email}`} className="contact-link">
                  <MailOutlined /> {personal.email}
                </a>
              )}
              {personal.phone && (
                <span className="contact-item">
                  <PhoneOutlined /> {personal.phone}
                </span>
              )}
              {personal.location && (
                <span className="contact-item">
                  <EnvironmentOutlined /> {personal.location}
                </span>
              )}
            </Space>
          </div>
          
          <div className="hero-social">
            <Space size="middle">
              {personal.linkedin && (
                <a 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Mukilan Palanichamy's LinkedIn Profile"
                >
                  <LinkedinOutlined style={{ fontSize: '24px' }} />
                </a>
              )}
              {personal.github && (
                <a 
                  href={personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Mukilan Palanichamy's GitHub Profile"
                >
                  <GithubOutlined style={{ fontSize: '24px' }} />
                </a>
              )}
            </Space>
          </div>
        </Space>
        
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img 
              src="/assets/profile.jpeg" 
              alt="Mukilan Palanichamy - Frontend Developer & Software Engineer"
              className="hero-profile-image"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;