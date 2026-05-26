// ONX Design Tokens — single source of truth
// Derived from Figma ONX-Master-File build spec dated 2026-05-22
// This file is for reference only; not imported at runtime.

export const colors = {
  white:           '#FFFFFF',
  black:           '#000000',
  nearBlack:       '#1C1C1C',
  warmLight:       '#ECEBE9',
  redPrimary:      '#E32124',
  darkGray:        '#121212',
  warmGray:        '#E3DEDB',
  lightGray:       '#F6F6F6',
  borderLight:     '#EDEDED',
  greenStock:      '#4FA933',
  border:          '#E8E8E8',
  mutedText:       '#717171',
} as const;

export const typography = {
  fontFamily: {
    primary:   ['Antonio', 'sans-serif'],
    secondary: ['Inter', 'sans-serif'],
    tertiary:  ['Montserrat', 'sans-serif'],
  },
  sizes: {
    'hero-xl':      { size: '140px', lineHeight: 1, weight: 100 },
    'hero-lg':      { size: '128px', lineHeight: 1, weight: 700 },
    'hero':         { size: '96px',  lineHeight: 1, weight: 700 },
    'category':     { size: '90px',  lineHeight: 1, weight: 400 },
    'section-lg':   { size: '64px',  lineHeight: 1, weight: 700 },
    'section':      { size: '60px',  lineHeight: 1, weight: 400 },
    'heading-xl':   { size: '56px',  lineHeight: 1, weight: 400 },
    'heading-lg':   { size: '48px',  lineHeight: 1.1, weight: 400 },
    'heading-faq':  { size: '45px',  lineHeight: 1.1, weight: 400 },
    'heading':      { size: '40px',  lineHeight: 1, weight: 400 },
    'subheading':   { size: '36px',  lineHeight: 1, weight: 400 },
    'nav-cta':      { size: '32px',  lineHeight: 1, weight: 700 },
    'body-lg':      { size: '30px',  lineHeight: 1.2, weight: 400 },
    'body':         { size: '20px',  lineHeight: 1.3, weight: 400 },
    'label-lg':     { size: '18px',  lineHeight: 1, weight: 400 },
    'label':        { size: '16px',  lineHeight: 1, weight: 400 },
    'body-sm':      { size: '16px',  lineHeight: 1.375, weight: 300 },
    'caption':      { size: '14px',  lineHeight: 1.3, weight: 400 },
    'badge':        { size: '13px',  lineHeight: 1, weight: 700 },
    'small':        { size: '12px',  lineHeight: 1, weight: 400 },
    'xs':           { size: '11px',  lineHeight: 1, weight: 400 },
    'micro':        { size: '10px',  lineHeight: 1.2, weight: 300 },
  },
} as const;

export const spacing = {
  xs:   '5px',
  sm:   '6px',
  md:   '10px',
  lg:   '12px',
  xl:   '17px',
  '2xl': '20px',
  '3xl': '22px',
  '4xl': '31px',
  '5xl': '42px',
  '6xl': '45px',
  '7xl': '103px',
} as const;

export const breakpoints = {
  desktop: 1440,
  tablet:  1024,
  mobile:  393,
} as const;
