import type { Skill } from './skill.interface';
import type { Type } from './type.interface';

export interface Category {
  id?: number;
  name_es?: string;
  name_en?: string;
  order?: number;
  status?: number;
  type_id?: number;
  type?: Type;
  skills?: Skill[];
  dynamic?: boolean;
}
