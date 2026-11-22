import { createElement, FC, ReactNode } from 'react';
import { BaseComponentProps } from '@/shared/model';
import { cn } from '@/shared/lib';

interface ContainerProps extends BaseComponentProps {
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
    { className: cn('container mx-auto max-w-7xl px-4', className) },
    children
  );
