import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  priority = false,
  sizes = "100vw"
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate WebP and AVIF versions if using Unsplash
  const getOptimizedSrc = (originalSrc: string, format: 'webp' | 'avif' = 'webp') => {
    if (originalSrc.includes('unsplash.com')) {
      const url = new URL(originalSrc);
      url.searchParams.set('fm', format);
      url.searchParams.set('q', '80');
      if (width) url.searchParams.set('w', width.toString());
      if (height) url.searchParams.set('h', height.toString());
      return url.toString();
    }
    return originalSrc;
  };

  const webpSrc = getOptimizedSrc(src, 'webp');
  const avifSrc = getOptimizedSrc(src, 'avif');

  return (
    <picture>
      {/* Modern formats first */}
      <source srcSet={avifSrc} type="image/avif" sizes={sizes} />
      <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
      
      {/* Fallback */}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />
      
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}
          style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : 'auto',
            aspectRatio: width && height ? `${width}/${height}` : undefined,
          }}
        >
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
    </picture>
  );
}