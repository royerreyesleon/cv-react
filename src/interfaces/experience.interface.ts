export interface Experience {
  id: number;
  company?: string;
  website?: string;
  department_es?: string;
  department_en?: string;
  position_es?: string;
  position_en?: string;
  description_es?: string;
  description_en?: string;
  start_date?: string;
  end_date?: string;
  status?: boolean;
  public?: boolean;
  is_remote?: boolean;
  tools: string[];
}
