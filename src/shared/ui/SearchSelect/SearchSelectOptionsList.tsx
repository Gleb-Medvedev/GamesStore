import {
  ComboboxCollection,
  ComboboxGroup,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from '@/shared/ui/shadcn/combobox';

export function SearchSelectOptionsList({
  useGroups,
}: {
  useGroups: boolean | undefined;
}) {
  return (
    <ComboboxList>
      {(group, groupIndex) =>
        useGroups ? (
          <ComboboxGroup key={group.groupLabel} items={group.groupOptions}>
            <ComboboxLabel>{group.groupLabel}</ComboboxLabel>
            <ComboboxCollection>
              {(item, itemIndex) => (
                <ComboboxItem
                  key={`${groupIndex}/${itemIndex}`}
                  value={item.value}
                >
                  {item.label}
                </ComboboxItem>
              )}
            </ComboboxCollection>
          </ComboboxGroup>
        ) : (
          <ComboboxItem key={group.value} value={group.value}>
            {group.label}
          </ComboboxItem>
        )
      }
    </ComboboxList>
  );
}
