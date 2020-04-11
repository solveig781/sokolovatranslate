import { path } from 'ramda';

const accentColor = {
  red: 10,
  green: 10,
  blue: 20,
};

const shadeColor = {
  red: 0,
  green: 0,
  blue: 0,
};

const baseLuminosity = 2.0;

const generateColor = color => (luminosity = 1.0) =>
  `rgb(${accentColor.red * (luminosity + baseLuminosity)}, ${accentColor.green *
    (luminosity + baseLuminosity)}, ${accentColor.blue *
    (luminosity + baseLuminosity)})`;

const generateShade = generateColor(shadeColor);
const generateAccent = generateColor(accentColor);

export const defaultTheme = {
  primary: 'black',
  secondary: 'white',
  background: 'black',

  accent0: generateAccent(0),
  accent1: generateAccent(1),
  accent2: generateAccent(2),
  accent3: generateAccent(3),
  accent4: generateAccent(4),
  accent5: generateAccent(5),
  accent6: generateAccent(6),
  accent7: generateAccent(7),
  accent8: generateAccent(8),
  accent9: generateAccent(9),

  shade0: generateShade(0),
  shade1: generateShade(1),
  shade2: generateShade(2),
  shade3: generateShade(3),
  shade4: generateShade(4),
  shade5: generateShade(5),
  shade6: generateShade(6),
  shade7: generateShade(7),
  shade8: generateShade(8),
  shade9: generateShade(9),
};

export const primary = path(['theme', 'primary']);
export const secondary = path(['theme', 'secondary']);
export const background = path(['theme', 'background']);

export const accent0 = path(['theme', 'accent0']);
export const accent1 = path(['theme', 'accent1']);
export const accent2 = path(['theme', 'accent2']);
export const accent3 = path(['theme', 'accent3']);
export const accent4 = path(['theme', 'accent4']);
export const accent5 = path(['theme', 'accent5']);
export const accent6 = path(['theme', 'accent6']);
export const accent7 = path(['theme', 'accent7']);
export const accent8 = path(['theme', 'accent8']);
export const accent9 = path(['theme', 'accent9']);

export const shade0 = path(['theme', 'shade0']);
export const shade1 = path(['theme', 'shade1']);
export const shade2 = path(['theme', 'shade2']);
export const shade3 = path(['theme', 'shade3']);
export const shade4 = path(['theme', 'shade4']);
export const shade5 = path(['theme', 'shade5']);
export const shade6 = path(['theme', 'shade6']);
export const shade7 = path(['theme', 'shade7']);
export const shade8 = path(['theme', 'shade8']);
export const shade9 = path(['theme', 'shade9']);

export default {
  primary,
  secondary,
  background,

  accent0,
  accent1,
  accent2,
  accent3,
  accent4,
  accent5,
  accent6,
  accent7,
  accent8,
  accent9,

  shade0,
  shade1,
  shade2,
  shade3,
  shade4,
  shade5,
  shade6,
  shade7,
  shade8,
  shade9,
};
