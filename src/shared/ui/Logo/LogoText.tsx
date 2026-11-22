import { BaseComponentProps } from '@/shared/model';
import { FC } from 'react';
import { cn } from '@/shared/lib';
import Link from 'next/link';
import { TooltipContainer } from '@/shared/ui/TooltipContainer/TooltipContainer';

export const LogoText: FC<BaseComponentProps> = (props) => {
  const { tooltip, className, ...rest } = props;

  return (
    <TooltipContainer tooltip={tooltip}>
      <h2 className={'text-3xl'} {...rest}>
        <Link
          href={'/'}
          className={cn(
            `inline-block w-min bg-[image:var(--brand-orange_gradient)] bg-clip-text font-bold text-nowrap text-transparent`,
            className
          )}
        >
          GAMES STORE
        </Link>
      </h2>
    </TooltipContainer>
  );
};
