import { useEffect, useState, lazy, Suspense } from 'react';
import { Layout, FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import Header from './components/Header';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Achievements = lazy(() => import('./components/Achievements'));
const Footer = lazy(() => import('./components/Footer'));
import { portfolioData } from './data/portfolioData';
import './App.css';

const { Content } = Layout;

function App() {
  const [, setActiveSection] = useState<string>('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout className="portfolio-layout">
      <Header onNavigate={scrollToSection} />
      
      <Content className="portfolio-content">
        <Hero personal={portfolioData.personal} />
        <Suspense fallback={<div className="section-loading" style={{ height: '100px' }} />}>
          <About about={portfolioData.about} />
        </Suspense>
        <Suspense fallback={<div className="section-loading" style={{ height: '100px' }} />}>
          <Skills skills={portfolioData.skills} />
        </Suspense>
        <Suspense fallback={<div className="section-loading" style={{ height: '100px' }} />}>
          <Experience experience={portfolioData.experience} />
        </Suspense>
        <Suspense fallback={<div className="section-loading" style={{ height: '100px' }} />}>
          <Projects projects={portfolioData.projects} />
        </Suspense>
        <Suspense fallback={<div className="section-loading" style={{ height: '100px' }} />}>
          <Education education={portfolioData.education} />
        </Suspense>
        <Suspense fallback={<div className="section-loading" style={{ height: '100px' }} />}>
          <Achievements achievements={portfolioData.achievements} />
        </Suspense>
      </Content>
      
      <Suspense fallback={<div style={{ height: '100px' }} />}>
        <Footer personal={portfolioData.personal} />
      </Suspense>
      
      <FloatButton.BackTop 
        icon={<UpOutlined />}
        type="primary"
        className="back-to-top"
      />
    </Layout>
  );
}

export default App;
