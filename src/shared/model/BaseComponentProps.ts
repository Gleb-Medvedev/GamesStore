import { AriaAttributes, AriaRole, ReactNode } from 'react';

type InheritedAriaAttributes = Pick<
  AriaAttributes,
  | 'aria-hidden'
  | 'aria-disabled'
  | 'aria-expanded'
  | 'aria-haspopup'
  | 'aria-checked'
  | 'aria-current'
>;

export type BaseComponentProps = InheritedAriaAttributes & {
  className?: string;
  role?: AriaRole;
  tooltip?: ReactNode;
};
