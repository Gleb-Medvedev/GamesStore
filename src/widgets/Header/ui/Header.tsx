import { Container } from '@/shared/ui/Container';
import { LogoText } from '@/shared/ui/Logo';
import { HeaderNavigation } from './HeaderNavigation/HeaderNavigation';
import { Catalog } from '@/shared/ui/Catalog/Catalog';

export const Header = () => {
  return (
    <header>
      <Container className="h-full">
        <HeaderNavigation />
        <div className={'flex flex-nowrap'}>
          <LogoText tooltip={'На главную'} />
          <Catalog />
        </div>
      </Container>
    </header>
  );
};
