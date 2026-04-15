'use client';

import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG,
} from '@/theme/theme';

const USE_CASES = [
  {
    slug: 'customer-support',
    category: 'Customer Support',
    title: 'Resolve tickets 24/7 with AI agents that actually close issues.',
    description: 'Generate a Zendesk or Intercom agent in minutes. The mesh orchestrates CRM lookup, knowledge search, and resolution. Guardrails enforce approval for high-value customers.',
    stats: [
      { value: '60%', label: 'Reduction in resolution time' },
      { value: '24/7', label: 'Coverage without staffing' },
      { value: '85%', label: 'First-contact resolution' },
    ],
    color: '#8b5cf6',
  },
  {
    slug: 'devops',
    category: 'DevOps & CI/CD',
    title: 'Diagnose incidents before your team opens Slack.',
    description: 'Compose a Datadog + PagerDuty + GitHub agent. The mesh detects anomalies, diagnoses root cause, generates a fix, and opens a PR — all before the on-call engineer wakes up.',
    stats: [
      { value: '90%', label: 'Faster incident detection' },
      { value: '4x', label: 'Reduction in MTTR' },
      { value: '70%', label: 'Incidents auto-resolved' },
    ],
    color: '#0ea5e9',
  },
  {
    slug: 'document-processing',
    category: 'Document Processing',
    title: 'Intake, extract, validate, route — no hand-offs to chase.',
    description: 'Specialized agents for each step: intake, extraction, validation, routing. The knowledge store learns document layouts over time. The mesh plans the workflow dynamically.',
    stats: [
      { value: '95%', label: 'Extraction accuracy' },
      { value: '10x', label: 'Faster processing' },
      { value: '0', label: 'Manual hand-offs' },
    ],
    color: '#10b981',
  },
  {
    slug: 'compliance',
    category: 'Compliance & Audit',
    title: '"What did the AI decide and why?" — answered in one click.',
    description: 'Built-in telemetry traces every agent action, tool call, and LLM decision. Guardrails enforce policies before execution. Audit trails are immutable and queryable.',
    stats: [
      { value: '100%', label: 'Decision traceability' },
      { value: '80%', label: 'Reduction in audit prep' },
      { value: 'SOC 2', label: 'Compliant by default' },
    ],
    color: '#f59e0b',
  },
  {
    slug: 'sales-operations',
    category: 'Sales Operations',
    title: 'Enrich leads, update CRM, and qualify prospects automatically.',
    description: 'Agents that scrape public data, enrich lead profiles, score prospects, and update Salesforce — all without manual data entry. Your sales team focuses on selling.',
    stats: [
      { value: '5x', label: 'Lead enrichment speed' },
      { value: '40%', label: 'More qualified leads' },
      { value: '0', label: 'CRM data entry' },
    ],
    color: '#ec4899',
  },
  {
    slug: 'finance',
    category: 'Finance & Accounting',
    title: 'Reconcile transactions and generate reports instantly.',
    description: 'Agents that pull data from banks, ERP systems, and payment processors. Automated reconciliation, exception handling, and financial reporting.',
    stats: [
      { value: '99.9%', label: 'Reconciliation accuracy' },
      { value: '8hrs', label: 'Saved per month-end' },
      { value: 'Real-time', label: 'Financial visibility' },
    ],
    color: '#06b6d4',
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Hero />
      <UseCasesList />
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
          Use Cases
        </Typography>
        <Typography sx={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT_PRIMARY, lineHeight: 1.15, mb: 2 }}>
          What teams are building.
        </Typography>
        <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1.1rem', maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
          From support automation to compliance pipelines — real patterns running in production across industries.
        </Typography>
      </Container>
    </Box>
  );
}

function UseCasesList() {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 12 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {USE_CASES.map((uc, i) => (
            <motion.div
              key={uc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Box
                component="a"
                href={`/use-cases/${uc.slug}`}
                sx={{
                  display: 'block',
                  p: { xs: 4, md: 5 },
                  borderRadius: '20px',
                  bgcolor: CARD,
                  border: `1px solid ${BORDER}`,
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: `${uc.color}40`,
                    boxShadow: `0 12px 40px ${uc.color}15`,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: 5, height: '100%', bgcolor: uc.color }} />

                <Grid2 container spacing={4} alignItems="center">
                  <Grid2 size={{ xs: 12, md: 7 }}>
                    <Typography sx={{ color: uc.color, fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 2 }}>
                      {uc.category}
                    </Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: '1.25rem', md: '1.5rem' }, color: TEXT_PRIMARY, mb: 2, lineHeight: 1.3 }}>
                      {uc.title}
                    </Typography>
                    <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1rem', lineHeight: 1.7 }}>
                      {uc.description}
                    </Typography>
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 5 }}>
                    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                      {uc.stats.map((stat) => (
                        <Box key={stat.label} sx={{ textAlign: 'center', minWidth: 80 }}>
                          <Typography sx={{ fontWeight: 800, fontSize: '1.5rem', color: uc.color }}>{stat.value}</Typography>
                          <Typography sx={{ color: TEXT_MUTED, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid2>
                </Grid2>
              </Box>
            </motion.div>
          ))}
        </Box>
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
          Don't see your use case?
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto' }}>
          Svantic is flexible enough to handle almost any automation challenge. Let's talk about what you're trying to build.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            href="/contact"
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
            Talk to Us
          </Button>
          <Button
            variant="outlined"
            href="https://app.svantic.com/signup"
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
            Start Building
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
