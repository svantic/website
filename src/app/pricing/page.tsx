'use client';

import { Box, Button, Container, Grid2, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, EMERALD,
} from '@/theme/theme';

const PRICING_TIERS = [
  {
    name: 'Free',
    description: 'For developers exploring the mesh.',
    price: '$0',
    period: 'forever',
    cta: 'Get Started Free',
    cta_href: 'https://app.svantic.com/signup',
    highlighted: false,
    limits: {
      sessions: '50 sessions/month',
      cu_per_session: '1 CU per session',
      concurrent: '3 concurrent sessions',
      retention: '7-day retention',
      overage: 'Upgrade to continue',
    },
  },
  {
    name: 'Pro',
    description: 'For teams running production workflows.',
    price: '$199',
    period: '/month',
    cta: 'Start Free Trial',
    cta_href: 'https://app.svantic.com/signup?plan=pro',
    highlighted: true,
    badge: 'Most Popular',
    limits: {
      sessions: '500 sessions/month',
      cu_per_session: '2 CU per session',
      concurrent: '15 concurrent sessions',
      retention: '30-day retention',
      overage: '+$0.50/session, +$0.25/CU',
    },
  },
  {
    name: 'Scale',
    description: 'For high-throughput deployments.',
    price: '$999',
    period: '/month',
    cta: 'Start Free Trial',
    cta_href: 'https://app.svantic.com/signup?plan=scale',
    highlighted: false,
    limits: {
      sessions: '5,000 sessions/month',
      cu_per_session: '2 CU per session',
      concurrent: '100 concurrent sessions',
      retention: '90-day retention',
      overage: '+$0.30/session, +$0.20/CU',
    },
  },
  {
    name: 'Enterprise',
    description: 'For large-scale deployments.',
    price: 'Custom',
    period: '',
    cta: 'Contact Sales',
    cta_href: '/contact?plan=enterprise',
    highlighted: false,
    limits: {
      sessions: 'Unlimited sessions',
      cu_per_session: 'Custom CU/session',
      concurrent: 'Unlimited concurrent',
      retention: 'Custom retention',
      overage: 'Volume discounts',
    },
  },
];

const INCLUDED_FEATURES = [
  'Unlimited agents',
  'Unlimited knowledge storage',
  'All guardrails & policies',
  'Approval workflows',
  'Slack & webhook notifications',
  'Full API access',
  'Dashboard & analytics',
  'Spending alerts & caps',
];

const FAQ_ITEMS = [
  {
    question: 'What is a session?',
    answer: 'A session is one complete workflow through the mesh — from start to completion. It can include multiple steps, tool calls, and agents working together. Simple queries and complex multi-step workflows each count as one session.',
  },
  {
    question: 'What is a Compute Unit (CU)?',
    answer: 'A CU represents 100,000 tokens of AI processing. Each session includes CU to cover typical workloads. Light tasks use ~0.5 CU, portal navigation with screenshots uses ~2-4 CU, and document processing uses ~0.2 CU per page.',
  },
  {
    question: 'How does overage work?',
    answer: "Two types: (1) Session overage — if you run more sessions than your plan includes. (2) CU overage — if any session uses more compute than its included CU. Most workflows stay within the included CU; heavy tasks like document or video processing may incur CU overage.",
  },
  {
    question: 'What uses extra CU?',
    answer: 'Processing images (~0.02 CU each), documents (~0.2 CU per page), or video (~2 CU per minute). For example, a 50-page document uses ~10 CU — on Pro (2 CU included), you\'d pay 8 CU overage at $0.25 = $2 extra for that session.',
  },
  {
    question: 'Can I set spending limits?',
    answer: 'Yes. Set alerts and hard caps in your dashboard. You\'ll get notified before hitting limits and can choose to stop or continue with overage billing.',
  },
  {
    question: 'Is there a limit on agents or storage?',
    answer: 'No! Deploy unlimited agents and store unlimited knowledge on any plan. We only meter sessions and compute to keep pricing simple.',
  },
  {
    question: 'What does Enterprise include?',
    answer: 'Unlimited sessions, custom CU allocations, volume discounts (as low as $0.10/session and $0.10/CU), dedicated infrastructure, SLAs, and compliance features. Contact sales for a quote.',
  },
];

export default function PricingPage() {
  return (
    <>
      <Hero />
      <PricingTiers />
      <IncludedFeatures />
      <FAQ />
      <CTA />
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
        <Typography
          sx={{
            color: BRAND_PRIMARY,
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            mb: 2,
          }}
        >
          Pricing
        </Typography>
        <Typography
          sx={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: TEXT_PRIMARY,
            lineHeight: 1.15,
            mb: 2,
          }}
        >
          Simple, session-based pricing
        </Typography>
        <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1.1rem', maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
          Pay per workflow, not features. Each session includes compute for typical workloads. Heavy tasks pay a bit more.
        </Typography>
      </Container>
    </Box>
  );
}

function PricingTiers() {
  return (
    <Box sx={{ width: '100%', pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={3} justifyContent="center">
          {PRICING_TIERS.map((tier, i) => (
            <Grid2 key={tier.name} size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    bgcolor: CARD,
                    border: tier.highlighted ? `2px solid ${BRAND_PRIMARY}` : `1px solid ${BORDER}`,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    boxShadow: tier.highlighted ? `0 8px 32px ${BRAND_PRIMARY}20` : '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  {tier.badge && (
                    <Chip
                      label={tier.badge}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bgcolor: BRAND_PRIMARY,
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />
                  )}

                  <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', color: TEXT_PRIMARY, mb: 0.5 }}>
                    {tier.name}
                  </Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.875rem', mb: 3, minHeight: 44 }}>
                    {tier.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography component="span" sx={{ fontSize: '2.5rem', fontWeight: 800, color: TEXT_PRIMARY }}>
                      {tier.price}
                    </Typography>
                    <Typography component="span" sx={{ color: TEXT_MUTED, fontSize: '1rem', ml: 0.5 }}>
                      {tier.period}
                    </Typography>
                  </Box>

                  <Button
                    variant={tier.highlighted ? 'contained' : 'outlined'}
                    fullWidth
                    href={tier.cta_href}
                    sx={{
                      mb: 4,
                      py: 1.5,
                      borderRadius: '10px',
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      ...(tier.highlighted
                        ? { bgcolor: BRAND_PRIMARY, '&:hover': { bgcolor: BRAND_PRIMARY_HOVER } }
                        : { borderColor: BORDER, color: TEXT_PRIMARY, '&:hover': { borderColor: BRAND_PRIMARY, bgcolor: `${BRAND_PRIMARY}08` } }),
                    }}
                  >
                    {tier.cta}
                  </Button>

                  <Box sx={{ p: 2.5, borderRadius: '10px', bgcolor: SURFACE, flex: 1 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: TEXT_PRIMARY, mb: 0.5 }}>
                      {tier.limits.sessions}
                    </Typography>
                    <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.875rem', mb: 0.75 }}>
                      {tier.limits.cu_per_session}
                    </Typography>
                    <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.875rem', mb: 0.75 }}>
                      {tier.limits.concurrent}
                    </Typography>
                    <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.875rem', mb: 0.75 }}>
                      {tier.limits.retention}
                    </Typography>
                    <Typography
                      sx={{
                        color: tier.name === 'Free' ? TEXT_MUTED : BRAND_PRIMARY,
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        mt: 1,
                      }}
                    >
                      {tier.limits.overage}
                    </Typography>
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

function IncludedFeatures() {
  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 8, md: 10 },
        bgcolor: CARD,
        borderTop: `1px solid ${BORDER}`,
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      <Container maxWidth="md">
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: TEXT_PRIMARY, mb: 1, textAlign: 'center' }}>
          Everything included in every plan
        </Typography>
        <Typography sx={{ color: TEXT_SECONDARY, mb: 5, textAlign: 'center', maxWidth: 480, mx: 'auto' }}>
          No feature gates. No artificial limits. Just pay for the sessions you run.
        </Typography>

        <Grid2 container spacing={2}>
          {INCLUDED_FEATURES.map((feature) => (
            <Grid2 key={feature} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 2, borderRadius: '10px', bgcolor: SURFACE }}>
                <CheckIcon sx={{ color: EMERALD, fontSize: 20 }} />
                <Typography sx={{ color: TEXT_PRIMARY, fontSize: '0.9rem', fontWeight: 500 }}>{feature}</Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

function FAQ() {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 10 }, bgcolor: SURFACE }}>
      <Container maxWidth="md">
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: TEXT_PRIMARY, mb: 5, textAlign: 'center' }}>
          Frequently asked questions
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {FAQ_ITEMS.map((item) => (
            <Box key={item.question} sx={{ p: 3, borderRadius: '12px', bgcolor: CARD, border: `1px solid ${BORDER}` }}>
              <Typography sx={{ fontWeight: 600, color: TEXT_PRIMARY, mb: 1 }}>{item.question}</Typography>
              <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.7 }}>{item.answer}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function CTA() {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 10 }, bgcolor: CARD, borderTop: `1px solid ${BORDER}`, textAlign: 'center' }}>
      <Container maxWidth="sm">
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: TEXT_PRIMARY, mb: 2 }}>Ready to get started?</Typography>
        <Typography sx={{ color: TEXT_SECONDARY, mb: 4, maxWidth: 400, mx: 'auto' }}>
          Create your free account and deploy your first agent in minutes. No credit card required.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            href="https://app.svantic.com/signup"
            sx={{
              bgcolor: BRAND_PRIMARY,
              px: 4,
              py: 1.5,
              borderRadius: '10px',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': { bgcolor: BRAND_PRIMARY_HOVER },
            }}
          >
            Start Free
          </Button>
          <Button
            variant="outlined"
            href="/contact"
            sx={{
              borderColor: BORDER,
              color: TEXT_PRIMARY,
              px: 4,
              py: 1.5,
              borderRadius: '10px',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': { borderColor: BRAND_PRIMARY, bgcolor: `${BRAND_PRIMARY}08` },
            }}
          >
            Talk to Sales
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
