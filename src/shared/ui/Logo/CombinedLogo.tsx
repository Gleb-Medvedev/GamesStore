import { LogoImage } from '@/shared/ui/Logo/LogoImage';
import { LogoText } from '@/shared/ui/Logo/LogoText';

export const CombinedLogo = () => {
  return (
    <div
      className={
        'combined-logo grid w-min grid-cols-[4rem_auto] items-center gap-4'
      }
    >
      <LogoImage />
      <LogoText />
    </div>
  );
};
