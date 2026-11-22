import { useState } from 'react';
import { Landmark } from 'lucide-react';

interface HeritageImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  fallbackTitle?: string;
}

export function HeritageImage({
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-[4/3]',
  fallbackTitle = 'Tư liệu Di sản Văn hóa Việt Nam',
}: HeritageImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#57243a] via-[#43192B] to-[#2A0F1B] text-[#FBF8F4] flex flex-col items-center justify-center p-6 text-center ${aspectClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <Landmark className="w-8 h-8 text-[#E2C285] mb-3" strokeWidth={1.5} />
        <p className="font-serif text-base font-medium text-[#FBF8F4] max-w-xs">
          {fallbackTitle}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EAE2D8] ${aspectClassName} ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out"
      />
    </div>
  );
}
