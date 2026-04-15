'use client';

import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG, EMERALD,
} from '@/theme/theme';


const BENEFITS = [
  { title: 'Competitive Salary', description: 'Top-of-market compensation with equity' },
  { title: 'Remote-First', description: 'Work from anywhere in the US, UK, or EU' },
  { title: 'Health & Wellness', description: 'Full medical, dental, and vision coverage' },
  { title: 'Unlimited PTO', description: 'Take the time you need to recharge' },
  { title: 'Learning Budget', description: '$2,000/year for courses, conferences, and books' },
  { title: 'Home Office', description: '$1,500 setup budget for your workspace' },
  { title: '401(k) Match', description: '4% employer match on retirement contributions' },
  { title: 'Parental Leave', description: '16 weeks paid leave for all parents' },
];

export default function CareersPage() {
  return (
    <>
      <Hero />
      <WhyJoin />
      <Benefits />
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

      <Container maxWidth="lg" sx={{ position: 'relative', textAlign: 'center' }}>
        <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 3 }}>
          Careers
        </Typography>
        <Typography variant="h1" sx={{ color: '#f8fafc', mb: 3, fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800 }}>
          Build the future of autonomous work.
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: 600, mx: 'auto' }}>
          We're building the infrastructure that makes AI agents reliable, governable, and production-ready.
          Join us if you're excited about solving hard problems.
        </Typography>
      </Container>
    </Box>
  );
}

function WhyJoin() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: CARD }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={6} alignItems="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
              Why Join Us
            </Typography>
            <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 3 }}>
              Work on problems that matter.
            </Typography>
            <Typography sx={{ color: TEXT_SECONDARY, mb: 3, lineHeight: 1.8 }}>
              We're not building another chatbot or a thin wrapper around GPT. We're building the control plane for autonomous work — 
              the infrastructure that sits between businesses and the chaotic landscape of external systems.
            </Typography>
            <Typography sx={{ color: TEXT_SECONDARY, mb: 3, lineHeight: 1.8 }}>
              Our customers use Svantic in production, in regulated industries, where reliability and governance aren't optional.
              The problems we solve are genuinely hard.
            </Typography>
            <Typography sx={{ fontWeight: 600, color: TEXT_PRIMARY }}>
              If you want to work on AI that has to survive the real world, you'll fit right in.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 4, borderRadius: '16px', bgcolor: SURFACE, border: `1px solid ${BORDER}` }}>
              <Typography sx={{ fontWeight: 700, color: TEXT_PRIMARY, mb: 3 }}>What we value</Typography>
              {[
                { title: 'Ownership', body: 'You own your work end-to-end. Ship it, measure it, iterate on it.' },
                { title: 'Clarity', body: 'Clear thinking, clear writing, clear code. Simplicity over cleverness.' },
                { title: 'Speed', body: 'Bias toward action. Small, frequent releases beat big, infrequent ones.' },
                { title: 'Candor', body: 'Direct feedback, given respectfully. No surprises in reviews.' },
              ].map((value) => (
                <Box key={value.title} sx={{ mb: 2.5 }}>
                  <Typography sx={{ fontWeight: 600, color: TEXT_PRIMARY, fontSize: '0.95rem', mb: 0.5 }}>{value.title}</Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.6 }}>{value.body}</Typography>
                </Box>
              ))}
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

function Benefits() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: SURFACE, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Benefits
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY }}>
            We take care of our team.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {BENEFITS.map((benefit, i) => (
            <Grid2 key={benefit.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Box sx={{ p: 3, borderRadius: '12px', bgcolor: CARD, border: `1px solid ${BORDER}`, height: '100%' }}>
                  <Typography sx={{ fontWeight: 700, color: TEXT_PRIMARY, fontSize: '1rem', mb: 1 }}>{benefit.title}</Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.6 }}>{benefit.description}</Typography>
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
          Don't see the right role?
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto' }}>
          We're always looking for exceptional people. Send us your resume and tell us what you'd like to work on.
        </Typography>
        <Button
          variant="contained"
          href="mailto:careers@svantic.com"
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
          Send Us Your Resume
        </Button>
      </Container>
    </Box>
  );
}
