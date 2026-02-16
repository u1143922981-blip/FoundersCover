
export interface Step {
  id: number;
  question: string;
  description?: string;
  options: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Module {
  title: string;
  category: 'Must-have' | 'Nice-to-have' | 'Later';
  description: string;
}

export interface StartupSegment {
  title: string;
  description: string;
  image: string;
}
