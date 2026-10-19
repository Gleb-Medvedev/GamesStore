import { Container } from '@/shared/ui/Container';
import { CombinedLogo } from '@/shared/ui/Logo/CombinedLogo';
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
        <CombinedLogo />
      </Container>

      {/*<Suspense fallback={<div>ЗАГРУЗКА</div>}>*/}
      {/*  <Vlad />*/}
      {/*</Suspense>*/}
    </header>
  );
};