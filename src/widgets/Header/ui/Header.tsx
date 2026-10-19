import { Container } from '@/shared/ui/Container';
import { LogoText } from '@/shared/ui/Logo';
import { HeaderNavigation } from './HeaderNavigation/HeaderNavigation';
// import { db } from '@/shared/database';
// import { games } from '@/shared/database/schema';
// import { Suspense } from 'react';

// const Vlad = async () => {
//   const gamesDataResponse = await db.select().from(games);
//
//   return gamesDataResponse.map(g => <div key={g.id}>{g.title}</div>)
// }

export const Header = () => {
  return (
    <header>
      <Container className="h-full">
        <div className={'flex nowrap py-2 overflow-hidden gap-4'}>
          <LogoText />
          <HeaderNavigation />
          <div className={'searchBox'}></div>
          <div className={'userActions'}></div>
        </div>
      </Container>

      {/*<Suspense fallback={<div>ЗАГРУЗКА</div>}>*/}
      {/*  <Vlad />*/}
      {/*</Suspense>*/}
    </header>
  );
};