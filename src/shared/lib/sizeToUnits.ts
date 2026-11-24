import { Size } from '@/shared/model';

const SIZES: Record<Size, number> = { sm: 1, md: 1.5, lg: 2 };

export const sizeToUnits = (size?: Size) => {
  const val = SIZES[size ?? 'sm'];
  return { withUnits: `${val}rem`, withoutUnits: val };
};
