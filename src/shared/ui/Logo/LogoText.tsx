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
      className={cn(`w-min text-2xl/[2.25rem]`, className)}
    >
      Магазин
    </Typography>
  );
};
