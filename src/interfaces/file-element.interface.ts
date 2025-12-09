import type { File } from './file.interface';

export interface PortfolioFile {
  id?: number;
  portfolio_id?: number;
  file_id?: number;
  order?: number;
  status?: number;
  files: File;
}
