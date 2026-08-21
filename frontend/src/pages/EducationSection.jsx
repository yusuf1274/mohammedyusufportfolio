import React, { useEffect, useRef } from 'react';

const EDUCATION_DATA = [
  {
    id: 1,
    period: '2021 – 2025',
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'Visvesvaraya Technological University',
    location: 'Bangalore, Karnataka',
    grade: 'CGPA: 8.4 / 10',
    description:
      'Pursued a comprehensive curriculum covering data structures, algorithms, web technologies, cloud computing, and AI/ML fundamentals. Served as technical lead for the college coding club.',
    tags: ['DSA', 'DBMS', 'OS', 'Networks', 'ML', 'Web Dev'],
    status: 'current',
  },
  {
    id: 2,
    period: '2019 – 2021',
    degree: 'Pre-University (PUC) – Science Stream',
    institution: 'Sri Chaitanya PU College',
    location: 'Hyderabad, Telangana',
    grade: '92.8%',
    description:
      'Completed the science stream with Physics, Chemistry, Mathematics and Computer Science. Ranked in the top 5% of the state board examinations.',
    tags: ['PCM', 'Computer Science', 'State Board'],
    status: 'completed',
  },
  {
    id: 3,
    period: '2017 – 2019',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Kendriya Vidyalaya',
    location: 'Hyderabad, Telangana',
    grade: '94%',
    description:
      "Foundation years with strong emphasis on mathematics and logic. Was part of the school's Science Olympiad team and won multiple district-level competitions.",
    tags: ['Mathematics', 'Science', 'Olympiad'],
    status: 'completed',
  },
];

const CERTIFICATIONS = [
  { title: 'Meta Front-End Developer', provider: 'Coursera / Meta', year: '2024', icon: '🏆' },
  { title: 'AWS Cloud Practitioner', provider: 'Amazon Web Services', year: '2023', icon: '☁️' },
  { title: 'The Complete React Course', provider: 'Udemy', year: '2023', icon: '⚛️' },
  { title: 'Python for Data Science', provider: 'IBM / Coursera', year: '2022', icon: '🐍' },
];

const TimelineCard = ({ item, index }) => {
  const ref = useRef(null);

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
    <div className="timeline-item" ref={ref}>
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
        <div className="animate-fade-up">
          <span className="section-badge">🎓 Academic Journey</span>
          <h2 id="education-heading" className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic background that shaped my technical foundation and problem-solving mindset.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline" role="list" aria-label="Education timeline">
          {EDUCATION_DATA.map((item, i) => (
            <div key={item.id} role="listitem">
              <TimelineCard item={item} index={i} />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginTop: '4rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="section-badge">📜 Credentials</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.5rem' }}>
              Certifications
            </h3>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1rem',
          }}>
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={cert.title}
                className="animate-fade-up"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  transitionDelay: `${i * 0.1}s`,
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{ fontSize: '1.75rem', flexShrink: 0 }} aria-hidden="true">{cert.icon}</span>
                <div>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                    {cert.title}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{cert.provider}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-primary-light)', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
                    {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
