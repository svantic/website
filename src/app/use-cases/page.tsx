'use client';

import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG, EMERALD,
} from '@/theme/theme';

const PROBLEM_PATTERNS = [
  {
    slug: 'complex-navigation',
    title: 'Complex Navigation Paths',
    subtitle: 'When deterministic scripting breaks down',
    description: "Your process has conditional hops, branching paths, and context-dependent navigation that make it nearly impossible to automate with static scripts. What happens next depends on what you find.",
    examples: ['Multi-step form workflows', 'Portal navigation', 'Data gathering across systems', 'Exception handling flows', 'Approval chains'],
    color: '#8b5cf6',
  },
  {
    slug: 'context-decisions',
    title: 'Context-Dependent Decisions',
    subtitle: 'When rules alone are not enough',
    description: "The right action depends on assembling context from multiple sources. You can't write an if/else tree that covers every scenario — judgment is required based on what you discover.",
    examples: ['Loan underwriting', 'Claims adjudication', 'Support ticket resolution', 'Compliance checks', 'Risk assessment'],
    color: '#0ea5e9',
  },
  {
    slug: 'learning-tasks',
    title: 'Tasks That Should Get Easier',
    subtitle: 'When patterns should compound',
    description: "You process the same type of task repeatedly — each instance slightly different. The 1000th should be easier than the 1st. Patterns should be recognized. Exceptions should be learned.",
    examples: ['Document processing', 'Application intake', 'Invoice reconciliation', 'Data extraction', 'Record retrieval'],
    color: '#10b981',
  },
  {
    slug: 'unpredictable-inputs',
    title: 'Long Tail of Edge Cases',
    subtitle: 'When every case is different',
    description: "Your inputs vary wildly. New formats appear. Edge cases multiply. Static templates break on the first exception. You need something that adapts rather than fails.",
    examples: ['Multi-format documents', 'Varied data sources', 'Unstructured inputs', 'Legacy system outputs', 'Partner integrations'],
    color: '#f59e0b',
  },
];

const GOOD_FIT = [
  'Your process has complex navigation paths with conditional hops',
  'Decisions require assembling context from multiple sources',
  'You need to take action based on what you discover, not predetermined rules',
  'The same task type repeats — and should get easier over time',
  'You face a long tail of edge cases that break static automation',
  'You need audit trails to understand what happened and why',
];

const NOT_FIT = [
  'Your workflow is fixed: A → B → C, every time',
  'All decisions can be expressed as simple if/else rules',
  'Your inputs are predictable and standardized',
  "You're doing a one-time migration or project",
  'Latency is critical (real-time trading, gaming)',
];

export default function UseCasesPage() {
  return (
    <>
      <Hero />
      <ProblemPatterns />
      <WhenToUse />
      <Industries />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <Box
      sx={{
        width: '100%',
        background: `linear-gradient(180deg, ${CODE_BG} 0%, #1e293b 100%)`,
        pt: { xs: 10, md: 14 },
        pb: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage:
            'linear-gradient(hsl(262 83% 58% / 0.35) 1px, transparent 1px), ' +
            'linear-gradient(90deg, hsl(262 83% 58% / 0.35) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ maxWidth: 800 }}>
          <Typography
            sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}
          >
            When to Use Svantic
          </Typography>
          <Typography variant="h1" sx={{ color: '#f8fafc', mb: 3, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.2 }}>
            Static automation breaks down at scale. Here's when dynamic orchestration makes sense.
          </Typography>
          <Typography sx={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.15rem', lineHeight: 1.8, mb: 4 }}>
            Svantic isn't for every workflow. It's for workflows where you have many external sources, 
            varied inputs, frequent changes, and tasks that should get easier over time — not harder.
          </Typography>
          <Button
            component={Link}
            href="/use-cases/fit"
            variant="contained"
            sx={{ bgcolor: BRAND_PRIMARY, fontWeight: 600, borderRadius: '10px', px: 4, py: 1.5, textTransform: 'none', '&:hover': { bgcolor: BRAND_PRIMARY_HOVER } }}
          >
            Is Svantic Right For You?
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

function ProblemPatterns() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Problem Patterns
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 2 }}>
            Four problems where static automation fails.
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, maxWidth: 600, mx: 'auto' }}>
            These are the underlying patterns — not industries. If your workflow matches one or more, Svantic likely fits.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {PROBLEM_PATTERNS.map((pattern, i) => (
            <Grid2 key={pattern.slug} size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    bgcolor: CARD,
                    border: `1px solid ${BORDER}`,
                    height: '100%',
                    transition: 'all 0.2s ease',
                    '&:hover': { borderColor: pattern.color, boxShadow: `0 8px 30px ${pattern.color}15` },
                  }}
                >
                  <Typography sx={{ color: pattern.color, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', mb: 1 }}>
                    {pattern.subtitle}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, color: TEXT_PRIMARY, fontSize: '1.35rem', mb: 2, lineHeight: 1.3 }}>
                    {pattern.title}
                  </Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.95rem', lineHeight: 1.7, mb: 3 }}>
                    {pattern.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {pattern.examples.map((ex) => (
                      <Box
                        key={ex}
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '6px',
                          bgcolor: `${pattern.color}10`,
                          color: pattern.color,
                          fontSize: '0.8rem',
                          fontWeight: 500,
                        }}
                      >
                        {ex}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

function WhenToUse() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: CARD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={6}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography sx={{ color: EMERALD, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
              Good Fit
            </Typography>
            <Typography variant="h3" sx={{ color: TEXT_PRIMARY, mb: 4, fontSize: '1.5rem', fontWeight: 700 }}>
              Svantic makes sense when...
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {GOOD_FIT.map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <CheckCircleOutlineIcon sx={{ color: EMERALD, fontSize: 22, mt: 0.25 }} />
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography sx={{ color: '#ef4444', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
              Probably Not
            </Typography>
            <Typography variant="h3" sx={{ color: TEXT_PRIMARY, mb: 4, fontSize: '1.5rem', fontWeight: 700 }}>
              You probably don't need Svantic when...
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {NOT_FIT.map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <CancelOutlinedIcon sx={{ color: '#ef4444', fontSize: 22, mt: 0.25 }} />
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

function Industries() {
  const industries = [
    { name: 'Financial Services', examples: 'Loan processing, KYC/AML, claims adjudication' },
    { name: 'Healthcare', examples: 'Prior auth, records retrieval, eligibility' },
    { name: 'Insurance', examples: 'Claims intake, policy servicing, underwriting' },
    { name: 'Legal', examples: 'Contract review, eDiscovery, regulatory filings' },
    { name: 'Supply Chain', examples: 'Vendor onboarding, shipment tracking, reconciliation' },
    { name: 'Government', examples: 'Benefits processing, permit workflows, compliance' },
  ];

  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Where We See This
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 2 }}>
            Industries with these patterns.
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, maxWidth: 560, mx: 'auto' }}>
            The problem patterns above show up most often in these industries — but the fit depends on your specific workflow, not your industry label.
          </Typography>
        </Box>

        <Grid2 container spacing={2}>
          {industries.map((ind, i) => (
            <Grid2 key={ind.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Box sx={{ p: 3, borderRadius: '12px', bgcolor: CARD, border: `1px solid ${BORDER}` }}>
                  <Typography sx={{ fontWeight: 600, color: TEXT_PRIMARY, mb: 0.5 }}>{ind.name}</Typography>
                  <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>{ind.examples}</Typography>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

function CTA() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, background: `linear-gradient(180deg, ${CODE_BG} 0%, #0f172a 100%)`, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ color: '#f8fafc', mb: 3 }}>
          Not sure if Svantic fits?
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto' }}>
          Take our quick assessment or talk to us. We'll be honest about whether your workflow is a good fit.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            component={Link}
            href="/use-cases/fit"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{ bgcolor: BRAND_PRIMARY, fontWeight: 600, borderRadius: '10px', px: 4, py: 1.5, textTransform: 'none', '&:hover': { bgcolor: BRAND_PRIMARY_HOVER } }}
          >
            Take the Assessment
          </Button>
          <Button
            component={Link}
            href="/contact"
            variant="outlined"
            sx={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff', borderRadius: '10px', px: 4, py: 1.5, textTransform: 'none', '&:hover': { borderColor: 'rgba(255,255,255,0.4)' } }}
          >
            Talk to Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
