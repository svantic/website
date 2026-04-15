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
    title: 'Every ticket references different systems',
    description: "Customer mentions Salesforce, another mentions HubSpot, another a custom portal. Static routing can't know which tool to call.",
  },
  {
    title: 'Resolution paths vary by context',
    description: 'Refund? Check order status, then payment method, then policy. Exchange? Different path. The right sequence depends on what you find.',
  },
  {
    title: 'Knowledge compounds',
    description: 'The 10,000th "how do I reset my password?" should resolve faster than the 10th. Patterns emerge. Exceptions get logged.',
  },
  {
    title: 'Escalation needs judgment',
    description: 'Not every edge case should escalate. Learning which edge cases resolve vs. escalate requires context that static rules miss.',
  },
];

const WHEN_SVANTIC = [
  'You resolve tickets across 10+ different customer-facing systems',
  'Each ticket requires context assembly from multiple sources',
  'You process thousands of tickets per month',
  'Resolution quality matters as much as speed',
  'You need audit trails of what was done and why',
];

const WHEN_STATIC = [
  'All tickets fit into 3-5 fixed categories',
  'Resolution is the same steps every time',
  'You handle fewer than 100 tickets/month',
  'All your data is in one system',
];

export default function CustomerSupportPage() {
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
            'linear-gradient(hsl(200 83% 58% / 0.35) 1px, transparent 1px), ' +
            'linear-gradient(90deg, hsl(200 83% 58% / 0.35) 1px, transparent 1px)',
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
            sx={{ color: '#0ea5e9', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}
          >
            Customer Support Automation
          </Typography>
          <Typography variant="h1" sx={{ color: '#f8fafc', mb: 3, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.2 }}>
            When every ticket touches different systems and requires different steps.
          </Typography>
          <Typography sx={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
            Static support automation works when tickets are predictable. But most support teams deal with tickets 
            that span multiple systems, require judgment calls, and benefit from learning.
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
            Why Static Automation Falls Short
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, maxWidth: 600 }}>
            Support isn't a flowchart. It's context-dependent judgment.
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
              Stick With Static Automation When
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
      title: 'Ticket Intake',
      description: 'Agent reads the ticket, identifies the intent, and determines which systems need to be consulted.',
    },
    {
      step: '02',
      title: 'Context Assembly',
      description: 'Pulls relevant data from CRM, order system, billing, previous tickets — whatever the specific case needs.',
    },
    {
      step: '03',
      title: 'Resolution or Escalation',
      description: 'Takes action (refund, update, clarification) or escalates with full context. Learns from each outcome.',
    },
    {
      step: '04',
      title: 'Knowledge Capture',
      description: 'Resolution patterns, edge cases, and exceptions are logged to the Knowledge Store for future reference.',
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
            Dynamic resolution, not static routing.
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
          See if your support workflow fits.
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto' }}>
          Take our quick assessment or talk to us about your specific support challenges.
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
