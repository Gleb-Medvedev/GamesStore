import { SvgStar } from '../ui/SvgStar';

const starsCont = Array.from({ length: 5 });

export const renderStars = (edgeSize: string, isSublayer: boolean = false) =>
  starsCont.map((_, i) => (
    <SvgStar key={i} edgeSize={edgeSize} isSublayer={isSublayer} />
  ));
