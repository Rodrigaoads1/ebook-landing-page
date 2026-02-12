import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    slug?: string;
    article?: boolean;
}

export function SEOHelmet({ title, description, slug, article }: SEOProps) {
    useEffect(() => {
        const titleSuffix = ' | Migração Digital';
        document.title = title.endsWith(titleSuffix) || title.includes('Migração Digital') 
            ? title 
            : `${title}${titleSuffix}`;

        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', description);

        // Update Open Graph tags (basic implementation)
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);

        // JSON-LD for Local SEO and Articles
        const scriptId = 'json-ld-seo';
        let script = document.getElementById(scriptId) as HTMLScriptElement;
        if (script) {
            script.remove();
        }

        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';

        const businessData = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Migração Digital",
            "image": "https://www.migracaodigital.com/assets/rodrigo_analise_extra.png",
            "@id": "https://www.migracaodigital.com",
            "url": "https://www.migracaodigital.com",
            "telephone": "+5511999999999",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Estrategista Digital em Campo Grande",
                "addressLocality": "Campo Grande",
                "addressRegion": "RJ",
                "postalCode": "23000-000",
                "addressCountry": "BR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": -22.9035,
                "longitude": -43.5591
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
            }
        };

        const articleData = article ? {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": description,
            "author": {
                "@type": "Person",
                "name": "Rodrigo Rodrigues"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Migração Digital",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.migracaodigital.com/assets/rodrigo_analise_extra.png"
                }
            },
            "datePublished": "2026-02-06",
            "url": `https://www.migracaodigital.com/blog/${slug}`
        } : null;

        script.text = JSON.stringify(article ? [businessData, articleData] : businessData);
        document.head.appendChild(script);

    }, [title, description, slug, article]);

    return null;
}
