import React from 'react';
import { Typography, Card } from 'antd';
import type { AboutInfo } from '../data/portfolioData';
import '../styles/About.css';

const { Title, Paragraph } = Typography;

interface AboutProps {
  about: AboutInfo;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <Title level={2} className="section-title">About Me</Title>
        <Card className="about-card" variant="borderless">
          <Paragraph className="about-summary">
            {about.summary}
          </Paragraph>
        </Card>
      </div>
    </section>
  );
};

export default About;