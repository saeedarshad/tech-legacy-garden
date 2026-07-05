import React from 'react';

type BackgroundProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

// Calm, static background. A thin accent line at the very top and a faint
// masked grid, no animation, no particles. Kept as a named component so
// existing imports keep working, but renders a quiet, professional backdrop.
const AIAnimatedBackground: React.FC<BackgroundProps> = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-background">
      {/* Thin brand accent line at the very top */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, hsl(var(--brand) / 0.6), transparent)',
        }}
      />
      {/* Faint blueprint grid across the whole page */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(30 12% 100% / 0.028) 1px, transparent 1px), linear-gradient(90deg, hsl(30 12% 100% / 0.028) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      {/* Faint warm dot field across the whole page */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(hsl(var(--brand) / 0.08) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          backgroundPosition: '28px 28px',
        }}
      />
      {/* Denser, brighter grid + dots concentrated behind the hero for depth */}
      <div
        className="absolute inset-x-0 top-0 h-screen"
        style={{
          backgroundImage:
            'linear-gradient(hsl(30 12% 100% / 0.045) 1px, transparent 1px), linear-gradient(90deg, hsl(30 12% 100% / 0.045) 1px, transparent 1px), radial-gradient(hsl(var(--brand) / 0.16) 1.2px, transparent 1.2px)',
          backgroundSize: '56px 56px, 56px 56px, 56px 56px',
          backgroundPosition: '0 0, 0 0, 28px 28px',
          maskImage:
            'radial-gradient(75% 65% at 50% 0%, black 0%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(75% 65% at 50% 0%, black 0%, transparent 78%)',
        }}
      />
    </div>
  );
};

export default AIAnimatedBackground;
