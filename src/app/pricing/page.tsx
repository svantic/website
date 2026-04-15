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
    description: 'Get started with AI agent orchestration.',
    price: '$0',
    period: 'forever',
    cta: 'Get Started Free',
    cta_href: 'https://app.svantic.com/signup',
    highlighted: false,
    limits: {
      compute_units: '25 CU/month',
      compute_tokens: '(2.5M tokens)',
      sessions: '3 concurrent sessions',
      retention: '7-day trace retention',
      overage: 'Upgrade to continue',
    },
  },
  {
    name: 'Pro',
    description: 'For teams building production workflows.',
    price: '$199',
    period: '/month',
    cta: 'Start Free Trial',
    cta_href: 'https://app.svantic.com/signup?plan=pro',
    highlighted: true,
    badge: 'Most Popular',
    limits: {
      compute_units: '100 CU/month',
      compute_tokens: '(10M tokens)',
      sessions: '15 concurrent sessions',
      retention: '30-day trace retention',
      overage: '$0.30/CU overage',
    },
  },
  {
    name: 'Team',
    description: 'For organizations scaling AI automation.',
    price: '$699',
    period: '/month',
    cta: 'Start Free Trial',
    cta_href: 'https://app.svantic.com/signup?plan=team',
    highlighted: false,
    limits: {
      compute_units: '500 CU/month',
      compute_tokens: '(50M tokens)',
      sessions: '50 concurrent sessions',
      retention: '90-day trace retention',
      overage: '$0.25/CU overage',
    },
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large deployments.',
    price: '$2,500',
    period: '/month+',
    cta: 'Contact Sales',
    cta_href: '/contact?plan=enterprise',
    highlighted: false,
    limits: {
      compute_units: '2,500+ CU/month',
      compute_tokens: '(250M+ tokens)',
      sessions: 'Unlimited sessions',
      retention: 'Custom retention',
      overage: 'Volume discounts',
    },
  },
];

const INCLUDED_FEATURES = [
  'Unlimited agents',
  'Unlimited knowledge storage',
  'Unlimited team members',
  'All guardrails & policies',
  'Approval workflows',
  'Slack & webhook notifications',
  'Full API access',
  'Dashboard & analytics',
];

const FAQ_ITEMS = [
  {
    question: 'What is a Compute Unit (CU)?',
    answer: 'A Compute Unit represents 100,000 tokens of AI processing. This includes reasoning, planning, knowledge retrieval, and tool coordination. Simple tasks like answering a question use ~0.3 CU, while complex tasks like processing a multi-page document or navigating a web portal may use 2-10 CU.',
  },
  {
    question: 'What counts as a concurrent session?',
    answer: "A session is an active conversation or workflow with your agents. Concurrent sessions are the number of sessions running at the same time. When a session completes, that slot is freed up for new sessions.",
  },
  {
    question: 'What happens if I exceed my Compute Units?',
    answer: "On Free, you'll be prompted to upgrade. On Pro and Team, overage is billed at the rates shown ($0.30/CU for Pro, $0.25/CU for Team). You can set spending alerts and caps in your dashboard to control costs.",
  },
  {
    question: 'Is there really no limit on agents or storage?',
    answer: 'Correct! You can deploy as many agents as you need and store unlimited knowledge. We only meter compute usage (CU) and concurrent sessions to keep pricing simple and predictable.',
  },
  {
    question: 'Do you offer discounts for startups or nonprofits?',
    answer: 'Yes! Contact us at hello@svantic.com with details about your organization. We offer up to 50% off for qualifying startups and nonprofits.',
  },
  {
    question: 'What does Enterprise pricing look like?',
    answer: 'Enterprise starts at $2,500/month with 2,500 CU included and volume discounts on overage (as low as $0.15/CU). We offer custom SLAs, dedicated infrastructure, and compliance features. Contact sales for a quote.',
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
          Simple, usage-based pricing
        </Typography>
        <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1.1rem', maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
          Pay for compute, not features. Every plan includes unlimited agents, storage, and team members.
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
                    <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: TEXT_PRIMARY, mb: 0.25 }}>
                      {tier.limits.compute_units}
                    </Typography>
                    <Typography sx={{ color: TEXT_MUTED, fontSize: '0.8rem', mb: 1.5 }}>
                      {tier.limits.compute_tokens}
                    </Typography>
                    <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.875rem', mb: 0.75 }}>
                      {tier.limits.sessions}
                    </Typography>
                    <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.875rem', mb: 0.75 }}>
                      {tier.limits.retention}
                    </Typography>
                    <Typography
                      sx={{
                        color: tier.name === 'Free' ? TEXT_MUTED : BRAND_PRIMARY,
                        fontSize: '0.875rem',
                        fontWeight: 500,
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
          No feature gates. No artificial limits. Just pay for the compute you use.
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
