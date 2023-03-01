const breakpoints = {
  large: 1065,
  medium: 768,
  small: 480,
};

const { large, medium, small } = breakpoints;

export const media = {
  small: `screen and (max-width: ${small}px)`,
  medium: `screen and (max-width: ${medium}px)`,
  large: `screen and (max-width:  ${large}px)`,
};
