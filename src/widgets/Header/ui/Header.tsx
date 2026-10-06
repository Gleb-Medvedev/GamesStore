import { Container } from '@/shared/ui';
import { db } from '@/shared/database';
import { games } from '@/shared/database/schema';

const Vlad = async () => {
  const gamess = await db.select().from(games);

  console.log(`gamess`, gamess)

  return <div>VLAD</div>

}

export const Header = () => {
  return (
    <header>
      <Vlad />
      <Container className="h-full">HEADER</Container>
    </header>
  );
};