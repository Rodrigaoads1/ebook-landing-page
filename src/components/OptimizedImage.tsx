import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className = '',
    width,
    height
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Intersection Observer for lazy loading
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '50px', // Start loading 50px before entering viewport
                threshold: 0.01
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // Generate WebP and fallback URLs
    const getOptimizedUrl = (url: string, format: 'webp' | 'jpg' = 'webp') => {
        // For Unsplash images, add format parameter
        if (url.includes('unsplash.com')) {
            const separator = url.includes('?') ? '&' : '?';
            return `${url}${separator}fm=${format}&q=80`;
        }
        return url;
    };

    // Generate srcset for responsive images
    const getSrcSet = (url: string, format: 'webp' | 'jpg' = 'webp') => {
        if (url.includes('unsplash.com')) {
            const baseUrl = getOptimizedUrl(url, format);
            return `
                ${baseUrl}&w=400 400w,
                ${baseUrl}&w=800 800w,
                ${baseUrl}&w=1200 1200w,
                ${baseUrl}&w=1600 1600w,
                ${baseUrl}&w=2000 2000w
            `.trim();
        }
        return undefined;
    };

    return (
        <picture ref={imgRef as any}>
            {/* WebP version with srcset */}
            {isInView && (
                <source
                    type="image/webp"
                    srcSet={getSrcSet(src, 'webp')}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            )}

            {/* Fallback JPG with srcset */}
            {isInView && (
                <source
                    type="image/jpeg"
                    srcSet={getSrcSet(src, 'jpg')}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            )}

            {/* Actual img element */}
            <img
                src={isInView ? getOptimizedUrl(src, 'jpg') : ''}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
                className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
                onLoad={() => setIsLoaded(true)}
                style={{
                    backgroundColor: '#f5f5f5', // Placeholder color
                }}
            />

            {/* Loading skeleton */}
            {!isLoaded && isInView && (
                <div
                    className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
                    style={{
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 1.5s infinite'
                    }}
                />
            )}

            <style>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>
        </picture>
    );
};
