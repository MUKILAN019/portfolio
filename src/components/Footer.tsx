import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Layout, Typography, Input, Button, message, Row, Col, Form } from 'antd';
import { 
  GithubOutlined, 
  LinkedinOutlined, 
  MailOutlined,
  SendOutlined,
  UserOutlined 
} from '@ant-design/icons';
import type { PersonalInfo } from '../data/portfolioData';
import '../styles/Footer.css';

const { Footer: AntFooter } = Layout;
const { Text, Title } = Typography;
const { TextArea } = Input;

interface FooterProps {
  personal: PersonalInfo;
}

const Footer: React.FC<FooterProps> = ({ personal }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string);
  }, []);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        {
          name: values.name,
          email: values.email,
          message: values.message
        }
      );
      
      message.success('Thanks for reaching out! I\'ll get back to you soon.');
      form.resetFields();
    } catch (error) {
      console.error('EmailJS error:', error);
      message.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AntFooter className="portfolio-footer" id="contact">
      <div className="footer-content">
        <Row gutter={[48, 48]} className="footer-main">
          {/* LEFT SIDE - Your Info */}
          <Col xs={24} md={12} className="footer-left">
            <div className="footer-info">
              <Title level={3} className="footer-name">{personal.name}</Title>
              <Text className="footer-role">{personal.role}</Text>
              <Text className="footer-tagline">
                Built with passion and precision | Open to opportunities
              </Text>
              <Text className="footer-subtitle">
                Let's build something amazing together
              </Text>

              <div className="footer-social">
                {personal.github && (
                <a 
                  href={personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="Mukilan's GitHub Profile"
                >
                  <GithubOutlined style={{ fontSize: '24px' }} />
                </a>
              )}
              {personal.linkedin && (
                <a 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="Mukilan's LinkedIn Profile"
                >
                  <LinkedinOutlined style={{ fontSize: '24px' }} />
                </a>
              )}
              {personal.email && (
                <a 
                  href={`mailto:${personal.email}`}
                  className="footer-link"
                  aria-label="Email Mukilan"
                >
                  <MailOutlined style={{ fontSize: '24px' }} />
                </a>
              )}
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE - Get In Touch Form */}
          <Col xs={24} md={12} className="footer-right">
            <Title level={3} className="footer-title">Get In Touch</Title>
            <Text className="footer-description">
              Have a project in mind or just want to chat? Fill out the form and I'll get back to you.
            </Text>
            
            <Form
              form={form}
              onFinish={handleSubmit}
              layout="vertical"
              className="footer-form"
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input 
                  placeholder="Your name"
                  size="large"
                  prefix={<UserOutlined />}
                  className="footer-input"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input 
                  placeholder="your.email@example.com"
                  size="large"
                  prefix={<MailOutlined />}
                  className="footer-input"
                />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[{ required: true, message: 'Please tell me what you need' }]}
              >
                <TextArea 
                  placeholder="What do you need help with? Tell me about your project or question..."
                  rows={4}
                  className="footer-textarea"
                />
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit"
                  size="large"
                  icon={<SendOutlined />}
                  loading={loading}
                  className="footer-send-button"
                  block
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer;