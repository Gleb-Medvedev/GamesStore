import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';
import { ReactElement, ReactNode } from 'react';

type RootTooltipProps = Pick<
  TooltipPrimitive.Root.Props,
  'disableHoverablePopup' | 'trackCursorAxis'
>;

type TooltipTriggerProps = Pick<
  TooltipPrimitive.Trigger.Props,
  'delay' | 'closeDelay' | 'closeOnClick' | 'className'
>;

type TooltipContentProps = Pick<
  TooltipPrimitive.Positioner.Props,
  'align' | 'alignOffset' | 'side' | 'sideOffset' | 'className'
>;

export type TooltipContainerProps = {
  children: ReactElement<{ disabled?: boolean }>;
  tooltip: ReactNode;
  onDisabledTooltip?: ReactNode;
  rootProps?: RootTooltipProps;
  triggerProps?: TooltipTriggerProps;
  contentProps?: TooltipContentProps;
};