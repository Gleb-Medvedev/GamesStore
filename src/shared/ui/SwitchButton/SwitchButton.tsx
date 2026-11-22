import { BaseComponentProps, Orientation } from '@/shared/model';
import { FC, ReactNode } from 'react';
import { calculateClassNames } from './utils/calculateClassNames';

interface SwitchButtonProps extends BaseComponentProps {
  isToggled: boolean;
  toggledSlot: ReactNode;
  hiddenSlot: ReactNode;
  orientation?: Orientation;
}

export const SwitchButton: FC<SwitchButtonProps> = (props) => {
  const { orientation, isToggled, toggledSlot, hiddenSlot } = props;

  const isVertical = orientation === 'vertical';

  const { wrapper, slot } = calculateClassNames(isToggled, isVertical);

  return (
    <div className="relative aspect-square h-full overflow-hidden">
      <div
        className={`absolute top-0 left-0 flex transition-transform duration-300 ${wrapper}`}
        aria-hidden
      >
        <div
          aria-hidden={isToggled}
          className={`flex items-center justify-center ${slot}`}
        >
          {toggledSlot}
        </div>
        <div
          aria-hidden={!isToggled}
          className={`flex items-center justify-center ${slot}`}
        >
          {hiddenSlot}
        </div>
      </div>
    </div>
  );
};
