import { NavigationLinkConfig } from '@/widgets/Header/models/NavigationLinksConfig';

export const navigationLinks: Readonly<Array<NavigationLinkConfig>> = [
  {
    title: 'О нас',
    href: '/about',
  },
  {
    title: 'Контакты',
    href: '/contact',
  },
  {
    title: 'Войти',
    href: '/login',
  },
];
