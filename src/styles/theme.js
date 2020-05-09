/* eslint-disable */

const theme = {
  colors: {
    blue5: '#002880',
    blue4: '#0041CC',
    blue3: '#087EE6',
    blue2: '#12BCFF',
    blue1: '#E5E9F2',
    orange1: '#f29323',
    black: '#000000',
    blackLight: '#202020',
    grey1: '#212121',
    grey2: '#919191',
    grey3: '#9b9b9b',
    grey4: '#888A8D',
    grey5: '#484848',
    white: '#FFFFFF',
    pink: '#e52679',
  },
  // typography
  fontWeights: {
    normal: 400,
    display: 500,
    bold: 600,
    heading: 700,
  },
  fonts: {
    primary: 'Andada',
  },
  fontSizes: {
    root: '16px',
    0: '0.75rem', // 12px
    1: '0.875rem', // 14px
    2: '1.125rem', // 18px
    3: '1.3125rem', // 21px
    4: '1.5rem', // 24px
    10: '75px',
    11: '85px',
    button: '1.125rem',
    heading: '1.5rem', // 24px
  },
  // sizes
  space: {
    0: 5,
    1: 10,
    2: 20,
    array: [12, 24, 36, 48, 60, 72, 84, 96, 128],
    titleMarginBottom: '25px',
    defaultMarginBottomMobile: '20px',
    defaultMarginBottomDesktop: '8%',
    globalDesktopPaddingX: '10%',
    fullWidth: 100,
  },
  sizes: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 24,
    6: 32,
    7: 38,
    8: 48,
    9: 64,
    10: 80,
    11: 120,
    navHeight: 70,
    pageHeaderHeight: 60,
    fullWidth: 100,
    maxWidth: 1920,
    maxSectionWidth: 1344,
  },
  breakpoints: ['320px', '480px', '720px', '1024px', '1440px', '1920px'],
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  borders: {
    none: 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '3px': '3px solid',
  },
  radii: {
    normal: 3,
  },
  opacity: {
    default: '0.8',
    heroImageRight: '0.6',
    svg: '0.2',
  },
  shadows: {
    normal: '0 0 15px 0 rgba(32,32,32,0.05)',
    elevated: '0 0 15px 0 rgba(32,32,32,0.2)',
    none: 'none',
  },
};

// alias for default colors
theme.colors.primary = theme.colors.blue5;
theme.colors.secondary = theme.colors.blue4;
theme.colors.tertiary = theme.colors.orange1;

theme.colors.catskillWhite = theme.colors.blue1;
theme.colors.dustyGray = theme.colors.grey3;

theme.colors.scrollbarPrimary = theme.colors.white;
theme.colors.scrollbarSecondary = theme.colors.grey5;

theme.colors.border = theme.colors.grey2;

// Grid column widths definitions including ping gutter..
theme.sizes.column1 = `${theme.sizes.fullWidth / 12}%`;
theme.sizes.column2 = `${(theme.sizes.fullWidth / 12) * 2}%`;
theme.sizes.column3 = `${(theme.sizes.fullWidth / 12) * 3}%`;
theme.sizes.column4 = `${(theme.sizes.fullWidth / 12) * 4}%`;
theme.sizes.column5 = `${(theme.sizes.fullWidth / 12) * 5}%`;
theme.sizes.column6 = `${(theme.sizes.fullWidth / 12) * 6}%`;
theme.sizes.column7 = `${(theme.sizes.fullWidth / 12) * 7}%`;
theme.sizes.column8 = `${(theme.sizes.fullWidth / 12) * 8}%`;
theme.sizes.column9 = `${(theme.sizes.fullWidth / 12) * 9}%`;
theme.sizes.column10 = `${(theme.sizes.fullWidth / 12) * 10}%`;
theme.sizes.column11 = `${(theme.sizes.fullWidth / 12) * 11}%`;
theme.sizes.column12 = `${theme.sizes.fullWidth}%`;

theme.space.column1 = `${theme.space.fullWidth / 12}%`;
theme.space.column2 = `${(theme.space.fullWidth / 12) * 2}%`;
theme.space.column3 = `${(theme.space.fullWidth / 12) * 3}%`;
theme.space.column4 = `${(theme.space.fullWidth / 12) * 4}%`;
theme.space.column5 = `${(theme.space.fullWidth / 12) * 5}%`;
theme.space.column6 = `${(theme.space.fullWidth / 12) * 6}%`;
theme.space.column7 = `${(theme.space.fullWidth / 12) * 7}%`;
theme.space.column8 = `${(theme.space.fullWidth / 12) * 8}%`;
theme.space.column9 = `${(theme.space.fullWidth / 12) * 9}%`;
theme.space.column10 = `${(theme.space.fullWidth / 12) * 10}%`;
theme.space.column11 = `${(theme.space.fullWidth / 12) * 11}%`;
theme.space.column12 = `${theme.space.fullWidth}%`;
theme.space.column13 = `${(theme.space.fullWidth / 12) * 13}%`;
theme.space.column14 = `${(theme.space.fullWidth / 12) * 14}%`;
theme.space.column15 = `${(theme.space.fullWidth / 12) * 15}%`;
theme.space.column16 = `${(theme.space.fullWidth / 12) * 16}%`;

theme.space.column1minus = `-${theme.space.fullWidth / 12}%`;
theme.space.column2minus = `-${(theme.space.fullWidth / 12) * 2}%`;
theme.space.column3minus = `-${(theme.space.fullWidth / 12) * 3}%`;
theme.space.column4minus = `-${(theme.space.fullWidth / 12) * 4}%`;
theme.space.column5minus = `-${(theme.space.fullWidth / 12) * 5}%`;
theme.space.column6minus = `-${(theme.space.fullWidth / 12) * 6}%`;
theme.space.column7minus = `-${(theme.space.fullWidth / 12) * 7}%`;
theme.space.column8minus = `-${(theme.space.fullWidth / 12) * 8}%`;
theme.space.column9minus = `-${(theme.space.fullWidth / 12) * 9}%`;
theme.space.column10minus = `-${(theme.space.fullWidth / 12) * 10}%`;
theme.space.column11minus = `-${(theme.space.fullWidth / 12) * 11}%`;
theme.space.column12minus = `-${theme.space.fullWidth}%`;

export default theme;
