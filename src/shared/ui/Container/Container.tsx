import { createElement, FC, ReactNode } from 'react';
import { DefaultComponentProps } from '@/shared/model';
import { cn } from '@/shared/lib';

interface ContainerProps extends DefaultComponentProps {
  children: ReactNode;
  tagName?: 'div' | 'section';
}

export const Container: FC<ContainerProps> = ({
  tagName = 'div',
  className,
  children,
}) =>
  createElement(
    tagName,
    { className: cn('container mx-auto max-w-7xl', className) },
    children
  );
