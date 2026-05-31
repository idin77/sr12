
import type React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <img 
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SR12_Logo.jpg-Jat64Q4j4j3YgX5kY4kG4o4gQ4o4gQ4o4gQ4o4gQ4o4gQ.jpeg" 
        alt="SR12 Herbal Skincare Logo" 
        className="w-full h-auto"
      />
    </div>
  );
};
