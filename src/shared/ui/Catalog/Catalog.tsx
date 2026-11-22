'use client';

import { ShoppingBag, UserRound } from 'lucide-react';
import { useState } from 'react';
import { SwitchButton } from '@/shared/ui/SwitchButton';
import { TooltipContainer } from '@/shared/ui/TooltipContainer';
import { Button } from '@/shared/ui/Button';

export const Catalog = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleToggle = () => setIsOpened((prev) => !prev);

  return (
    <TooltipContainer tooltip={'GOL'} onDisabledTooltip={'NE GOL!!!'}>
      <Button onClick={handleToggle}>
        <div className={'grid grid-cols-[1.5rem_1fr] gap-1'}>
          <SwitchButton
            isToggled={isOpened}
            toggledSlot={<ShoppingBag />}
            hiddenSlot={<UserRound />}
            orientation={'vertical'}
          />
          <span>Каталог</span>
        </div>
      </Button>
    </TooltipContainer>
    // <Menubar >{catalogConfig.map((item) => buildCatalog(item, true))}</Menubar>
  );
};
