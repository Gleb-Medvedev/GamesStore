import { CatalogItem } from '@/shared/ui/Catalog/catalogConfig';
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '../../shadcn/menubar';

export const renderItems = (items: Array<CatalogItem>) => {
  return items.map((item) => buildCatalog(item, false));
};

export const buildCatalog = (
  { items, label }: CatalogItem,
  isRoot: boolean = false
) => {
  const hasChildren = Boolean(items?.length);

  if (isRoot) {
    return (
      <MenubarMenu key={label}>
        <MenubarTrigger onClick={() => console.log(label)}>{label}</MenubarTrigger>
        {hasChildren && <MenubarContent>{renderItems(items!)}</MenubarContent>}
      </MenubarMenu>
    );
  }

  return hasChildren ? (
    <MenubarSub key={label}>
      <MenubarSubTrigger onClick={() => console.log(label)}>{label}</MenubarSubTrigger>
      <MenubarSubContent>{renderItems(items!)}</MenubarSubContent>
    </MenubarSub>
  ) : (
    <MenubarItem key={label} onClick={() => console.log(label)}>{label}</MenubarItem>
  );
};
