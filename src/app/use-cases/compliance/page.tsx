'use client';

import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG, EMERALD,
} from '@/theme/theme';

const STATS = [
  { value: '100%', label: 'Decision traceability' },
  { value: '80%', label: 'Reduction in audit prep' },
  { value: 'SOC 2', label: 'Compliant by default' },
  { value: 'Real-time', label: 'Policy enforcement' },
];

const CAPABILITIES = [
  'Complete audit trails for every agent action',
  'Policy enforcement before execution',
  'Role-based access control (RBAC)',
  'Sensitive data masking in logs',
  'Approval workflows for high-risk actions',
  'Export to SIEM and compliance tools',
];

const WORKFLOW_STEPS = [
  { step: '01', title: 'Define Policies', description: 'Declarative guardrails specify what agents can and cannot do. Version-controlled and auditable.' },
  { step: '02', title: 'Enforce', description: 'Every action is validated against policies before execution. Violations are blocked, not just logged.' },
  { step: '03', title: 'Trace', description: 'Full audit trail: who requested what, which agent executed, what tools were called, what data was accessed.' },
  { step: '04', title: 'Approve', description: 'High-risk actions trigger approval workflows. Reviewers see full context and can approve with one click.' },
  { step: '05', title: 'Report', description: 'Generate compliance reports on demand. Filter by time, agent, action type, or user.' },
  { step: '06', title: 'Improve', description: 'Analyze patterns to refine policies. Identify gaps before auditors do.' },
];

export default function CompliancePage() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Capabilities />
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
        <Typography
          sx={{ color: '#f59e0b', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}
        >
          Use Case
        </Typography>
        <Typography variant="h1" sx={{ color: '#f8fafc', mb: 3, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, maxWidth: 700 }}>
          Compliance & Audit
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: 600, mb: 4 }}>
          "What did the AI decide and why?" — answered in one click. Built-in governance, audit trails, 
          and policy enforcement for regulated industries.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            href="https://app.svantic.com/signup"
            sx={{ bgcolor: BRAND_PRIMARY, fontWeight: 600, borderRadius: '10px', px: 4, py: 1.5, textTransform: 'none', '&:hover': { bgcolor: BRAND_PRIMARY_HOVER } }}
          >
            Start Building
          </Button>
          <Button
            variant="outlined"
            href="/contact"
            sx={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff', borderRadius: '10px', px: 4, py: 1.5, textTransform: 'none', '&:hover': { borderColor: 'rgba(255,255,255,0.4)' } }}
          >
            Talk to Sales
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

function Stats() {
  return (
    <Box sx={{ width: '100%', py: { xs: 6, md: 8 }, bgcolor: CARD, borderBottom: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          {STATS.map((stat, i) => (
            <Grid2 key={stat.label} size={{ xs: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#f59e0b', mb: 0.5 }}>{stat.value}</Typography>
                  <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</Typography>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

function HowItWorks() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            How It Works
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 2 }}>
            Governance built in, not bolted on.
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, maxWidth: 560, mx: 'auto' }}>
            Every agent action is traceable, every policy is enforced, every decision is explainable.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {WORKFLOW_STEPS.map((step, i) => (
            <Grid2 key={step.step} size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ height: '100%' }}
              >
                <Box sx={{ p: 4, borderRadius: '16px', bgcolor: CARD, border: `1px solid ${BORDER}`, height: '100%' }}>
                  <Typography sx={{ color: '#f59e0b', fontWeight: 800, fontSize: '0.85rem', mb: 2 }}>{step.step}</Typography>
                  <Typography sx={{ fontWeight: 700, color: TEXT_PRIMARY, fontSize: '1.1rem', mb: 1 }}>{step.title}</Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.7 }}>{step.description}</Typography>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

function Capabilities() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: CARD, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={6} alignItems="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
              Capabilities
            </Typography>
            <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 3 }}>
              Enterprise-grade compliance.
            </Typography>
            <Typography sx={{ color: TEXT_SECONDARY, mb: 4, lineHeight: 1.8 }}>
              SOC 2 Type II certified. GDPR and HIPAA ready. Built for regulated industries from day one.
            </Typography>
            <Button
              href="/security"
              sx={{ color: BRAND_PRIMARY, fontWeight: 600, textTransform: 'none', p: 0 }}
            >
              Learn about our security →
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {CAPABILITIES.map((cap) => (
                <Box key={cap} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, borderRadius: '10px', bgcolor: SURFACE }}>
                  <CheckIcon sx={{ color: EMERALD, fontSize: 20 }} />
                  <Typography sx={{ color: TEXT_PRIMARY, fontSize: '0.95rem' }}>{cap}</Typography>
                </Box>
              ))}
            </Box>
          </Grid2>
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
          Ready for compliant AI automation?
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto' }}>
          Deploy AI agents your compliance team will love. Built-in governance from day one.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            href="https://app.svantic.com/signup"
            sx={{ bgcolor: BRAND_PRIMARY, fontWeight: 600, borderRadius: '10px', px: 4, py: 1.5, textTransform: 'none', '&:hover': { bgcolor: BRAND_PRIMARY_HOVER } }}
          >
            Start Building Free
          </Button>
          <Button
            variant="outlined"
            href="/contact"
            sx={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff', borderRadius: '10px', px: 4, py: 1.5, textTransform: 'none', '&:hover': { borderColor: 'rgba(255,255,255,0.4)' } }}
          >
            Schedule Demo
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
