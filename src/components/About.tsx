
import React, { useEffect, useRef } from 'react';
import { Code, Users, Layers, Cloud, Brain } from 'lucide-react';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  icon?: React.ReactNode;
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const experienceItems: ExperienceItem[] = [
    {
      title: "Senior/Lead Software Engineer",
      company: "Ignis Health",
      period: "Jan 2019 - Present",
      description: "Created a dynamic Angular-based editor allowing users to modify interfaces and save configurations. Integrated ChatGPT for automated summaries of Telehealth notes. Deployed Sentry for error monitoring and Celery for task management, boosting user satisfaction by 30%. Mentored junior team members, improving code quality and team productivity by 30%.",
      icon: <Brain size={16} />
    },
    {
      title: "Senior Software Engineer (Python/Django/Angular)",
      company: "Medi Know",
      period: "Dec 2024 - Present",
      description: "Developing B2B Licensing features for a medical education platform, collaborating with doctor-founders. Integrated UI improvements in Angular and optimized Django querysets for significant performance gains.",
      icon: <Code size={16} />
    },
    {
      title: "Senior Software Engineer - Angular (Consultant)",
      company: "Nomor AB",
      period: "Jul 2021 - Aug 2023",
      description: "Designed and implemented a dynamic statistics module using Highcharts. Upgraded the product's Angular framework to the latest version. Enhanced development processes and improved coding techniques. Developed administration modules and upgraded UI for mobile responsiveness.",
      icon: <Layers size={16} />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((element, index) => {
              (element as HTMLElement).style.animationDelay = `${0.2 * index}s`;
              element.classList.add('animate-fade-in');
            });
            // Only unobserve if all elements have been animated
            observer.unobserve(entry.target);
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
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll opacity-0">About Me</h2>
          <p className="section-subtitle animate-on-scroll opacity-0 max-w-2xl mx-auto">
            I'm Saeed Arshad, a passionate software engineer focused on creating elegant, AI-powered solutions to complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Personal Info */}
          <div className="md:col-span-5">
            <div className="glass-card rounded-xl p-8 animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-6">
                With 6 years of experience in software development, I've cultivated expertise in Python/Django, Angular, AWS cloud services, and AI/ML technologies. My passion lies in building scalable, intelligent applications that solve real-world problems efficiently.
              </p>
              <p className="text-muted-foreground mb-6">
                I specialize in developing AI-powered solutions that leverage the full potential of cloud infrastructure. My experience includes building machine learning pipelines, implementing NLP systems, and deploying scalable applications on AWS.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold">Location:</h4>
                  <p className="text-muted-foreground">Remote</p>
                </div>
                <div>
                  <h4 className="font-semibold">Experience:</h4>
                  <p className="text-muted-foreground">6+ Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="md:col-span-7">
            <h3 className="text-2xl font-bold mb-6 animate-on-scroll opacity-0">Work Experience</h3>
            <div className="space-y-6">
              {experienceItems.map((item, index) => (
                <div 
                  key={index}
                  className="relative glass-card rounded-xl p-6 pl-8 animate-on-scroll opacity-0"
                >
                  <div className="absolute top-6 left-[-16px] w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    {item.icon || <Users size={16} />}
                  </div>
                  <div className="mb-1 flex justify-between items-center">
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{item.company}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
