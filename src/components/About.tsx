
import React, { useEffect, useRef } from 'react';
import { Code, Users, Layers } from 'lucide-react';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const experienceItems: ExperienceItem[] = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Leading development of enterprise applications using Python/Django and Angular. Managing a team of 5 developers and coordinating with stakeholders to deliver high-quality solutions."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2018 - 2020",
      description: "Developed and maintained multiple web applications using Django and Angular. Implemented RESTful APIs and optimized database performance for high-traffic applications."
    },
    {
      title: "Junior Developer",
      company: "Web Development Studio",
      period: "2017 - 2018",
      description: "Contributed to the development of responsive web applications. Worked on frontend implementation using HTML, CSS, JavaScript and Angular."
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
            I'm a passionate software engineer focused on creating elegant, efficient solutions to complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Personal Info */}
          <div className="md:col-span-5">
            <div className="glass-card rounded-xl p-8 animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-6">
                With 6 years of experience in software development, I've cultivated expertise in Python/Django and Angular ecosystems. My passion lies in building scalable applications that solve real-world problems efficiently.
              </p>
              <p className="text-muted-foreground mb-6">
                I thrive in collaborative environments where I can lead teams, mentor junior developers, and work closely with stakeholders to deliver exceptional software solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold">Location:</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
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
                    {index === 0 ? (
                      <Layers size={16} />
                    ) : index === 1 ? (
                      <Code size={16} />
                    ) : (
                      <Users size={16} />
                    )}
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
