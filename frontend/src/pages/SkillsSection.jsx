import React, { useEffect, useRef } from 'react';

const SKILL_CATEGORIES = [
  {
    icon: '⚛️',
    title: 'Frontend Development',
    skills: [
      { name: 'React.js / Next.js', percent: 90 },
      { name: 'HTML5 / CSS3', percent: 95 },
      { name: 'JavaScript (ES6+)', percent: 88 },
      { name: 'TypeScript', percent: 78 },
    ],
  },
  {
    icon: '🔧',
    title: 'Backend Development',
    skills: [
      { name: 'Node.js / Express', percent: 85 },
      { name: 'Python / Django', percent: 75 },
      { name: 'REST APIs / GraphQL', percent: 82 },
      { name: 'MongoDB / PostgreSQL', percent: 78 },
    ],
  },
  {
    icon: '🎨',
    title: 'UI / UX Design',
    skills: [
      { name: 'Figma', percent: 80 },
      { name: 'Responsive Design', percent: 92 },
      { name: 'Tailwind CSS', percent: 88 },
      { name: 'Animation / Motion', percent: 72 },
    ],
  },
  {
    icon: '🚀',
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git / GitHub', percent: 90 },
      { name: 'Docker', percent: 70 },
      { name: 'AWS / Vercel', percent: 75 },
      { name: 'Linux / CLI', percent: 80 },
    ],
  },
];

const TECH_TAGS = [
  'React', 'Next.js', 'Vue.js', 'TypeScript', 'Node.js', 'Python',
  'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Figma',
  'GraphQL', 'REST API', 'Git', 'Linux', 'Vite', 'Tailwind',
];

const SkillBar = ({ name, percent, index }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            bar.style.width = `${percent}%`;
            bar.classList.add('animated');
          }, index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(bar.parentElement);
    return () => observer.disconnect();
  }, [percent, index]);

  return (
    <div className="skill-item">
      <div className="skill-item__header">
        <span className="skill-item__name">{name}</span>
        <span className="skill-item__percent">{percent}%</span>
      </div>
      <div className="skill-bar" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label={`${name} proficiency: ${percent}%`}>
        <div className="skill-bar__fill" ref={barRef} style={{ width: 0 }} />
      </div>
    </div>
  );
};

const SkillCategoryCard = ({ category, cardIndex }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.classList.add('animate-fade-up');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), cardIndex * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [cardIndex]);

  return (
    <div className="skill-category" ref={cardRef}>
      <span className="skill-category__icon" aria-hidden="true">{category.icon}</span>
      <h3 className="skill-category__title">{category.title}</h3>
      <div className="skill-items">
        {category.skills.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} index={i} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <div className="animate-fade-up">
          <span className="section-badge">⚡ Technical Arsenal</span>
          <h2 id="skills-heading" className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A curated set of tools and technologies I've mastered over years of
            building real-world applications and shipping products.
          </p>
        </div>

        <div className="skills-grid" role="list" aria-label="Skill categories">
          {SKILL_CATEGORIES.map((category, i) => (
            <div key={category.title} role="listitem">
              <SkillCategoryCard category={category} cardIndex={i} />
            </div>
          ))}
        </div>

        {/* Tech tags cloud */}
        <div aria-label="Technology tags">
          <div className="tech-tags">
            {TECH_TAGS.map((tag) => (
              <span key={tag} className="tech-tag">
                <span aria-hidden="true">✦</span> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
