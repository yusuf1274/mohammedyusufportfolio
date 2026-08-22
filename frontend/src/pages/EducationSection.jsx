import React, { useEffect, useRef } from 'react';

const EDUCATION_DATA = [
  {
    id: 1,
    period: '2022 – 2025',
    degree: 'B.Sc – Computer Science',
    institution: 'The American College',
    location: 'Madurai, Tamil Nadu',
    grade: 'CGPA: 7.2 / 10',
    description:
      'Pursued a comprehensive curriculum covering data structures, algorithms, database management, operating systems, computer networks, web development, cloud computing, and AI/ML fundamentals. Developed strong problem-solving and software development skills through academic and practical projects.',
    tags: ['Python', 'Java', 'C++', 'DSA', 'SQL', 'Web Development'],
    status: 'completed',
  },
  {
    id: 2,
    period: '2020 – 2022',
    degree: 'Higher Secondary Certificate (HSC) – Computer Science',
    institution: 'St. Britto Higher Secondary School',
    location: 'Madurai, Tamil Nadu',
    grade: '62% (372 / 600)',
    description:
      'Completed Higher Secondary Education in the Computer Science group covering Computer Science, Mathematics, Physics, and Chemistry. Developed a solid foundation in programming logic, analytical thinking, and problem-solving skills.',
    tags: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'State Board'],
    status: 'completed',
  },
  {
    id: 3,
    period: '2019 – 2020',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'St. Britto Higher Secondary School',
    location: 'Madurai, Tamil Nadu',
    grade: '64.2%',
    description:
      'Successfully completed secondary education with a balanced academic performance across science, mathematics, and language subjects. Developed strong discipline, teamwork, and a keen interest in technology.',
    tags: ['Mathematics', 'Science', 'State Board'],
    status: 'completed',
  },
];

const CERTIFICATIONS = [
  { title: 'Meta Front-End Developer',  provider: 'Coursera / Meta',          year: '2024', icon: '🏆' },
  { title: 'AWS Cloud Practitioner',    provider: 'Amazon Web Services',       year: '2023', icon: '☁️' },
  { title: 'The Complete React Course', provider: 'Udemy',                     year: '2023', icon: '⚛️' },
  { title: 'Python for Data Science',   provider: 'IBM / Coursera',            year: '2022', icon: '🐍' },
];

const TimelineCard = ({ item, index }) => {
  const ref = useRef(null);
  const isLeft = index % 2 === 1; // alternating sides

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('animate-fade-up');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 150);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      className={`timeline-item ${isLeft ? 'timeline-item--left' : 'timeline-item--right'}`}
      ref={ref}
      role="listitem"
    >
      <div className="timeline-dot" aria-hidden="true" />
      <div className="timeline-card">
        <div className="timeline-card__period">
          <span aria-hidden="true">📅</span> {item.period}
        </div>
        <h3 className="timeline-card__degree">{item.degree}</h3>
        <p className="timeline-card__institution">
          {item.institution} — {item.location}
        </p>
        <p className="timeline-card__description">{item.description}</p>
        <div className="timeline-card__grade">
          <span aria-hidden="true">🎓</span> {item.grade}
        </div>
        <div className="timeline-card__tags">
          {item.tags.map((tag) => (
            <span key={tag} className="timeline-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="section section--alt" aria-labelledby="education-heading">
      <div className="container">
        <div className="section-header animate-fade-up">
          <span className="section-badge">🎓 Academic Journey</span>
          <h2 id="education-heading" className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic background that shaped my technical foundation and problem-solving mindset.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline" role="list" aria-label="Education timeline">
          {EDUCATION_DATA.map((item, i) => (
            <TimelineCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Certifications */}
        <div className="certifications-header animate-fade-up">
          <span className="section-badge">📜 Credentials</span>
          <h3 className="certifications-title">Certifications</h3>
        </div>

        <div className="certifications-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.title}
              className="cert-card animate-fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="cert-card__icon" aria-hidden="true">{cert.icon}</span>
              <div>
                <p className="cert-card__title">{cert.title}</p>
                <p className="cert-card__provider">{cert.provider}</p>
                <p className="cert-card__year">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
