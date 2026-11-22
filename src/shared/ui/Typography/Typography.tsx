import { createElement, FC, ReactNode } from 'react';
import { BaseComponentProps } from '@/shared/model';

interface TypographyProps extends BaseComponentProps {
  tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'article';
  children: ReactNode;
}

export const Typography: FC<TypographyProps> = ({
  tagName,
  children,
  ...props
}) => {
  return createElement(tagName, props, children);
};
