'use client';

import { navigationLinks } from '@/widgets/Header/config/navigationLinksConfig';
import Link from 'next/link';
import styles from './HeaderNavigation.module.scss';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/lib';

export const HeaderNavigation = () => {
  const pathName = usePathname();

  return (
    <ul className={'flex flex-nowrap gap-12'}>
      {navigationLinks.map(({ href, title }) => (
        <li
          key={title}
          className={cn(styles.listItem, {
            [styles._activeLink]: pathName?.includes(href),
          })}
        >
          <Link
            key={title}
            href={href}
            className={'block leading-6 font-semibold'}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
