import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import { BookOutlined, CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import type { EducationItem } from '../data/portfolioData';
import '../styles/Education.css';

const { Title, Text, Paragraph } = Typography;

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="education-section" id="education">
      <div className="section-container">
        <Title level={2} className="section-title">Education</Title>
        
        <Row gutter={[24, 24]}>
          {education.map((edu) => (
            <Col xs={24} key={edu.id}>
              <Card className="education-card" variant="borderless">
                <div className="education-header">
                  <BookOutlined className="education-icon" />
                  <div className="education-info">
                    <Title level={4} className="education-degree">
                      {edu.degree} in {edu.field}
                    </Title>
                    <Title level={5} className="education-institution">
                      {edu.institution}
                    </Title>
                  </div>
                </div>
                
                <div className="education-meta">
                  <Text className="education-duration">
                    <CalendarOutlined /> {edu.duration}
                  </Text>
                  <Text className="education-location">
                    <EnvironmentOutlined /> {edu.location}
                  </Text>
                  {edu.gpa && (
                    <Text className="education-gpa">
                      GPA: {edu.gpa}
                    </Text>
                  )}
                </div>
                
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="education-achievements">
                    <Paragraph strong>Achievements:</Paragraph>
                    <ul>
                      {edu.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Education;