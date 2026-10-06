import { FC, ReactNode } from 'react';
import { ClassNames } from '@/shared/model';

interface ContainerProps extends ClassNames {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ className, children }) => (
  <div className={`mx-auto max-w-7xl ${className}`}>{children}</div>
);
