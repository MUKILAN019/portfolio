import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import { TrophyOutlined, CalendarOutlined } from '@ant-design/icons';
import type { AchievementItem } from '../data/portfolioData';
import '../styles/Achievements.css';

const { Title, Text, Paragraph } = Typography;

interface AchievementsProps {
  achievements: AchievementItem[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section className="achievements-section" id="achievements">
      <div className="section-container">
        <Title level={2} className="section-title">Achievements & Certifications</Title>
        
        <Row gutter={[24, 24]}>
          {achievements.map((achievement) => (
            <Col xs={24} sm={12} lg={8} key={achievement.id}>
              <Card className="achievement-card" variant="borderless" hoverable>
                <div className="achievement-header">
                  <TrophyOutlined className="achievement-icon" />
                  <Title level={4} className="achievement-title">
                    {achievement.title}
                  </Title>
                </div>
                
                <Text className="achievement-issuer">
                  {achievement.issuer}
                </Text>
                
                <div className="achievement-date">
                  <CalendarOutlined /> {achievement.date}
                </div>
                
                {achievement.description && (
                  <Paragraph className="achievement-description">
                    {achievement.description}
                  </Paragraph>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Achievements;