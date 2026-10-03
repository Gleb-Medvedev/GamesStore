'use client'

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
} from '@/shared/ui/shadcn/combobox';
import { InputGroupAddon } from '@/shared/ui/shadcn/input-group';
import { GlobeIcon } from 'lucide-react';
import { SearchSelectOptionsList } from '@/shared/ui/SearchSelect/SearchSelectOptionsList';

export interface SearchSelectFlatValue {
  label: string;
  value: string | null | undefined;
}

export interface SearchSelectGroupValue {
  groupLabel: string;
  groupOptions: Array<SearchSelectFlatValue>;
}

export type SearchSelectOption<UseGroups extends boolean | undefined = false> =
  UseGroups extends true ? SearchSelectGroupValue : SearchSelectFlatValue;

export interface SearchSelectProps<
  Value extends SearchSelectFlatValue,
  UseGroups extends boolean | undefined = false,
> {
  options: Array<SearchSelectOption<UseGroups>>;
  useGroups?: UseGroups;
  value?: Value;
}

export function SearchSelect<
  Value extends SearchSelectFlatValue,
  UseGroups extends boolean | undefined = false,
>(props: SearchSelectProps<Value, UseGroups>) {
  const { value, options, useGroups } = props;

  return (
    <Combobox items={options}>
      <ComboboxInput placeholder="Select a timezone">
        <InputGroupAddon>
          <GlobeIcon />
        </InputGroupAddon>
      </ComboboxInput>
      <ComboboxContent alignOffset={-28} className="w-60">
        <ComboboxEmpty>No timezones found.</ComboboxEmpty>
        <SearchSelectOptionsList useGroups={useGroups} />
      </ComboboxContent>
    </Combobox>
  );
}
