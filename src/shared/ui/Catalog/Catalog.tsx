'use client'

import { Menubar } from '../shadcn/menubar';
import { catalogConfig } from '../Catalog/catalogConfig';
import { buildCatalog } from '../Catalog/utils/buildCatalogMenu';

export const Catalog = () => {
  return (
    <Menubar >{catalogConfig.map((item) => buildCatalog(item, true))}</Menubar>
  );
};
