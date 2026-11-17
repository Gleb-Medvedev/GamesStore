import { Size } from '@/shared/model';

export const calculateIconSize = (size: Size | undefined): string => {
  switch (size) {
    case 'sm':
      return '1rem';
    case 'md':
      return '1.5rem';
    case 'lg':
      return '2rem';

    default:
      return '1rem';
  }
};
