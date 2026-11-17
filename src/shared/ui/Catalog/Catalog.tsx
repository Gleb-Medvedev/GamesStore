'use client';

import { Button } from '@/shared/ui/Button/Button';
import { UserRound } from 'lucide-react';

export const Catalog = () => {
  return (
    <Button
      text={'Click Me!'}
      icon={UserRound}
      disabled={true}
      slotProps={{
        text: {
          className: 'text-lg',
        },
        icon: {
          size: 'lg',
          iconOrder: 'iconFirst',
        },
      }}
    />
    // <Menubar >{catalogConfig.map((item) => buildCatalog(item, true))}</Menubar>
  );
};
