import React from 'react';
import { Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  companyUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Saeed was the sole frontend engineer on Edge Node and delivered a complex analytics platform from scratch. The multi-chart tooling he built genuinely changed how our analysts read sensor data.',
    name: 'Paolo Zucchini',
    role: 'Engineering Manager',
    company: 'Guided Ultrasonics Limited',
    companyUrl: 'https://www.guided-ultrasonics.com/',
  },
  {
    quote:
      'He turned rough ideas from us doctors into a polished learning platform, translating clinical requirements into features that just worked. The AI-generated quizzes and customisable study plans quickly became a favourite with our students, and he stayed involved well beyond the code.',
    name: 'Dr. med. Andreas Kremer',
    role: 'Co-Founder',
    company: 'MediKnow',
    companyUrl: 'https://mediknow.io/',
  },
  {
    quote:
      'Saeed rebuilt our statistics module and led the Angular upgrade with very little hand-holding. Reliable, thoughtful, and always focused on what the end users actually needed.',
    name: 'Max Arronsson',
    role: 'Chief IT Officer',
    company: 'Nomor AB (Now Rentokil)',
    companyUrl: 'https://www.rentokil.com/',
  },
];

const initials = (name: string) =>
  name
    .split(' ')
    .filter((part) => !part.endsWith('.'))
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative">
      <div className="section-container">
        <div className="mb-12">
          <p className="eyebrow mb-3">Testimonials</p>
          <h2 className="section-title">What people say</h2>
          <p className="section-subtitle max-w-2xl">
            A few words from the teams and founders I have worked with across
            product and consulting engagements.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <figure key={index} className="glass-card flex flex-col p-6">
              <Quote className="h-6 w-6 text-brand/70" />
              <blockquote className="mt-4 flex-grow text-sm leading-relaxed text-muted-foreground">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-sm font-semibold text-brand">
                  {initials(item.name)}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">
                    {item.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {item.role},{' '}
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
