import React from 'react';

type ExperienceItem = {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  current?: boolean;
  description: string[];
};

const experienceItems: ExperienceItem[] = [
  {
    title: 'Senior Frontend Engineer (Consultant)',
    company: 'Guided Ultrasonics Limited',
    companyUrl: 'https://www.guided-ultrasonics.com/',
    period: 'Sep 2025 - Present',
    current: true,
    description: [
      'Sole frontend engineer building Edge Node, a pipeline integrity monitoring platform, from scratch in Angular 21 with standalone components, signals, PrimeNG, and Tailwind.',
      'Built coordinated multi-chart analytics with Highcharts, including position-by-date heatmaps, pipe schematics, and cross-chart synchronisation so a single click aligns every linked chart for fast signal triangulation.',
      'Implemented role-based access control across navigation, inline controls, and downloads, backed by a permission matrix for fine-grained role tuning.',
      'Delivered an offline-aware interactive sensor location map with ArcGIS, lazy-loaded and rendered only when online.',
      'Built the full administration suite: hierarchical asset CRUD, data validation workflows, chaining analysis, and user and role management.',
    ],
  },
  {
    title: 'Team Lead / Senior Software Engineer',
    company: 'Ignis Health',
    companyUrl: 'https://ignishealth.com/',
    period: 'Jan 2019 - Present',
    current: true,
    description: [
      'Lead the engineering team end to end, owning the full delivery cycle from client meetings and feature planning through development and code review.',
      'Developed an end-to-end AI support agent that answers from the company knowledge base, with tools built on Claude tool calling to perform read and write actions against the database.',
      'Applied AI extensively across the product to improve the user experience and give users deeper, actionable insights.',
      "Built admin dashboards that surface each customer's AI usage and their users' interactions with the AI.",
      'Connected Sentry, Jira, and GitHub to Claude through MCP to automate development and bug-fixing workflows.',
      'Built a dynamic Angular editor that lets users reconfigure and live-preview the interface from within the app and save configurations.',
      'Integrated Google Analytics, Mailchimp, Stripe, and Klaviyo, driving a 25% increase in customer retention and 40% higher transactional efficiency.',
    ],
  },
  {
    title: 'Senior Software Engineer, Python/Django/Angular (Consultant)',
    company: 'Medi Know',
    companyUrl: 'https://mediknow.io/',
    period: 'Dec 2024 - Aug 2025',
    description: [
      'Senior full-stack developer on an education platform for medical students in Germany, working directly with the doctor-founders to shape and implement requirements.',
      'Built a quiz system to make learning fun, with quizzes generated automatically from topics and articles using AI.',
      'Introduced a dual quiz mode where two users compete on the same questions by taking turns.',
      'Introduced level-based learning plans that guide users through the exam syllabus one topic at a time, unlocking the next only once each topic is cleared.',
      'Developed a fully customisable learning path where users pick their topics, target timeline, and daily and weekly availability to generate a tailored plan, with periodic quizzes to keep them on track for exams.',
      'Built B2B licensing features that enabled efficient management for business clients.',
      'Optimized Django querysets to improve database efficiency and system performance.',
    ],
  },
  {
    title: 'Senior Software Engineer, Angular (Consultant)',
    company: 'Nomor AB (Now Rentokil)',
    companyUrl: 'https://www.rentokil.com/',
    period: 'Jul 2021 - Aug 2023',
    description: [
      'Designed and implemented a dynamic statistics module using Highcharts for compelling, insightful data visualization.',
      'Led an upgrade of the product to the latest Angular version to keep it current and maintainable.',
      'Built administration modules essential for product management and user control.',
      'Improved responsiveness and usability across devices, including mobile.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative border-y border-border/70 bg-card/40">
      <div className="section-container">
        <div className="mb-12">
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-subtitle max-w-2xl">
            Over seven years across product and consulting roles, often working
            several engagements in parallel. Here's the recent work.
          </p>
        </div>

        <div className="space-y-5">
          {experienceItems.map((item, index) => (
            <div key={index} className="glass-card p-6 sm:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                    >
                      {item.company}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.company}</p>
                  )}
                </div>
                <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {item.period}
                  </span>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      Current
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {item.description.map((bullet, i) => (
                  <li
                    key={i}
                    className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/60"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
