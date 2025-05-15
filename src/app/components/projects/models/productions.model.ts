export interface ProductionsModel {
  title: string;
  description: string;
  type: 'expo' | 'tattoo' | 'dev' | 'édition' | string;
  link?: string;
  image?: string;
  tags?: string[];
  year: number;
}
