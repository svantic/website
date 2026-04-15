'use client';

import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG, ACCENT_LIGHT, ACCENT_PINK, EMERALD,
} from '@/theme/theme';

const FEATURES = [
  {
    category: 'Build',
    items: [
      {
        title: 'Forge',
        description: 'Generate production-ready agent code from an OpenAPI spec, TypeScript source, or plain English. Tool specs, capabilities, triggers — in seconds.',
        color: '#0ea5e9',
      },
      {
        title: 'SDK',
        description: 'Turn any existing application into an A2A-compliant agent with five lines of code. Define capabilities, start the server, connect to the mesh.',
        color: EMERALD,
      },
      {
        title: 'Tool Specifications',
        description: 'Declarative tool definitions that describe inputs, outputs, and behaviors. Version-controlled, testable, and portable.',
        color: '#8b5cf6',
      },
    ],
  },
  {
    category: 'Orchestrate',
    items: [
      {
        title: 'Mesh',
        description: 'A multi-agent runtime that plans, decomposes, executes, and evaluates. The workflow emerges from the task — not a fixed script.',
        color: BRAND_PRIMARY,
      },
      {
        title: 'Knowledge Store',
        description: 'Institutional memory that survives sessions and deployments. Navigation patterns, document layouts, failure playbooks — agents learn what works.',
        color: '#f59e0b',
      },
      {
        title: 'Session Management',
        description: 'Long-running conversations with context preservation. Resume sessions, branch workflows, and maintain state across interactions.',
        color: '#06b6d4',
      },
    ],
  },
  {
    category: 'Observe & Govern',
    items: [
      {
        title: 'Dashboard & Telemetry',
        description: 'Every agent action, tool call, LLM decision, and token spend — traced and surfaced in real time. If you can\'t see it, you can\'t trust it.',
        color: '#0ea5e9',
      },
      {
        title: 'Guardrails & Policies',
        description: 'Policies enforced before actions execute. Identity, boundaries, least-privilege, and approval workflows — autonomous agents inside the rules.',
        color: ACCENT_PINK,
      },
      {
        title: 'Approval Workflows',
        description: 'Human-in-the-loop for sensitive operations. Slack, email, or dashboard approvals with full context and one-click actions.',
        color: '#10b981',
      },
    ],
  },
];

const INTEGRATIONS = [
  'Zendesk', 'Intercom', 'Salesforce', 'HubSpot', 'Slack', 'GitHub', 'GitLab', 'Jira',
  'Datadog', 'PagerDuty', 'AWS', 'GCP', 'Azure', 'Stripe', 'Twilio', 'SendGrid',
];

export default function FeaturesPage() {
  return (
    <>
      <Hero />
      <FeaturesList />
      <Integrations />
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
        <Typography sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
          Features
        </Typography>
        <Typography sx={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT_PRIMARY, lineHeight: 1.15, mb: 2 }}>
          Everything you need to build production AI agents.
        </Typography>
        <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1.1rem', maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
          Build, orchestrate, observe, and govern — from the same platform. No glue code, no infrastructure to manage.
        </Typography>
      </Container>
    </Box>
  );
}

function FeaturesList() {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 12 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        {FEATURES.map((section, sectionIndex) => (
          <Box key={section.category} sx={{ mb: sectionIndex < FEATURES.length - 1 ? 10 : 0 }}>
            <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 4 }}>
              {section.category}
            </Typography>

            <Grid2 container spacing={3}>
              {section.items.map((feature, i) => (
                <Grid2 key={feature.title} size={{ xs: 12, md: 4 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
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
                        '&:hover': {
                          borderColor: `${feature.color}40`,
                          boxShadow: `0 8px 24px ${feature.color}10`,
                        },
                      }}
                    >
                      <Box sx={{ width: 4, height: 32, borderRadius: 1, bgcolor: feature.color, mb: 3 }} />
                      <Typography sx={{ fontWeight: 700, fontSize: '1.15rem', color: TEXT_PRIMARY, mb: 1.5 }}>
                        {feature.title}
                      </Typography>
                      <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.95rem', lineHeight: 1.7 }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

function Integrations() {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 10 }, bgcolor: CARD, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Integrations
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 2 }}>
            Connect to everything.
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, maxWidth: 500, mx: 'auto' }}>
            Forge can generate agents from any API. Here are some of the most popular integrations teams are building.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          {INTEGRATIONS.map((integration) => (
            <Box
              key={integration}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: '10px',
                bgcolor: SURFACE,
                border: `1px solid ${BORDER}`,
                fontSize: '0.9rem',
                fontWeight: 500,
                color: TEXT_SECONDARY,
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: BRAND_PRIMARY,
                  color: TEXT_PRIMARY,
                },
              }}
            >
              {integration}
            </Box>
          ))}
        </Box>

        <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem', textAlign: 'center', mt: 4 }}>
          + any service with an API
        </Typography>
      </Container>
    </Box>
  );
}

function CTA() {
  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 10, md: 14 },
        background: `linear-gradient(180deg, ${CODE_BG} 0%, #0f172a 100%)`,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ color: '#f8fafc', mb: 3 }}>
          Ready to build?
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto' }}>
          Start with our free tier. Deploy your first agent in minutes.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            href="https://app.svantic.com/signup"
            sx={{
              bgcolor: BRAND_PRIMARY,
              fontWeight: 600,
              borderRadius: '10px',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              '&:hover': { bgcolor: BRAND_PRIMARY_HOVER },
            }}
          >
            Start Building Free
          </Button>
          <Button
            variant="outlined"
            href="https://docs.svantic.com"
            target="_blank"
            sx={{
              borderColor: 'rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.85)',
              borderRadius: '10px',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              '&:hover': { borderColor: 'rgba(255,255,255,0.35)', bgcolor: 'rgba(255,255,255,0.06)' },
            }}
          >
            Read the Docs
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
