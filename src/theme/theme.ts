'use client';

import { createTheme, type ThemeOptions } from '@mui/material/styles';

export const BRAND_PRIMARY = '#7C3AED';
export const BRAND_PRIMARY_HOVER = '#6D28D9';
export const TEXT_PRIMARY = '#1E293B';
export const TEXT_SECONDARY = '#64748B';
export const TEXT_MUTED = '#94A3B8';
export const SURFACE = '#F8FAFC';
export const CARD = '#FFFFFF';
export const BORDER = '#E2E8F0';
export const CODE_BG = '#1E293B';
export const ACCENT_PINK = '#EC4899';
export const ACCENT_LIGHT = '#A78BFA';
export const EMERALD = '#10b981';

const theme_options: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: BRAND_PRIMARY },
    text: {
      primary: TEXT_PRIMARY,
      secondary: TEXT_SECONDARY,
      disabled: TEXT_MUTED,
    },
    background: { default: SURFACE, paper: CARD },
  },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    h1: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: 'clamp(2.8rem, 5.5vw, 4rem)',
      fontWeight: 900,
      lineHeight: 1.08,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
      fontWeight: 800,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '1rem',
      lineHeight: 1.7,
      color: TEXT_SECONDARY,
    },
  },
};

export const theme = createTheme(theme_options);
