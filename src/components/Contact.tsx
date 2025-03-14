
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.animate-on-scroll');
            children.forEach((child, index) => {
              (child as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
              child.classList.add('animate-fade-in');
            });
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
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll opacity-0">Get In Touch</h2>
          <p className="section-subtitle animate-on-scroll opacity-0 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Contact Information */}
          <div className="md:col-span-5 animate-on-scroll opacity-0">
            <div className="glass-card rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      San Francisco, California, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7 animate-on-scroll opacity-0">
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/40 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/40 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/40 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/40 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 ${
                  submitStatus === 'success' 
                    ? 'bg-green-600 text-white' 
                    : submitStatus === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-primary text-primary-foreground'
                } font-medium rounded-md transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100`}
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <Send className={`h-5 w-5 ${submitStatus === 'idle' ? 'mr-2' : ''}`} />
                )}
                {submitStatus === 'idle' && (isSubmitting ? 'Sending...' : 'Send Message')}
                {submitStatus === 'success' && 'Message Sent!'}
                {submitStatus === 'error' && 'Error Sending!'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
