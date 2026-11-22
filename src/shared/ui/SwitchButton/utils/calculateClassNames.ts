export const calculateClassNames = (
  isToggled: boolean,
  isVertical: boolean
): { wrapper: string; slot: string } => {
  const flexDirection = isVertical ? 'flex-col' : 'flex-row';

  const innerSize = isVertical ? 'w-full h-[200%]' : 'w-[200%] h-full';

  let translate: string;

  if (!isToggled) {
    translate = 'translate-x-0 translate-y-0';
  } else {
    translate = isVertical
      ? 'translate-x-0 -translate-y-1/2'
      : '-translate-x-1/2 translate-y-0';
  }

  return {
    wrapper: `${flexDirection} ${innerSize} ${translate}`,
    slot: isVertical ? 'w-full h-1/2' : 'w-1/2 h-full',
  };
};