
import React from 'react';
import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'dark';
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ 
  variant = 'primary', 
  className = '' 
}) => {
  // Define different gradient variations
  const gradients = {
    primary: "bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-pink-900/20",
    secondary: "bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-purple-900/20",
    tertiary: "bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20",
    dark: "bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40",
  };

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Base gradient */}
      <div className={`absolute inset-0 ${gradients[variant]}`} />
      
      {/* Animated shapes */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"
        animate={{ 
          x: [50, 150, 50],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px]"
        animate={{ 
          x: [-50, -150, -50],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px]"
        animate={{ 
          x: [-100, 50, -100],
          y: [50, -50, 50],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 22, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      {/* Grid overlay pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNCAyaDR2MWgtNHYtMXptMi0yaDF2NWgtMXYtNXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
    </div>
  );
};

export default GradientBackground;
