import { Rating } from '@/entities/model';

export interface Game extends Rating {
  id: string;
  title: string;
  shortDescription: string;
  genre: string;
  publisher: string;
  developer: string;
  releaseDate: string;
}
