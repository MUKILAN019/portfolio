import React, { useState } from 'react';
import { Typography, Card, Form, Input, Button, message } from 'antd';
import { MailOutlined, UserOutlined, MessageOutlined, SendOutlined } from '@ant-design/icons';
import '../styles/Contact.css';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = () => {
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      message.success('Message sent successfully!');
      form.resetFields();
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <Title level={2} className="section-title">Get In Touch</Title>
        
        <div className="contact-content">
          <Card className="contact-card" variant="borderless">
            <Paragraph className="contact-intro">
              I'm always interested in hearing about new opportunities and projects. 
              Feel free to reach out if you'd like to connect!
            </Paragraph>
            
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="contact-form"
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input 
                  prefix={<UserOutlined />} 
                  placeholder="Your name"
                  size="large"
                  style={{color:"black"}}
                />
              </Form.Item>
              
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input 
                  prefix={<MailOutlined />} 
                  placeholder="your.email@example.com"
                  size="large"
                />
              </Form.Item>
              
              <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true, message: 'Please enter a subject' }]}
              >
                <Input 
                  prefix={<MessageOutlined />} 
                  placeholder="Subject"
                  size="large"
                />
              </Form.Item>
              
              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea 
                  rows={6}
                  placeholder="Your message..."
                />
              </Form.Item>
              
              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={loading}
                  icon={<SendOutlined />}
                  size="large"
                  block
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;