import React from 'react';
import { Typography, Timeline, Card, Tag, Space } from 'antd';
import { EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons';
import type { ExperienceItem } from '../data/portfolioData';
import '../styles/Experience.css';

const { Title, Text } = Typography;

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const timelineItems = experience.map((exp) => ({
    content: (
      <Card className="experience-card" variant="borderless">
        <div className="experience-header">
          <div>
            <Title level={4} className="experience-position">{exp.position}</Title>
            <Title level={5} className="experience-company">{exp.company}</Title>
          </div>
        </div>
        
        <Space size="middle" className="experience-meta">
          <Text className="experience-location">
            <EnvironmentOutlined /> {exp.location}
          </Text>
          <Text className="experience-duration">
            <CalendarOutlined /> {exp.duration}
          </Text>
        </Space>
        
        <ul className="experience-description">
          {exp.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
        {exp.technologies && exp.technologies.length > 0 && (
          <div className="experience-technologies">
            {exp.technologies.map((tech, index) => (
              <Tag key={index} color="cyan">{tech}</Tag>
            ))}
          </div>
        )}
      </Card>
    ),
  }));

  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        <Title level={2} className="section-title">Work Experience</Title>
        <Timeline
          mode="start"
          items={timelineItems}
          className="experience-timeline"
        />
      </div>
    </section>
  );
};

export default Experience;