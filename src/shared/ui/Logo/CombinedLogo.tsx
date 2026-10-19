import { Typography } from '@/shared/ui/Typography';
import { LogoImage } from '@/shared/ui/Logo/LogoImage';

export const CombinedLogo = () => {
  return (
    <div className={'combined-logo grid grid-cols-[4rem_auto] gap-4 w-min'}>
      <LogoImage />
      <Typography tagName={'span'} title={'Логотип'} className={'w-min'}>
        Магазин
      </Typography>
    </div>
  );
};
