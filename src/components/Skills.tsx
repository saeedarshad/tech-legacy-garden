import React, { useEffect, useRef } from 'react';

type Skill = {
  name: string;
  level: number; // 1-100
  icon: string;
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const frontendSkills: Skill[] = [
    { name: "Angular", level: 90, icon: "devicon-angularjs-plain" },
    { name: "TypeScript", level: 85, icon: "devicon-typescript-plain" },
    { name: "HTML5/CSS3", level: 90, icon: "devicon-html5-plain" },
    { name: "JavaScript", level: 85, icon: "devicon-javascript-plain" },
    { name: "SCSS/SASS", level: 80, icon: "devicon-sass-original" }
  ];

  const backendSkills: Skill[] = [
    { name: "Python", level: 95, icon: "devicon-python-plain" },
    { name: "Django", level: 90, icon: "devicon-django-plain" },
    { name: "PostgreSQL", level: 85, icon: "devicon-postgresql-plain" },
    { name: "RESTful APIs", level: 90, icon: "devicon-nodejs-plain" },
    { name: "Docker", level: 75, icon: "devicon-docker-plain" }
  ];

  const otherSkills: string[] = [
    "Git/GitHub", "CI/CD", "Agile/Scrum", "Unit Testing", "System Design", 
    "AWS", "Performance Optimization", "Team Leadership"
  ];

  useEffect(() => {
    // Add the devicon stylesheet to the document head
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(link);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.animate-on-scroll');
            children.forEach((child, index) => {
              (child as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
              child.classList.add('animate-fade-in');
            });

            // After a delay, animate the skill bars
            setTimeout(() => {
              const bars = entry.target.querySelectorAll('.skill-bar-progress');
              bars.forEach((bar) => {
                (bar as HTMLElement).style.width = bar.getAttribute('data-width') || '0%';
              });
            }, 500);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll opacity-0">Skills & Expertise</h2>
          <p className="section-subtitle animate-on-scroll opacity-0 max-w-2xl mx-auto">
            My technical skills and areas of expertise developed over 6+ years in software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Frontend Skills */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">Frontend</span>
              <div className="h-px flex-grow bg-border"></div>
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <i className={`${skill.icon} text-xl mr-2`}></i>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="skill-bar-progress h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      data-width={`${skill.level}%`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">Backend</span>
              <div className="h-px flex-grow bg-border"></div>
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <i className={`${skill.icon} text-xl mr-2`}></i>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="skill-bar-progress h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      data-width={`${skill.level}%`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Skills */}
        <div className="mt-16 animate-on-scroll opacity-0">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="mr-2">Other Skills</span>
            <div className="h-px flex-grow bg-border"></div>
          </h3>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
