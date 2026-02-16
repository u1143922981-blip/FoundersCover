
import { Article } from './types';
import { B2B_ARTICLES } from './articles_b2b';
import { PHASES_ARTICLES } from './articles_phases';
import { PRODUCTS_ARTICLES } from './articles_products';

export * from './types';

export const ARTICLES: Article[] = [
  ...B2B_ARTICLES,
  ...PHASES_ARTICLES,
  ...PRODUCTS_ARTICLES
];
