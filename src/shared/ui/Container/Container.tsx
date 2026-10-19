import { FC, ReactNode } from 'react';
import { DefaultComponentProps } from '@/shared/model';

interface ContainerProps extends DefaultComponentProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ className, children }) => (
  <div className={`container mx-auto max-w-7xl ${className}`}>{children}</div>
);
