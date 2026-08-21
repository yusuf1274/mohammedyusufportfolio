import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './pages/HeroSection';
import SkillsSection from './pages/SkillsSection';
import EducationSection from './pages/EducationSection';
import InterestsSection from './pages/InterestsSection';
import ContactSection from './pages/ContactSection';
import './index.css';

const App = () => {
  // Cursor glow effect
  useEffect(() => {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    const onMouseMove = (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeChild(glow);
    };
  }, []);

  // Intersection observer for section fade-in animations
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <HeroSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <EducationSection />
        <div className="section-divider" />
        <InterestsSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;