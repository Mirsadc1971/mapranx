import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export default function Logo({ size = 'md', showTagline = false }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-5xl'
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <div className={`${iconSizes[size]} bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg`}>
          <span className="text-white font-bold">MR</span>
        </div>
        <div className={`font-bold ${sizeClasses[size]} flex items-baseline`}>
          <span className="text-gray-900">MapRan</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-[1.3em] font-black transform -skew-x-12">X</span>
        </div>
      </div>
      {showTagline && (
        <p className="text-sm text-gray-600 mt-2 font-medium">
          Local SEO Software — with an <span className="font-black text-purple-600">X</span>
        </p>
      )}
    </div>
  );
}