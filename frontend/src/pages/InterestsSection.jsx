import React, { useEffect, useRef } from 'react';

const INTERESTS = [
  {
    emoji: '🤖',
    title: 'Artificial Intelligence',
    desc: 'Fascinated by machine learning models, neural networks, and building intelligent systems that push the boundaries of what\'s possible.',
    color: '#6366f1',
    shadow: 'rgba(99,102,241,0.3)',
    glow: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, transparent 100%)',
  },
  {
    emoji: '🎮',
    title: 'Game Development',
    desc: 'Passionate about creating interactive worlds and game mechanics using Unity and web-based canvas technologies.',
    color: '#a855f7',
    shadow: 'rgba(168,85,247,0.3)',
    glow: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, transparent 100%)',
  },
  {
    emoji: '☁️',
    title: 'Cloud & DevOps',
    desc: 'Enthusiastic about cloud-native architecture, containerization, and building automated CI/CD pipelines for seamless deployments.',
    color: '#22d3ee',
    shadow: 'rgba(34,211,238,0.3)',
    glow: 'linear-gradient(135deg, rgba(34,211,238,0.1) 0%, transparent 100%)',
  },
  {
    emoji: '🔐',
    title: 'Cybersecurity',
    desc: 'Deeply interested in ethical hacking, penetration testing, and building secure applications that protect user data.',
    color: '#f43f5e',
    shadow: 'rgba(244,63,94,0.3)',
    glow: 'linear-gradient(135deg, rgba(244,63,94,0.1) 0%, transparent 100%)',
  },
  {
    emoji: '📱',
    title: 'Mobile Development',
    desc: 'Love crafting beautiful cross-platform mobile experiences using React Native that feel native on both iOS and Android.',
    color: '#10b981',
    shadow: 'rgba(16,185,129,0.3)',
    glow: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, transparent 100%)',
  },
  {
    emoji: '🎨',
    title: 'Creative Coding',
    desc: 'Explore generative art, WebGL shaders, and the intersection of code and creativity to produce visually stunning experiences.',
    color: '#f59e0b',
    shadow: 'rgba(245,158,11,0.3)',
    glow: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, transparent 100%)',
  },
  {
    emoji: '📊',
    title: 'Data Science',
    desc: 'Enjoy extracting meaningful insights from raw data using pandas, NumPy, and visualizing patterns with matplotlib and D3.js.',
    color: '#6366f1',
    shadow: 'rgba(99,102,241,0.3)',
    glow: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, transparent 100%)',
  },
  {
    emoji: '🌐',
    title: 'Open Source',
    desc: 'Active contributor to open source projects and a strong believer in collaborative development and knowledge sharing.',
    color: '#22d3ee',
    shadow: 'rgba(34,211,238,0.3)',
    glow: 'linear-gradient(135deg, rgba(34,211,238,0.1) 0%, transparent 100%)',
  },
];

const InterestCard = ({ interest, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <article
      ref={ref}
      className="interest-card"
      style={{
        '--card-color': interest.color,
        '--card-shadow': interest.shadow,
        '--card-glow': interest.glow,
        opacity: 0,
        transform: 'translateY(24px)',
        transition: `opacity 0.5s ease, transform 0.5s ease`,
      }}
      aria-label={interest.title}
    >
      <span className="interest-card__emoji" role="img" aria-label={interest.title}>
        {interest.emoji}
      </span>
      <h3 className="interest-card__title">{interest.title}</h3>
      <p className="interest-card__desc">{interest.desc}</p>
    </article>
  );
};

const InterestsSection = () => {
  return (
    <section id="interests" className="section" aria-labelledby="interests-heading">
      <div className="container">
        <div>
          <span className="section-badge">💡 Passion Points</span>
          <h2 id="interests-heading" className="section-title">Areas of Interest</h2>
          <p className="section-subtitle">
            Beyond code, these are the domains that inspire me and drive my constant
            curiosity to learn, build, and innovate.
          </p>
        </div>

        <div className="interests-grid" role="list" aria-label="Areas of interest">
          {INTERESTS.map((interest, i) => (
            <div key={interest.title} role="listitem">
              <InterestCard interest={interest} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
