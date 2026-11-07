import { Container } from '@/shared/ui/Container';
import { db } from '@/shared/database';
import { games } from '@/shared/database/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';

export default async function GameDetails(props: PageProps<'/games/[id]'>) {
  const { id } = await props.params;

  const [gameToView] = await db
    .select()
    .from(games)
    .where(eq(games.id, id))
    .limit(1);

  if (!gameToView) return notFound();

  return <Container>{gameToView?.title}</Container>;
}
