import type { Category } from './category.interface';
import type { File } from './file.interface';

export interface Portfolio {
  id?: number;
  name_es?: string;
  name_en?: string;
  description_es?: string;
  description_en?: string;
  link?: null | string;
  start_date?: string | null;
  end_date?: null;
  status?: number;
  category_id?: number;
  portfolio_files?: File[];
  category?: Category;
  databases?: { item: string }[];
  languages?: { item: string }[];
  tools?: { item: string }[];
}
