
import React, { useEffect, useRef } from 'react';
import { Code, Users, Layers, Cloud, Brain } from 'lucide-react';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string[];  // Changed from string to string[] to support bullet points
  icon?: React.ReactNode;
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const experienceItems: ExperienceItem[] = [
    {
      title: "Senior/Lead Software Engineer",
      company: "Ignis Health",
      period: "Jan 2019 - Present",
      description: [
        "Created a dynamic Angular-based editor allowing users to change the interface from the application itself and save configurations, with an editor on the left panel and live site preview on the right side.",
        "Integrated ChatGPT-Turbo3.5 to provide automated summaries of Telehealth service notes, streamlining information retrieval for users.",
        "Integrated Google Analytics, Mailchimp, Stripe, and Klaviyo, enhancing site functionality and user engagement; drove a 25% increase in customer retention and boosted transactional efficiency by 40%.",
        "Deployed Sentry in Angular project for real-time error monitoring, cutting bug detection time by 50%, and leveraged Celery for task management, ensuring seamless application performance and boosting user satisfaction rate by 30%.",
        "Mentored junior team members by providing guidance on best practices, conducting code reviews, and offering professional development opportunities, resulting in a 30% improvement in code quality and team productivity."
      ],
      icon: <Brain size={16} />
    },
    {
      title: "Senior Software Engineer (Python/Django/Angular)",
      company: "Medi Know",
      period: "Dec 2024 - Present",
      description: [
        "Senior Full Stack Developer at Medi Know, an education platform for medical students in Germany, collaborating closely with doctor-founders to gather and implement requirements.",
        "Developing key B2B Licensing features, improving platform capabilities and enabling efficient management for business clients.",
        "Integrated picture zoom controls and performed multiple UI/UX improvements in Angular to elevate the user experience.",
        "Optimized Django querysets to significantly improve database efficiency and system performance."
      ],
      icon: <Code size={16} />
    },
    {
      title: "Senior Software Engineer - Angular (Consultant)",
      company: "Nomor AB",
      period: "Jul 2021 - Aug 2023",
      description: [
        "Responsible for designing and implementing a dynamic statistics module for the product. This module will utilize Highcharts to provide visually compelling and insightful data representation.",
        "Upgrading the product's Angular framework to the latest version. This upgrade is crucial for ensuring that the product remains technologically current and takes advantage of the most recent features and enhancements.",
        "Responsibilities is to enhance the overall development process and improve coding techniques. By doing so, they aim to optimize efficiency and raise the standard of code quality within the development team.",
        "Played a pivotal role in developing administration modules. These modules are essential for effective product management and user control, ensuring the product's functionality meets administrative needs.",
        "Upgrade is focused on making the UI more user-friendly and ensuring it is responsive across various devices, including mobile platforms."
      ],
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
                  
                  {/* Changed: Display description as bullet points instead of paragraph */}
                  <ul className="text-sm list-disc ml-4 space-y-1">
                    {item.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
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
