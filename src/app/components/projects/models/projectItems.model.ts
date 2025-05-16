export interface ProjectItemsModel {
  title: string;
  description?: string;
  type: 'group' | 'link';
  link?: string;
  year?: number;
  image?: string;
  tags?: string[];
  subItems?: ProjectItemsModel[];
}
