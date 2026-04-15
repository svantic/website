'use client';

import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG, EMERALD,
} from '@/theme/theme';

const STATS = [
  { value: '95%', label: 'Extraction accuracy' },
  { value: '10x', label: 'Faster processing' },
  { value: '0', label: 'Manual hand-offs' },
  { value: '50%', label: 'Cost reduction' },
];

const CAPABILITIES = [
  'Multi-format document ingestion (PDF, images, scans)',
  'Intelligent field extraction with confidence scores',
  'Cross-document validation and reconciliation',
  'Automatic routing based on document type',
  'Exception handling with human review queues',
  'Learning from corrections to improve over time',
];

const WORKFLOW_STEPS = [
  { step: '01', title: 'Intake', description: 'Documents arrive via email, upload, or API. Agent identifies document type and queues for processing.' },
  { step: '02', title: 'Extract', description: 'AI extracts structured data from unstructured documents — invoices, contracts, forms, IDs.' },
  { step: '03', title: 'Validate', description: 'Cross-references extracted data against existing records, flags discrepancies for review.' },
  { step: '04', title: 'Enrich', description: 'Augments data with lookups from external systems — company info, address verification, etc.' },
  { step: '05', title: 'Route', description: 'Sends validated data to downstream systems — ERP, CRM, databases — or human review if needed.' },
  { step: '06', title: 'Learn', description: 'Document layouts and extraction patterns are indexed for faster, more accurate future processing.' },
];

export default function DocumentProcessingPage() {
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
          sx={{ color: '#10b981', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}
        >
          Use Case
        </Typography>
        <Typography variant="h1" sx={{ color: '#f8fafc', mb: 3, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, maxWidth: 700 }}>
          Intelligent Document Processing
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: 600, mb: 4 }}>
          Intake, extract, validate, route — no hand-offs to chase. AI agents that process documents at scale 
          while learning from every correction.
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
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981', mb: 0.5 }}>{stat.value}</Typography>
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
            From document to data, automatically.
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, maxWidth: 560, mx: 'auto' }}>
            Specialized agents for each step. The knowledge store learns document layouts over time.
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
                  <Typography sx={{ color: '#10b981', fontWeight: 800, fontSize: '0.85rem', mb: 2 }}>{step.step}</Typography>
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
              Document intelligence that learns.
            </Typography>
            <Typography sx={{ color: TEXT_SECONDARY, mb: 4, lineHeight: 1.8 }}>
              Every correction improves future extractions. The 50,000th document is easier than the 100th.
            </Typography>
            <Button
              href="https://docs.svantic.com/use-cases/document-processing"
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
          Ready to automate document processing?
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto' }}>
          Start processing invoices, contracts, and forms in minutes. Free tier included.
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
