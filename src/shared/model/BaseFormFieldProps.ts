import { BaseComponentProps } from '@/shared/model/BaseComponentProps';
import { ComponentProps } from 'react';

type AvailableFormFieldTypes = 'button' | 'input' | 'select' | 'textarea';

type InheritedFormFieldProps<CT extends AvailableFormFieldTypes> = Pick<
  ComponentProps<CT>,
  'disabled' | 'onFocus' | 'onBlur' | 'onClick' | 'onChange' | 'value'
>;

type ComponentTypeCompiledProps<CT extends AvailableFormFieldTypes> = CT extends 'button'
  ? Omit<InheritedFormFieldProps<CT>, 'value'>
  : InheritedFormFieldProps<CT> & { error?: boolean };

export type BaseFormFieldProps<CT extends AvailableFormFieldTypes> =
  BaseComponentProps & ComponentTypeCompiledProps<CT>;
