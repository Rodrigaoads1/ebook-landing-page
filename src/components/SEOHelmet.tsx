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

        // Update Canonical Tag to fix Google Search Console duplicates
        const pageUrl = slug ? `https://migracaodigital.com/blog/${slug}` : `https://migracaodigital.com${window.location.pathname}`;
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', pageUrl);

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', pageUrl);

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
            "name": "Agência Migração Digital",
            "image": "https://migracaodigital.com/logo.png",
            "@id": "https://migracaodigital.com/#organization",
            "url": "https://migracaodigital.com",
            "telephone": "+5521979043854",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Campo Grande / Santíssimo",
                "addressLocality": "Rio de Janeiro",
                "addressRegion": "RJ",
                "postalCode": "23000-000",
                "addressCountry": "BR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": -22.8715,
                "longitude": -43.5292
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
                "name": "Agência Migração Digital",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://migracaodigital.com/logo.png"
                }
            },
            "datePublished": "2026-02-06",
            "url": pageUrl
        } : null;

        script.text = JSON.stringify(article ? [businessData, articleData] : businessData);
        document.head.appendChild(script);

    }, [title, description, slug, article]);

    return null;
}
