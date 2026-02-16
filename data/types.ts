
export interface Article {
    slug: string;
    title: string;
    category: string;
    type: string; // guide | checklist | template | expert-insight
    excerpt: string;
    readingTime: string;
    updatedAt: string;
    author: string;
    heroTag: string;
    primaryKeyword?: string;
    secondaryKeywords?: string[];
    content: string; // HTML string for content
    seo: {
        metaTitle: string;
        metaDescription: string;
        canonical?: string;
        ogImage?: string;
    };
}
