import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/shared/ui/shadcn/tooltip';
import { FC, isValidElement } from 'react';
import { TooltipContainerProps } from './models/models';
import { cn } from '@/shared/lib';

export const TooltipContainer: FC<TooltipContainerProps> = ({
  children,
  tooltip,
  onDisabledTooltip,
  rootProps,
  triggerProps,
  contentProps,
}) => {
  if (!tooltip) return children;

  if (typeof tooltip === 'string' && !tooltip.trim()) return children;

  const isDisabled =
    isValidElement(children) && Boolean(children.props?.disabled);

  const shouldShowDisabledTooltip = isDisabled && !!onDisabledTooltip;

  const tooltipContent = shouldShowDisabledTooltip
    ? onDisabledTooltip
    : tooltip;

  const { className: tooltipClassNameProp, ...positionProps } =
    contentProps ?? {};

  // const tooltipContentClassNames = cn(
  //   shouldShowDisabledTooltip && 'text-[var(--destructive)]',
  //   tooltipClassNameProp,
  //   'bg-[var(--background)] text-[var(--foreground)]'
  // );

  return (
    <Tooltip {...rootProps}>
      <TooltipTrigger
        {...triggerProps}
        render={
          <span role="button" aria-disabled="true" className="inline-block">
            {children}
          </span>
        }
      />
      <TooltipContent {...positionProps}>
        {tooltipContent}
      </TooltipContent>
    </Tooltip>
  );
};
