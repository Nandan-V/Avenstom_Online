import React from 'react';
import { BarChart2 } from 'lucide-react';

interface LogoProps {
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isFooter = false }) => {
  return (
    <div className="flex items-center">
      <BarChart2 
        className={`h-8 w-8 ${isFooter ? 'text-secondary-400' : 'text-secondary-500'}`} 
      />
      <span 
        className={`ml-2 text-xl font-bold ${
          isFooter ? 'text-white' : 'text-gray-900'
        }`}
      >
        Avenstom
      </span>
    </div>
  );
};

export default Logo;