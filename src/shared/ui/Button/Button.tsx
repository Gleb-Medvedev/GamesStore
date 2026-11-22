import { forwardRef, ReactNode } from 'react';
import { BaseFormFieldProps } from '@/shared/model';
import { cn } from '@/shared/lib';

type ButtonProps = BaseFormFieldProps<'button'> & {
  children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, className, disabled, ...baseProps } = props;

    return (
      <button
        ref={ref}
        {...baseProps}
        disabled={disabled}
        className={cn(
          'flex items-center justify-center rounded-sm border px-2 py-1',
          className,
          disabled ? 'text-[var(--muted-foreground)]' : null,
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
