import { Typography } from '@/shared/ui/Typography';
import { DefaultComponentProps } from '@/shared/model';
import { FC } from 'react';
import { cn } from '@/shared/lib';

export const LogoText: FC<DefaultComponentProps> = ({
  title = 'Логотип',
  className,
}) => {
  return (
    <Typography
      tagName={'span'}
      title={title}
      className={cn(`w-min text-2xl/[1.5rem] font-bold text-[var(--brand-orange)]`, className)}
    >
      Магазин
    </Typography>
  );
};
