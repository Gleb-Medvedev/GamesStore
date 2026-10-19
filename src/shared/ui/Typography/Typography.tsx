import { createElement, FC, ReactNode } from 'react';
import { DefaultComponentProps } from '@/shared/model';

export interface TypographyProps extends DefaultComponentProps {
  tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
  children: ReactNode;
}

export const Typography: FC<TypographyProps> = ({
  tagName,
  children,
  ...props
}) => {
  return createElement(tagName, props, children);
};
