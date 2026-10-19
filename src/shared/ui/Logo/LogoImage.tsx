'use client';

import Image from 'next/image';
import logoPath from './logo.png';
import { FC } from 'react';
import { DefaultComponentProps } from '@/shared/model';
import Link from 'next/link';

interface LogoImageProps extends DefaultComponentProps {
  width?: number;
}

export const LogoImage: FC<LogoImageProps> = ({ width = 64, ...props }) => (
  <Link href={'/'} title={'Вернуться на главную страницу'}>
    <Image
      className={'aspect-64/36'}
      src={logoPath}
      alt={'Логотип компании'}
      width={width}
      {...props}
    />
  </Link>
);
