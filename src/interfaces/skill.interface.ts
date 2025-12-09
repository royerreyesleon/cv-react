import type { Category } from './category.interface';

export interface Skill {
  id?: number;
  name_es?: string;
  name_en?: string;
  icon?: string;
  percentage?: number;
  status?: number;
  category_id?: Category;
}
