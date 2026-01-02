import React from 'react';
import { Typography, Card, Tag, Row, Col, Button, Space } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import type { ProjectItem } from '../data/portfolioData';
import '../styles/Projects.css';

const { Title, Paragraph } = Typography;

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <Title level={2} className="section-title">Featured Projects</Title>
        
        <Row gutter={[24, 24]}>
          {projects.map((project) => (
            <Col xs={24} md={12} lg={8} key={project.id}>
              <Card 
                className="project-card" 
                variant="borderless"
                hoverable
              >
                <Title level={4} className="project-title">
                  {project.title}
                </Title>
                
                <Paragraph className="project-description">
                  {project.description}
                </Paragraph>
                
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                )}
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <Tag key={index} color="blue">{tech}</Tag>
                  ))}
                </div>
                
                {(project.link || project.github) && (
                  <Space className="project-links">
                    {project.link && (
                      <Button 
                        type="link" 
                        icon={<LinkOutlined />}
                        href={project.link}
                        target="_blank"
                      >
                        View Live
                      </Button>
                    )}
                    {project.github && (
                      <Button 
                        type="link" 
                        icon={<GithubOutlined />}
                        href={project.github}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    )}
                  </Space>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Projects;