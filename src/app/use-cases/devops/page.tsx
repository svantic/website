'use client';

import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG, EMERALD,
} from '@/theme/theme';

const STATS = [
  { value: '90%', label: 'Faster incident detection' },
  { value: '4x', label: 'Reduction in MTTR' },
  { value: '70%', label: 'Incidents auto-resolved' },
  { value: '24/7', label: 'Monitoring coverage' },
];

const CAPABILITIES = [
  'Real-time anomaly detection and alerting',
  'Automated root cause analysis',
  'Self-healing infrastructure responses',
  'PR generation for common fixes',
  'Runbook automation and execution',
  'Integration with PagerDuty, Datadog, GitHub',
];

const WORKFLOW_STEPS = [
  { step: '01', title: 'Monitor', description: 'Agents continuously monitor your infrastructure via Datadog, CloudWatch, or Prometheus integrations.' },
  { step: '02', title: 'Detect', description: 'Anomaly detection identifies issues before they become incidents — CPU spikes, memory leaks, error rate increases.' },
  { step: '03', title: 'Diagnose', description: 'Root cause analysis correlates logs, metrics, and recent deployments to pinpoint the issue.' },
  { step: '04', title: 'Remediate', description: 'Executes automated fixes: scales infrastructure, restarts services, rolls back deployments.' },
  { step: '05', title: 'Document', description: 'Generates incident report with timeline, root cause, and resolution steps.' },
  { step: '06', title: 'Learn', description: 'Patterns are stored in Knowledge Store to prevent future incidents and speed up diagnosis.' },
];

export default function DevOpsPage() {
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
          sx={{ color: '#0ea5e9', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}
        >
          Use Case
        </Typography>
        <Typography variant="h1" sx={{ color: '#f8fafc', mb: 3, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, maxWidth: 700 }}>
          DevOps & Incident Response
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: 600, mb: 4 }}>
          AI agents that detect, diagnose, and resolve infrastructure issues before your team wakes up. 
          A build failed at 2am? Your agents diagnosed it by 2:01.
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
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#0ea5e9', mb: 0.5 }}>{stat.value}</Typography>
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
            From alert to resolution, automatically.
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, maxWidth: 560, mx: 'auto' }}>
            Your DevOps agent doesn't just alert — it fixes. Here's the workflow.
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
                  <Typography sx={{ color: '#0ea5e9', fontWeight: 800, fontSize: '0.85rem', mb: 2 }}>{step.step}</Typography>
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
              Self-healing infrastructure.
            </Typography>
            <Typography sx={{ color: TEXT_SECONDARY, mb: 4, lineHeight: 1.8 }}>
              Connect your monitoring stack and let agents handle the rest. Works with your existing tools.
            </Typography>
            <Button
              href="https://docs.svantic.com/use-cases/devops"
              sx={{ color: BRAND_PRIMARY, fontWeight: 600, textTransform: 'none', p: 0 }}
            >
              Read the documentation →
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
          Ready for self-healing infrastructure?
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto' }}>
          Connect your Datadog, PagerDuty, and GitHub in minutes. Start with our free tier.
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
