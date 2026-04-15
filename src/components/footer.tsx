'use client';

import Link from 'next/link';
import { Box, Container, Grid2, Typography } from '@mui/material';
import { BRAND_PRIMARY, ACCENT_LIGHT, EMERALD, CODE_BG } from '@/theme/theme';

const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Changelog', href: '/changelog' },
  ],
  solutions: [
    { label: 'Customer Support', href: '/use-cases/customer-support' },
    { label: 'DevOps & CI/CD', href: '/use-cases/devops' },
    { label: 'Document Processing', href: '/use-cases/document-processing' },
    { label: 'Compliance & Audit', href: '/use-cases/compliance' },
  ],
  developers: [
    { label: 'Documentation', href: 'https://docs.svantic.com', external: true },
    { label: 'API Reference', href: 'https://docs.svantic.com/api-reference', external: true },
    { label: 'SDK Reference', href: 'https://docs.svantic.com/sdk-reference', external: true },
    { label: 'CLI Reference', href: 'https://docs.svantic.com/cli-reference', external: true },
    { label: 'GitHub', href: 'https://github.com/svantic', external: true },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Webinars', href: '/webinars' },
    { label: 'Community', href: 'https://discord.gg/svantic', external: true },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Press', href: '/press' },
  ],
  legal: [
    { label: 'Terms of Service', href: '/legal/terms' },
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Security', href: '/security' },
    { label: 'Cookie Policy', href: '/legal/cookies' },
  ],
};

function FooterLinkColumn({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
  return (
    <Box>
      <Typography
        sx={{
          color: '#ffffff',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          mb: 2.5,
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {links.map((link) => (
          <Box
            key={link.label}
            component={link.external ? 'a' : Link}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            sx={{
              color: '#94A3B8',
              fontSize: '0.85rem',
              textDecoration: 'none',
              transition: 'color 0.15s ease',
              '&:hover': { color: '#ffffff' },
            }}
          >
            {link.label}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function SocialIcon({ name }: { name: string }) {
  const size = 18;

  switch (name) {
    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'discord':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        background: `linear-gradient(180deg, ${CODE_BG} 0%, #0f172a 100%)`,
        pt: { xs: 8, md: 10 },
        pb: { xs: 4, md: 5 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            'linear-gradient(hsl(262 83% 58% / 0.5) 1px, transparent 1px), ' +
            'linear-gradient(90deg, hsl(262 83% 58% / 0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient orb */}
      <Box
        sx={{
          position: 'absolute',
          top: -200,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${BRAND_PRIMARY}15 0%, transparent 70%)`,
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        {/* Main footer content */}
        <Grid2 container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 6, md: 8 } }}>
          {/* Brand column */}
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <img src="/logo.png" alt="Svantic" style={{ width: 40, height: 40 }} />
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                }}
              >
                Svantic
              </Typography>
            </Box>

            <Typography
              sx={{
                color: '#94A3B8',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                mb: 3,
                maxWidth: 280,
              }}
            >
              Every system deserves a Savant — an AI agent that learns, adapts, and gets smarter with every interaction.
            </Typography>

            {/* Social links */}
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {[
                { icon: 'github', href: 'https://github.com/svantic' },
                { icon: 'twitter', href: 'https://twitter.com/svantic' },
                { icon: 'linkedin', href: 'https://linkedin.com/company/svantic' },
                { icon: 'discord', href: 'https://discord.gg/svantic' },
                { icon: 'youtube', href: 'https://youtube.com/@svantic' },
              ].map((social) => (
                <Box
                  key={social.icon}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '8px',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94A3B8',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: `${BRAND_PRIMARY}20`,
                      borderColor: `${BRAND_PRIMARY}40`,
                      color: ACCENT_LIGHT,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <SocialIcon name={social.icon} />
                </Box>
              ))}
            </Box>
          </Grid2>

          {/* Link columns */}
          <Grid2 size={{ xs: 6, sm: 4, md: 1.5 }}>
            <FooterLinkColumn title="Product" links={FOOTER_LINKS.product} />
          </Grid2>
          <Grid2 size={{ xs: 6, sm: 4, md: 1.5 }}>
            <FooterLinkColumn title="Solutions" links={FOOTER_LINKS.solutions} />
          </Grid2>
          <Grid2 size={{ xs: 6, sm: 4, md: 1.5 }}>
            <FooterLinkColumn title="Developers" links={FOOTER_LINKS.developers} />
          </Grid2>
          <Grid2 size={{ xs: 6, sm: 4, md: 1.5 }}>
            <FooterLinkColumn title="Resources" links={FOOTER_LINKS.resources} />
          </Grid2>
          <Grid2 size={{ xs: 6, sm: 4, md: 1.5 }}>
            <FooterLinkColumn title="Company" links={FOOTER_LINKS.company} />
          </Grid2>
          <Grid2 size={{ xs: 6, sm: 4, md: 1.5 }}>
            <FooterLinkColumn title="Legal" links={FOOTER_LINKS.legal} />
          </Grid2>
        </Grid2>

        {/* Divider */}
        <Box
          sx={{
            height: 1,
            background: `linear-gradient(90deg, transparent, ${BRAND_PRIMARY}30, transparent)`,
            mb: { xs: 3, md: 4 },
          }}
        />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography sx={{ color: '#64748B', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Svantic, Inc. All rights reserved.
          </Typography>

          {/* Status badge */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: EMERALD,
                boxShadow: `0 0 8px ${EMERALD}80`,
              }}
            />
            <Typography sx={{ color: '#64748B', fontSize: '0.75rem' }}>All systems operational</Typography>
            <Box
              component="a"
              href="https://status.svantic.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#64748B',
                fontSize: '0.75rem',
                textDecoration: 'none',
                ml: 0.5,
                '&:hover': { color: ACCENT_LIGHT },
              }}
            >
              → Status
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
