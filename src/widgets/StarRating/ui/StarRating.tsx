import { BaseComponentProps, Size } from '@/shared/model';
import { FC } from 'react';
import { Rating } from '@/entities/model';
import { cn, sizeToUnits } from '@/shared/lib';
import { SvgStar } from './SvgStar';
import { MessageCircle } from 'lucide-react';
import { TooltipContainer } from '@/shared/ui/TooltipContainer';

type StarRatingProps = Rating &
  BaseComponentProps & {
    isInteractive?: boolean;
    size?: Size;
  };

export const StarRating: FC<StarRatingProps> = (props) => {
  const {
    isInteractive,
    size,
    starRating,
    votedQuantity,
    className,
    ...restProps
  } = props;

  const { withUnits: edgeSize, withoutUnits } = sizeToUnits(size);

  const ratingWrapperClsx = `flex flex-nowrap items-center`;
  const ratingValueClsx = `${ratingWrapperClsx} text-${edgeSize} font-semibold text-[var(--brand-orange)] gap-1`;
  const quantityClsx = `${withoutUnits * 0.75}rem`;

  return (
    <TooltipContainer tooltip={'Нажмите, чтобы оставить отзыв'}>
      <aside className={cn('w-fit cursor-pointer', className)} {...restProps}>
        <div className={`${ratingWrapperClsx} gap-2`}>
          <div className={ratingValueClsx}>
            <SvgStar edgeSize={edgeSize} />
            <span>{starRating} | 5</span>
          </div>

          <div className={`${ratingWrapperClsx} text-muted-foreground gap-1`}>
            <MessageCircle size={quantityClsx} strokeWidth={2.5} />
            <span style={{ fontSize: edgeSize }} className={'font-semibold'}>
              {votedQuantity}
            </span>
          </div>
        </div>

        {/*<div className={`${ratingWrapperClsx} text-muted-foreground`}>*/}
        {/*  <MessageCircle size={quantityClsx} strokeWidth={2.5} />*/}
        {/*  <span style={{ fontSize: edgeSize }} className={'font-semibold'}>*/}
        {/*    {votedQuantity}*/}
        {/*  </span>*/}
        {/*</div>*/}
      </aside>
    </TooltipContainer>
  );

  // if (isInteractive) {
  //   const coloredStars = renderStars(edgeSize, false);
  //   const sublayerStars = renderStars(edgeSize, true);
  //
  //   return (
  //     <aside
  //       {...restProps}
  //       className={cn(className, 'relative grid w-fit overflow-hidden')}
  //       style={{
  //         gridTemplateColumns,
  //       }}
  //     >
  //       {sublayerStars}
  //       <div
  //         className={`absolute top-0 left-0 z-1 grid h-full w-fit overflow-hidden`}
  //         style={{
  //           width: `${bgSize}%`,
  //           gridTemplateColumns,
  //         }}
  //       >
  //         {coloredStars}
  //       </div>
  //     </aside>
  //   );
  // }
  //
  // return (
  //   <aside className={cn(className, 'relative grid w-fit overflow-hidden')}>
  //     <SvgStar edgeSize={edgeSize} />
  //   </aside>
  // );
};
