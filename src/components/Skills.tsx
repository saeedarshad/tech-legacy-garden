import React from 'react';

type SkillGroup = {
  category: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    items: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'Celery', 'Docker'],
  },
  {
    category: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5 / CSS3', 'SCSS'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, Lambda)', 'CI/CD', 'Git / GitHub', 'Sentry'],
  },
  {
    category: 'AI & Data',
    items: [
      'LLM Integration',
      'Chatbots / RAG',
      'Machine Learning',
      'NLP',
      'Data Analysis',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <div className="mb-12">
          <p className="eyebrow mb-3">Skills</p>
          <h2 className="section-title">Tools I work with</h2>
          <p className="section-subtitle max-w-2xl">
            The technologies I use most across backend, frontend, cloud, and AI.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category} className="glass-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
