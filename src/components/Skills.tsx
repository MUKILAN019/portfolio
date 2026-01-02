import React from 'react';
import { Typography, Card, Tag, Row, Col } from 'antd';
import type { SkillsInfo } from '../data/portfolioData';
import '../styles/Skills.css';

const { Title } = Typography;

interface SkillsProps {
  skills: SkillsInfo;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <Title level={2} className="section-title">Skills & Technologies</Title>
        
        <Row gutter={[24, 24]}>
          {skills.categories.map((category, index) => (
            <Col xs={24} sm={12} lg={12} key={index}>
              <Card 
                className="skill-category-card" 
                variant="borderless"
                title={category.title}
              >
                <div className="skills-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <Tag 
                      key={skillIndex} 
                      className="skill-tag"
                      color="blue"
                    >
                      {skill}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Skills;