import { NavigationLinkConfig } from '@/widgets/Header/models/NavigationLinksConfig';

export const navigationLinks: Readonly<Array<NavigationLinkConfig>> = [
  {
    title: 'О нас',
    href: '/about',
  },
  {
    title: 'Услуги',
    href: '/services',
  },
  {
    title: 'Оплата',
    href: '/payment',
  },
  {
    title: 'Контакты',
    href: '/contact',
  },
];
