'use client';

import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG, ACCENT_LIGHT, EMERALD,
} from '@/theme/theme';

const STEPS = [
  {
    step: '01',
    title: 'Generate with Forge',
    description: 'Point Forge at an OpenAPI spec, TypeScript file, or describe what you need in plain English. It generates tool specifications, capability definitions, and scaffolded agent projects.',
    code: `$ svantic forge tool --spec zendesk.yaml --out ./tools/
$ svantic forge agent --name support-bot --tools ./tools/*.yaml`,
    color: '#0ea5e9',
  },
  {
    step: '02',
    title: 'Connect with the SDK',
    description: 'The SDK turns any existing service into an A2A-compliant agent. Define capabilities, register with the mesh, and your service is now AI-callable.',
    code: `const agent = new Agent({ name: 'support-bot', port: 4000 });
agent.define_capability({ name: 'get_ticket', handler });
await agent.start();`,
    color: EMERALD,
  },
  {
    step: '03',
    title: 'Orchestrate on the Mesh',
    description: 'The mesh is a multi-agent runtime that plans, decomposes, executes, and evaluates. Complex workflows emerge from simple tasks — no fixed scripts needed.',
    code: `// Mesh automatically coordinates agents
// User: "Resolve ticket #12345"
// → Planner: CRM lookup + KB search + compose response
// → Executor: Call agents in sequence
// → Critic: Validate resolution`,
    color: BRAND_PRIMARY,
  },
  {
    step: '04',
    title: 'Learn and Remember',
    description: 'The Knowledge Store observes every execution and distills it into reusable patterns. What worked, what failed, what to avoid — all indexed and searchable.',
    code: `// Knowledge compounds over time
// Execution 1: Learn Zendesk ticket structure
// Execution 100: Recognize common patterns
// Execution 10,000: Optimal resolution strategies`,
    color: '#f59e0b',
  },
  {
    step: '05',
    title: 'Govern and Observe',
    description: 'Guardrails enforce policies before actions execute. The dashboard traces every decision. Approval workflows keep humans in the loop for sensitive operations.',
    code: `// Guardrails run before every action
{
  "policy": "require_approval",
  "when": "ticket.value > 10000",
  "notify": ["slack:#approvals"]
}`,
    color: '#ec4899',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Hero />
      <Steps />
      <Architecture />
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
          How It Works
        </Typography>
        <Typography sx={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT_PRIMARY, lineHeight: 1.15, mb: 2 }}>
          From zero to production in minutes.
        </Typography>
        <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1.1rem', maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
          Build agents that wrap your existing services with AI intelligence, orchestrate them on the mesh, and govern them in production.
        </Typography>
      </Container>
    </Box>
  );
}

function Steps() {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 12 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Grid2
              container
              spacing={6}
              alignItems="center"
              sx={{ mb: i < STEPS.length - 1 ? 10 : 0, flexDirection: i % 2 === 1 ? 'row-reverse' : 'row' }}
            >
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      bgcolor: `${step.color}15`,
                      border: `1px solid ${step.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ color: step.color, fontWeight: 800, fontSize: '1rem' }}>{step.step}</Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.35rem', color: TEXT_PRIMARY }}>{step.title}</Typography>
                </Box>
                <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1.05rem', lineHeight: 1.75 }}>{step.description}</Typography>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    bgcolor: CODE_BG,
                    borderRadius: '14px',
                    p: 3,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.85rem',
                    lineHeight: 1.8,
                    color: '#E2E8F0',
                    border: `1px solid ${step.color}25`,
                    whiteSpace: 'pre-wrap',
                    overflow: 'auto',
                  }}
                >
                  {step.code}
                </Box>
              </Grid2>
            </Grid2>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
}

function Architecture() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: CARD, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Architecture
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 2 }}>
            The flipped tool model.
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, maxWidth: 600, mx: 'auto' }}>
            Unlike other frameworks where tools run on the server, Svantic executes tools on your infrastructure. The mesh orchestrates, but your data never leaves your environment.
          </Typography>
        </Box>

        <Grid2 container spacing={4}>
          {[
            { title: 'Your Infrastructure', items: ['Tools execute locally', 'Data stays behind your firewall', 'Credentials never leave your environment', 'Full control over execution'] },
            { title: 'Svantic Mesh', items: ['Orchestrates multi-agent workflows', 'Plans and decomposes tasks', 'Evaluates and validates results', 'Routes messages between agents'] },
            { title: 'Knowledge & Governance', items: ['Persistent knowledge store', 'Policy enforcement', 'Audit trails', 'Approval workflows'] },
          ].map((col) => (
            <Grid2 key={col.title} size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 4, borderRadius: '16px', bgcolor: SURFACE, border: `1px solid ${BORDER}`, height: '100%' }}>
                <Typography sx={{ fontWeight: 700, color: TEXT_PRIMARY, fontSize: '1.1rem', mb: 3 }}>{col.title}</Typography>
                {col.items.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: BRAND_PRIMARY }} />
                    <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.95rem' }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid2>
          ))}
        </Grid2>
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
