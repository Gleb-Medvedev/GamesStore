import { Container } from '@/shared/ui/Container';
import Link from 'next/link';

export const Preheader = () => {
  return (
    <aside className={'py-2 bg-black text-white text-center'}>
      <Container className="text-sm tracking-wider">
        Распродажа до 50%! Перейти в <Link href={'/'} className={'text-[var(--brand-orange)]'}>каталог</Link>
      </Container>
    </aside>
  );
};
