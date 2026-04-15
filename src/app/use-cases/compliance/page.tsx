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
    title: 'Regulations reference multiple systems',
    description: "Checking a single compliance requirement may require pulling data from HR, finance, IT, and legal. Static checklists don't assemble context.",
  },
  {
    title: 'Requirements change constantly',
    description: 'New regulations, updated guidance, evolving interpretations. Hard-coded rules become stale; learning systems adapt.',
  },
  {
    title: 'Evidence gathering is the bottleneck',
    description: "Auditors don't ask hard questions — they ask for evidence. Assembling it from 20 sources is where time goes.",
  },
  {
    title: 'Exceptions need judgment',
    description: 'Is this deviation a violation or an acceptable exception? Context matters. Static rules either over-flag or under-flag.',
  },
];

const WHEN_SVANTIC = [
  'Compliance checks span 10+ internal systems',
  'You prepare for audits multiple times per year',
  'Regulations evolve frequently in your industry',
  'Evidence gathering takes significant manual effort',
  'You need comprehensive audit trails',
];

const WHEN_STATIC = [
  'You have a single, stable regulatory framework',
  'All data lives in one GRC platform',
  'Audits are infrequent (annually or less)',
  'Compliance is a checkbox, not continuous monitoring',
];

export default function CompliancePage() {
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
            'linear-gradient(hsl(270 83% 58% / 0.35) 1px, transparent 1px), ' +
            'linear-gradient(90deg, hsl(270 83% 58% / 0.35) 1px, transparent 1px)',
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
            sx={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}
          >
            Compliance & Audit
          </Typography>
          <Typography variant="h1" sx={{ color: '#f8fafc', mb: 3, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.2 }}>
            When compliance evidence is scattered across dozens of systems.
          </Typography>
          <Typography sx={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
            GRC platforms track what you need to prove. But proving it requires assembling evidence from 
            systems those platforms don't touch — and regulations change faster than your integrations.
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
            Why Static Compliance Tools Fall Short
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, maxWidth: 600 }}>
            Compliance isn't tracking controls. It's proving them.
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
              Stick With GRC Platforms When
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
      title: 'Requirement Mapping',
      description: 'Agent understands the regulation, identifies required evidence, and maps to your internal systems.',
    },
    {
      step: '02',
      title: 'Evidence Assembly',
      description: 'Pulls relevant data from each system — access logs, config snapshots, approval records, audit trails.',
    },
    {
      step: '03',
      title: 'Gap Identification',
      description: 'Compares evidence against requirements. Flags gaps, suggests remediation, surfaces exceptions for review.',
    },
    {
      step: '04',
      title: 'Audit Readiness',
      description: 'Packages evidence for auditors. Updates as regulations change. Learns from audit findings.',
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
            Evidence assembly, not checklist tracking.
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
          See if your compliance workflow fits.
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto' }}>
          Take our quick assessment or talk to us about your specific compliance challenges.
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
