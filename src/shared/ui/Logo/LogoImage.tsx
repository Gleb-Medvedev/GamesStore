import Image from 'next/image';
import logoPath from './logoImage.png';
import { FC } from 'react';
import { BaseComponentProps } from '@/shared/model';
import Link from 'next/link';

interface LogoImageProps extends BaseComponentProps {
  width?: number;
}

export const LogoImage: FC<LogoImageProps> = ({ width = 64, ...props }) => (
  <Link href={'/'} title={'Вернуться на главную страницу'} className={'inline-block'}>
    <Image
      className={'aspect-64/36'}
      src={logoPath}
      alt={'Логотип компании'}
      width={width}
      {...props}
    />
  </Link>
);
