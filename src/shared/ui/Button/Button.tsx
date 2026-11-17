import { ComponentProps, ComponentType, forwardRef } from 'react';
import { DefaultComponentProps, Size } from '@/shared/model';
import { calculateIconSize } from './calculateIconSize';
import { cn } from '@/shared/lib';

type BaseSvgProps = ComponentProps<'svg'>;

type SlotProps = Pick<DefaultComponentProps, 'className'>;

type IconSlotProps = BaseSvgProps & {
  size?: Size;
  iconOrder?: 'iconFirst' | 'textFirst';
};

type BaseButtonProps = Pick<
  ComponentProps<'button'>,
  'type' | 'onClick' | 'disabled'
> &
  DefaultComponentProps & {
    text: string;
  };

type ButtonWithIconProps = BaseButtonProps & {
  icon: ComponentType<BaseSvgProps>;
  slotProps?: {
    text?: SlotProps;
    icon?: IconSlotProps;
  };
};

type ButtonWithoutIconProps = BaseButtonProps & {
  icon?: never;
  slotProps?: {
    text?: SlotProps;
    icon?: never;
  };
};

type ButtonProps = ButtonWithIconProps | ButtonWithoutIconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      text,
      icon: Icon,
      type = 'button',
      disabled,
      slotProps = {},
      className,
      ...restProps
    } = props;

    const { text: textSlot, icon: iconSlot } = slotProps;

    const {
      size,
      iconOrder,
      className: iconClassName,
      style: iconStyle,
      ...restIconProps
    } = iconSlot ?? {};

    const iconSize = calculateIconSize(size);

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          'flex cursor-pointer items-center justify-center gap-1 rounded-sm border px-2 py-1',
          className
        )}
        {...restProps}
      >
        {Icon && (
          <Icon
            aria-hidden="true"
            className={cn(
              'block aspect-square',
              iconOrder === 'textFirst' && 'order-last',
              iconClassName
            )}
            style={{ width: iconSize, height: iconSize, ...iconStyle }}
            {...restIconProps}
          />
        )}
        <span {...(textSlot ?? {})}>{text}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
