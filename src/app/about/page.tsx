'use client';

import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG, ACCENT_LIGHT, EMERALD,
} from '@/theme/theme';

const VALUES = [
  { title: 'Build for production', body: 'Every feature we ship must work in regulated, high-stakes environments. Demos are easy; production is hard.' },
  { title: 'Compound knowledge', body: 'Systems should get smarter over time. Every interaction is an opportunity to learn and improve.' },
  { title: 'Trust through transparency', body: 'Every decision an agent makes should be explainable. If you can\'t see it, you can\'t trust it.' },
  { title: 'Ship fast, iterate faster', body: 'We bias toward action. Small, frequent releases beat big, infrequent ones.' },
];

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Story />
      <Values />
      <JoinUs />
    </>
  );
}

function Hero() {
  return (
    <Box
      sx={{
        width: '100%',
        background: `linear-gradient(180deg, ${CODE_BG} 0%, #1e293b 100%)`,
        pt: { xs: 10, md: 16 },
        pb: { xs: 8, md: 14 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.14,
          backgroundImage:
            'linear-gradient(hsl(262 83% 58% / 0.35) 1px, transparent 1px), ' +
            'linear-gradient(90deg, hsl(262 83% 58% / 0.35) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Typography
          sx={{
            color: BRAND_PRIMARY,
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            mb: 3,
          }}
        >
          About Us
        </Typography>

        <Typography
          variant="h1"
          sx={{
            color: '#f8fafc',
            mb: 4,
            maxWidth: 760,
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Built from production experience,{' '}
          <Box
            component="span"
            sx={{
              background: `linear-gradient(135deg, ${ACCENT_LIGHT}, ${BRAND_PRIMARY}, ${EMERALD})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            for automation that has to survive the real world.
          </Box>
        </Typography>

        <Typography
          sx={{
            color: 'rgba(248,250,252,0.65)',
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
            lineHeight: 1.8,
            maxWidth: 620,
          }}
        >
          Our team spent years building systems that integrated with hundreds of thousands of external services.
          We needed savants to solve the problems we lived every day — so we built the infrastructure.
        </Typography>
      </Container>
    </Box>
  );
}

function Story() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: CARD }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={6}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
              Our Story
            </Typography>
            <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 3 }}>
              We were running to stand still.
            </Typography>
            <Typography sx={{ color: TEXT_SECONDARY, mb: 3, lineHeight: 1.8 }}>
              Our team built and operated automated workflows that integrated with hundreds of thousands of external systems — 
              each with its own UI, authentication flow, data format, and API. Every integration was handcrafted.
            </Typography>
            <Typography sx={{ color: TEXT_SECONDARY, mb: 3, lineHeight: 1.8 }}>
              This worked. It worked for years. It scaled to production. But it was increasingly untenable.
              A single change in one system breaks the workflow. Multiply this by thousands of systems, 
              each independently changing on their own schedule.
            </Typography>
            <Typography sx={{ fontWeight: 600, color: TEXT_PRIMARY }}>
              We needed savants. So we built the platform to make them real.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                bgcolor: SURFACE,
                borderRadius: '16px',
                border: `1px solid ${BORDER}`,
                p: 4,
                height: '100%',
              }}
            >
              <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 3 }}>
                The Gap We Saw
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ p: 3, borderRadius: '12px', border: '1px solid rgba(239,68,68,0.2)', bgcolor: 'rgba(239,68,68,0.05)' }}>
                  <Typography sx={{ color: '#ef4444', fontWeight: 700, fontSize: '0.85rem', mb: 1 }}>Handcoded Scripts</Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.65 }}>
                    Deterministic but brittle. One UI tweak or API rename and the system breaks.
                  </Typography>
                </Box>
                <Box sx={{ p: 3, borderRadius: '12px', border: '1px solid rgba(245,158,11,0.2)', bgcolor: 'rgba(245,158,11,0.05)' }}>
                  <Typography sx={{ color: '#f59e0b', fontWeight: 700, fontSize: '0.85rem', mb: 1 }}>Pure AI Agents</Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.65 }}>
                    Flexible but unpredictable. Too unreliable for regulated industries.
                  </Typography>
                </Box>
                <Box sx={{ p: 3, borderRadius: '12px', border: `1px solid ${BRAND_PRIMARY}30`, bgcolor: `${BRAND_PRIMARY}08` }}>
                  <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', mb: 1 }}>Svantic Savants</Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.65 }}>
                    The bridge: AI that wraps existing services with intelligence, learns from every execution, and operates safely.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

function Values() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: SURFACE, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Our Values
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY }}>
            What we believe.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {VALUES.map((value, i) => (
            <Grid2 key={value.title} size={{ xs: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Box sx={{ p: 4, borderRadius: '16px', bgcolor: CARD, border: `1px solid ${BORDER}`, height: '100%' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: TEXT_PRIMARY, mb: 1.5 }}>{value.title}</Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.95rem', lineHeight: 1.7 }}>{value.body}</Typography>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

function JoinUs() {
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
          Join us.
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto' }}>
          We're building the future of autonomous work. If you're excited about AI agents, production systems, and solving hard problems, we want to talk.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            href="/careers"
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
            View Open Positions
          </Button>
          <Button
            variant="outlined"
            href="/contact"
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
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
