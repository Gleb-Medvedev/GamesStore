import { Container } from '@/shared/ui/Container';
import Link from 'next/link';
import { Typography } from '@/shared/ui/Typography';
import { db } from '@/shared/database';
import { games } from '@/shared/database/schema';

export default async function Games() {
  const gamesCatalog = await db.select().from(games);

  return (
    <Container tagName={'section'}>
      <ul>
        {gamesCatalog.map(({ id, title, shortDescription }) => (
          <li
            key={id}
            className={'border-1 border-gray-200 px-4 py-2 not-last:mb-1'}
          >
            <Link href={`/games/${id}`}>
              <Typography tagName={'article'}>
                <Typography tagName={'h3'}>{title}</Typography>
                <Typography tagName={'p'}>{shortDescription}</Typography>
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
