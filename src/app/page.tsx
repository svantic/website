'use client';

import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG, ACCENT_LIGHT, ACCENT_PINK, EMERALD,
} from '@/theme/theme';

const ROTATING_PHRASES = [
  'Every system deserves a Savant.',
  'Agents that learn, adapt, and get smarter over time.',
  'Support tickets resolved end to end — not just triaged.',
  'Compliance checks in seconds, not days.',
  'Documents processed at scale with zero hand-offs.',
  'Incidents diagnosed before your team opens Slack.',
];

const USE_CASES = [
  {
    category: 'Customer Support',
    result: 'Generate a Zendesk agent in minutes. Resolve tickets 24/7.',
    body: 'Forge generates tools from the Zendesk API. The mesh orchestrates CRM lookup, knowledge search, and resolution.',
    color: '#8b5cf6',
    href: '/use-cases/customer-support',
  },
  {
    category: 'DevOps & CI/CD',
    result: 'A build failed at 2am. Your agents diagnosed it by 2:01.',
    body: 'Compose a Datadog + PagerDuty + GitHub agent. The mesh detects, diagnoses, generates a fix, and opens a PR.',
    color: '#0ea5e9',
    href: '/use-cases/devops',
  },
  {
    category: 'Document Processing',
    result: 'Intake, extract, validate, route — no hand-offs to chase.',
    body: 'Specialized agents for each step. The knowledge store learns document layouts over time.',
    color: '#10b981',
    href: '/use-cases/document-processing',
  },
  {
    category: 'Compliance & Audit',
    result: '"What did the AI decide and why?" — answered in one click.',
    body: 'Built-in telemetry traces every agent action. Audit trails are immutable and queryable.',
    color: '#f59e0b',
    href: '/use-cases/compliance',
  },
];

const PLATFORM_FEATURES = [
  { title: 'Forge', body: 'Generate production-ready agent code from an OpenAPI spec, TypeScript source, or plain English.', color: '#0ea5e9' },
  { title: 'SDK', body: 'Turn any existing application into an A2A-compliant agent with five lines of code.', color: EMERALD },
  { title: 'Mesh', body: 'A multi-agent runtime that plans, decomposes, executes, and evaluates.', color: BRAND_PRIMARY },
  { title: 'Knowledge Store', body: 'Institutional memory that survives sessions and deployments.', color: '#f59e0b' },
  { title: 'Dashboard', body: 'Every agent action, tool call, LLM decision, and token spend — traced and surfaced.', color: '#0ea5e9' },
  { title: 'Guardrails', body: 'Policies enforced before actions execute. Identity, boundaries, least-privilege.', color: ACCENT_PINK },
];

const TRUSTED_BY = [
  'Fortune 500 Companies', 'Fast-Growing Startups', 'Government Agencies', 'Healthcare Organizations',
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <UseCases />
      <Platform />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <Box
      sx={{
        width: '100%',
        background: `linear-gradient(180deg, ${SURFACE} 0%, ${CARD} 55%)`,
        pt: { xs: 8, md: 14 },
        pb: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          backgroundImage:
            'linear-gradient(hsl(262 83% 58% / 0.35) 1px, transparent 1px), ' +
            'linear-gradient(90deg, hsl(262 83% 58% / 0.35) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            sx={{
              color: BRAND_PRIMARY,
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              mb: 3,
            }}
          >
            Every System Deserves a Savant
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: TEXT_PRIMARY,
              mb: 3,
              lineHeight: 1.1,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
            }}
          >
            AI agents that{' '}
            <Box
              component="span"
              sx={{
                background: `linear-gradient(135deg, ${ACCENT_LIGHT}, ${BRAND_PRIMARY})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              learn and adapt.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: TEXT_SECONDARY,
              fontSize: '1.15rem',
              lineHeight: 1.7,
              maxWidth: 640,
              mx: 'auto',
              mb: 5,
            }}
          >
            Build, orchestrate, and govern autonomous AI agents that wrap your existing services with intelligence.
            From support automation to compliance workflows — agents that get smarter with every interaction.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              href="https://app.svantic.com/signup"
              sx={{
                bgcolor: BRAND_PRIMARY,
                color: '#ffffff',
                fontWeight: 600,
                borderRadius: '10px',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'none',
                '&:hover': { bgcolor: BRAND_PRIMARY_HOVER },
              }}
            >
              Start Building Free
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/how-it-works"
              sx={{
                borderColor: 'rgba(124,58,237,0.35)',
                color: BRAND_PRIMARY,
                borderRadius: '10px',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'none',
                '&:hover': {
                  borderColor: BRAND_PRIMARY,
                  bgcolor: 'rgba(124,58,237,0.06)',
                },
              }}
            >
              See How It Works
            </Button>
          </Box>

          <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>
            Free tier included. No credit card required.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}

function TrustedBy() {
  return (
    <Box sx={{ width: '100%', py: 6, bgcolor: CARD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Typography sx={{ color: TEXT_MUTED, fontSize: '0.8rem', textAlign: 'center', mb: 3, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Trusted by teams at
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 4, md: 8 }, flexWrap: 'wrap' }}>
          {TRUSTED_BY.map((name) => (
            <Typography key={name} sx={{ color: TEXT_MUTED, fontSize: '0.95rem', fontWeight: 500 }}>
              {name}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function UseCases() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Use Cases
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 2 }}>
            What teams are building.
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, maxWidth: 560, mx: 'auto' }}>
            From support automation to compliance pipelines — real patterns running in production.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {USE_CASES.map((uc, i) => (
            <Grid2 key={uc.category} size={{ xs: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Box
                  component="a"
                  href={uc.href}
                  sx={{
                    display: 'block',
                    p: 4,
                    borderRadius: '16px',
                    bgcolor: CARD,
                    border: `1px solid ${BORDER}`,
                    height: '100%',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: 'rgba(124,58,237,0.3)',
                      boxShadow: '0 8px 24px rgba(124,58,237,0.08)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Box sx={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', bgcolor: uc.color }} />
                  <Typography sx={{ color: uc.color, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 2 }}>
                    {uc.category}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: TEXT_PRIMARY, mb: 1.5, lineHeight: 1.35 }}>
                    {uc.result}
                  </Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.65 }}>
                    {uc.body}
                  </Typography>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button href="/use-cases" sx={{ color: BRAND_PRIMARY, fontWeight: 600, textTransform: 'none' }}>
            View all use cases →
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

function Platform() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: CARD, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            The Platform
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 2 }}>
            Build, orchestrate, observe, and learn.
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, maxWidth: 560, mx: 'auto' }}>
            Six capabilities across three layers. Forge generates code. The SDK wires capabilities. The mesh orchestrates. Governance and telemetry are built in.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {PLATFORM_FEATURES.map((feature, i) => (
            <Grid2 key={feature.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    border: `1px solid ${BORDER}`,
                    bgcolor: SURFACE,
                    height: '100%',
                    transition: 'all 0.2s ease',
                    '&:hover': { borderColor: `${feature.color}40`, bgcolor: `${feature.color}05` },
                  }}
                >
                  <Box sx={{ width: 3, height: 32, borderRadius: 1, bgcolor: feature.color, mb: 2 }} />
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: TEXT_PRIMARY, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.65 }}>
                    {feature.body}
                  </Typography>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button href="/features" sx={{ color: BRAND_PRIMARY, fontWeight: 600, textTransform: 'none' }}>
            Explore all features →
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

function HowItWorks() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: SURFACE, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            How It Works
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 2 }}>
            From zero to production in minutes.
          </Typography>
        </Box>

        <Grid2 container spacing={4}>
          {[
            { step: '01', title: 'Generate', body: 'Point Forge at an OpenAPI spec, TypeScript file, or describe what you need. It generates tool specs, capabilities, and scaffolded projects.' },
            { step: '02', title: 'Connect', body: 'The SDK turns any existing service into an agent. Define capabilities, register with the mesh, and your service is now AI-callable.' },
            { step: '03', title: 'Orchestrate', body: 'The mesh plans, executes, and evaluates. Complex workflows emerge from simple tasks. Knowledge compounds over time.' },
            { step: '04', title: 'Govern', body: 'Guardrails enforce policies before actions execute. Every decision is traced. Approval workflows keep humans in the loop.' },
          ].map((item, i) => (
            <Grid2 key={item.step} size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '14px',
                      bgcolor: `${BRAND_PRIMARY}12`,
                      border: `1px solid ${BRAND_PRIMARY}25`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 800, fontSize: '1rem' }}>{item.step}</Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: TEXT_PRIMARY, mb: 1 }}>{item.title}</Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.65 }}>{item.body}</Typography>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

function Testimonials() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: CARD, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Testimonials
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY }}>
            What our customers say.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {[
            { quote: 'Svantic reduced our ticket resolution time by 60%. The knowledge store means our agents actually learn from every interaction.', author: 'Sarah Chen', role: 'VP of Support', company: 'TechCorp' },
            { quote: 'We deployed our first production agent in under a week. The guardrails gave our compliance team the confidence to go live.', author: 'Michael Torres', role: 'CTO', company: 'FinanceFlow' },
            { quote: 'The flipped tool model was the key. Our data never leaves our infrastructure, which made enterprise approval possible.', author: 'Jennifer Park', role: 'Head of Engineering', company: 'HealthSync' },
          ].map((testimonial, i) => (
            <Grid2 key={i} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  border: `1px solid ${BORDER}`,
                  bgcolor: SURFACE,
                  height: '100%',
                }}
              >
                <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1rem', lineHeight: 1.7, mb: 3, fontStyle: 'italic' }}>
                  "{testimonial.quote}"
                </Typography>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: TEXT_PRIMARY, fontSize: '0.95rem' }}>{testimonial.author}</Typography>
                  <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>
                    {testimonial.role}, {testimonial.company}
                  </Typography>
                </Box>
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

      <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ color: '#f8fafc', mb: 3 }}>
          Ready to build your first agent?
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto' }}>
          Create your free account and deploy your first agent in minutes. No credit card required.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
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
            size="large"
            href="/contact"
            sx={{
              borderColor: 'rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.85)',
              borderRadius: '10px',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              '&:hover': {
                borderColor: 'rgba(255,255,255,0.35)',
                bgcolor: 'rgba(255,255,255,0.06)',
              },
            }}
          >
            Talk to Sales
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
