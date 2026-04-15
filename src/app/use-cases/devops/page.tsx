'use client';

import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG, EMERALD,
} from '@/theme/theme';

const WHY_DYNAMIC = [
  {
    title: "Incidents don't follow runbooks",
    description: 'The alert says "disk full" but the root cause is a log rotation config, a runaway process, or a misconfigured cron. Static playbooks miss the actual problem.',
  },
  {
    title: 'Context spans many systems',
    description: 'Understanding an incident requires correlating logs, metrics, deployments, config changes, and dependencies. Each incident needs different data.',
  },
  {
    title: 'Past incidents inform current ones',
    description: 'The third time you see "OOM in prod" should be easier than the first. Pattern recognition across incidents is where learning pays off.',
  },
  {
    title: 'Safe remediation requires judgment',
    description: 'Restart the service? Scale up? Rollback? The right action depends on context that changes every time. Static automation either over-remediates or under-remediates.',
  },
];

const WHEN_SVANTIC = [
  'You have 50+ services with different failure modes',
  'Incident resolution requires correlating multiple data sources',
  'You want to reduce MTTR without increasing risk',
  'On-call engineers spend time on repetitive diagnostics',
  'You need audit trails of incident response actions',
];

const WHEN_STATIC = [
  'You have fewer than 10 services in production',
  'Most incidents have known, fixed resolution paths',
  'Your infrastructure is highly standardized',
  'You handle fewer than 20 incidents per month',
];

export default function DevOpsPage() {
  return (
    <>
      <Hero />
      <WhyDynamic />
      <WhenToUse />
      <HowItWorks />
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
            'linear-gradient(hsl(30 83% 58% / 0.35) 1px, transparent 1px), ' +
            'linear-gradient(90deg, hsl(30 83% 58% / 0.35) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Link href="/use-cases" style={{ textDecoration: 'none' }}>
          <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem', mb: 3, '&:hover': { color: BRAND_PRIMARY } }}>
            ← All Use Cases
          </Typography>
        </Link>
        <Box sx={{ maxWidth: 800 }}>
          <Typography
            sx={{ color: '#f59e0b', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}
          >
            DevOps & Incident Response
          </Typography>
          <Typography variant="h1" sx={{ color: '#f8fafc', mb: 3, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.2 }}>
            When incidents don't follow your runbooks.
          </Typography>
          <Typography sx={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
            Runbook automation works for known scenarios. But most incidents involve unexpected combinations — 
            and resolution requires judgment, not just execution.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function WhyDynamic() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Why Static Runbooks Fall Short
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, maxWidth: 600 }}>
            Runbooks assume you know the problem. Incidents prove you don't.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {WHY_DYNAMIC.map((item, i) => (
            <Grid2 key={item.title} size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Box sx={{ p: 4, borderRadius: '16px', bgcolor: CARD, border: `1px solid ${BORDER}`, height: '100%' }}>
                  <Typography sx={{ fontWeight: 700, color: TEXT_PRIMARY, fontSize: '1.15rem', mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
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
              Use Svantic When
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {WHEN_SVANTIC.map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <CheckCircleOutlineIcon sx={{ color: EMERALD, fontSize: 22, mt: 0.25 }} />
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography sx={{ color: TEXT_MUTED, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
              Stick With Static Runbooks When
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {WHEN_STATIC.map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box sx={{ width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 0.25 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: TEXT_MUTED }} />
                  </Box>
                  <Typography sx={{ color: TEXT_MUTED, fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Alert Triage',
      description: "Agent receives alert, pulls context from monitoring, logs, and recent deployments to understand what's happening.",
    },
    {
      step: '02',
      title: 'Diagnostic Investigation',
      description: 'Follows the evidence — checks metrics, correlates with other services, identifies likely root cause.',
    },
    {
      step: '03',
      title: 'Safe Remediation',
      description: 'Proposes action with justification. Human approves (or agent acts within guardrails). Full audit trail.',
    },
    {
      step: '04',
      title: 'Post-Incident Learning',
      description: 'Resolution patterns, false positives, and new failure modes are captured for faster future response.',
    },
  ];

  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            How It Works
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY }}>
            Investigation, not just execution.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {steps.map((item, i) => (
            <Grid2 key={item.step} size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 800, fontSize: '2.5rem', mb: 2 }}>{item.step}</Typography>
                  <Typography sx={{ fontWeight: 700, color: TEXT_PRIMARY, mb: 1 }}>{item.title}</Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.6 }}>{item.description}</Typography>
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
          See if your incident workflow fits.
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto' }}>
          Take our quick assessment or talk to us about your specific DevOps challenges.
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
