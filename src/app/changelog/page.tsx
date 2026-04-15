'use client';

import { Box, Container, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import {
  BRAND_PRIMARY, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, EMERALD,
} from '@/theme/theme';

const CHANGELOG_ENTRIES = [
  {
    version: 'v1.4.0',
    date: 'April 12, 2026',
    type: 'feature',
    title: 'Forge 2.0: Generate from Plain English',
    items: [
      'Describe your agent in plain English and Forge generates the code',
      'Improved OpenAPI parsing with better type inference',
      'New --standalone flag for self-contained agent projects',
      'Support for generating agents from TypeScript source files',
    ],
  },
  {
    version: 'v1.3.2',
    date: 'April 8, 2026',
    type: 'improvement',
    title: 'Performance and Reliability Improvements',
    items: [
      '40% faster Knowledge Store queries for large datasets',
      'Improved websocket reconnection handling',
      'Better error messages for capability registration failures',
      'Fixed memory leak in long-running sessions',
    ],
  },
  {
    version: 'v1.3.0',
    date: 'April 1, 2026',
    type: 'feature',
    title: 'Approval Workflows',
    items: [
      'Human-in-the-loop approvals for sensitive operations',
      'Slack integration for one-click approvals',
      'Email notifications with full context',
      'Configurable timeout and escalation policies',
    ],
  },
  {
    version: 'v1.2.0',
    date: 'March 25, 2026',
    type: 'feature',
    title: 'Dashboard Analytics',
    items: [
      'Real-time token usage and cost tracking',
      'Agent performance metrics and trends',
      'Session timeline with detailed traces',
      'Export traces to OpenTelemetry',
    ],
  },
  {
    version: 'v1.1.0',
    date: 'March 18, 2026',
    type: 'feature',
    title: 'Guardrails and Policies',
    items: [
      'Declarative policy definitions in YAML',
      'Pre-execution validation for all tool calls',
      'Rate limiting and cost caps per agent',
      'Sensitive data masking in traces',
    ],
  },
  {
    version: 'v1.0.0',
    date: 'March 10, 2026',
    type: 'major',
    title: 'General Availability',
    items: [
      'Svantic is now generally available!',
      'Production-ready SDK, Mesh, and Knowledge Store',
      'SOC 2 Type II certified',
      'Enterprise support and SLAs available',
    ],
  },
];

const TYPE_COLORS: Record<string, string> = {
  feature: BRAND_PRIMARY,
  improvement: EMERALD,
  fix: '#f59e0b',
  major: '#ec4899',
};

export default function ChangelogPage() {
  return (
    <>
      <Hero />
      <ChangelogList />
    </>
  );
}

function Hero() {
  return (
    <Box
      sx={{
        width: '100%',
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        textAlign: 'center',
        background: `linear-gradient(180deg, ${CARD} 0%, ${SURFACE} 100%)`,
      }}
    >
      <Container maxWidth="md">
        <Typography sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
          Changelog
        </Typography>
        <Typography sx={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT_PRIMARY, lineHeight: 1.15, mb: 2 }}>
          What's new in Svantic
        </Typography>
        <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1.1rem', maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
          All the latest features, improvements, and fixes. We ship updates every week.
        </Typography>
      </Container>
    </Box>
  );
}

function ChangelogList() {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 12 }, bgcolor: SURFACE }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {CHANGELOG_ENTRIES.map((entry, i) => (
            <motion.div
              key={entry.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Box
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  bgcolor: CARD,
                  border: `1px solid ${BORDER}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', bgcolor: TYPE_COLORS[entry.type] || BRAND_PRIMARY }} />
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                  <Chip
                    label={entry.version}
                    size="small"
                    sx={{ bgcolor: `${TYPE_COLORS[entry.type]}15`, color: TYPE_COLORS[entry.type], fontWeight: 700, fontFamily: 'monospace' }}
                  />
                  <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>{entry.date}</Typography>
                </Box>

                <Typography sx={{ fontWeight: 700, fontSize: '1.15rem', color: TEXT_PRIMARY, mb: 2 }}>
                  {entry.title}
                </Typography>

                <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                  {entry.items.map((item, idx) => (
                    <Box component="li" key={idx} sx={{ color: TEXT_SECONDARY, fontSize: '0.95rem', lineHeight: 1.7, mb: 0.5 }}>
                      {item}
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
