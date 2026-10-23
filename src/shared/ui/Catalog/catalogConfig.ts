export interface CatalogItem {
  label: string;
  // navLink: string;
  items: Array<CatalogItem> | null;
}

export const catalogConfig: Array<CatalogItem> = [
  {
    label: 'Консоли',
    items: [
      {
        label: 'Playstation (PS)',
        items: [
          {
            label: 'Playstation 4 (PS4)',
            items: [
              {
                label: 'PS4 PRO',
                items: null,
              },
              {
                label: 'PS4 SLIM',
                items: null,
              },
              {
                label: 'PS4 FAT',
                items: null,
              },
            ],
          },
          {
            label: 'Playstation 5 (PS5)',
            items: [
              {
                label: 'PS5 PRO',
                items: null,
              },
              {
                label: 'PS5 SLIM',
                items: null,
              },
              {
                label: 'PS5 FAT',
                items: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Аксессуары для консолей',
    items: [
      {
        label: 'Для консолей Playstation (PS)',
        items: [
          {
            label: 'Геймпады',
            items: [
              {
                label: 'Чехлы',
                items: null,
              },
              {
                label: 'Накладки для стиков',
                items: null,
              },
            ],
          },
          {
            label: 'Подставки',
            items: null,
          },
        ],
      },
    ],
  },
];
