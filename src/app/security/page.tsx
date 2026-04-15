'use client';

import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY,
  SURFACE, CARD, BORDER, CODE_BG, EMERALD,
} from '@/theme/theme';

const CERTIFICATIONS = [
  { name: 'SOC 2 Type II', description: 'Annual audits by independent third parties' },
  { name: 'GDPR Compliant', description: 'Full compliance with EU data protection regulations' },
  { name: 'CCPA Compliant', description: 'California Consumer Privacy Act compliance' },
  { name: 'HIPAA Ready', description: 'Available for healthcare customers on Enterprise plans' },
];

const SECURITY_FEATURES = [
  { title: 'Data Encryption', items: ['AES-256 encryption at rest', 'TLS 1.3 encryption in transit', 'Customer-managed encryption keys available'] },
  { title: 'Access Control', items: ['Role-based access control (RBAC)', 'SSO/SAML integration', 'Multi-factor authentication', 'API key rotation'] },
  { title: 'Infrastructure', items: ['SOC 2 certified cloud providers', 'Geographic data residency options', 'DDoS protection', 'Regular penetration testing'] },
  { title: 'Monitoring', items: ['Real-time security monitoring', 'Automated threat detection', 'Comprehensive audit logs', 'Incident response procedures'] },
];

export default function SecurityPage() {
  return (
    <>
      <Hero />
      <Certifications />
      <Features />
      <Contact />
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
        background: `linear-gradient(180deg, ${CODE_BG} 0%, #1e293b 100%)`,
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
        <Typography sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
          Security
        </Typography>
        <Typography sx={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#f8fafc', lineHeight: 1.15, mb: 2 }}>
          Enterprise-grade security by default.
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
          Your data never leaves your infrastructure. The mesh orchestrates, but your credentials, files, and sensitive data stay behind your firewall.
        </Typography>
      </Container>
    </Box>
  );
}

function Certifications() {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 12 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Compliance
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY }}>
            Certified and audited.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {CERTIFICATIONS.map((cert) => (
            <Grid2 key={cert.name} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  bgcolor: CARD,
                  border: `1px solid ${BORDER}`,
                  height: '100%',
                  textAlign: 'center',
                }}
              >
                <CheckCircleIcon sx={{ color: EMERALD, fontSize: 40, mb: 2 }} />
                <Typography sx={{ fontWeight: 700, color: TEXT_PRIMARY, fontSize: '1.1rem', mb: 1 }}>{cert.name}</Typography>
                <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem' }}>{cert.description}</Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

function Features() {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 12 }, bgcolor: CARD, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Security Features
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY }}>
            Built for regulated industries.
          </Typography>
        </Box>

        <Grid2 container spacing={4}>
          {SECURITY_FEATURES.map((feature) => (
            <Grid2 key={feature.title} size={{ xs: 12, sm: 6 }}>
              <Box sx={{ p: 4, borderRadius: '16px', bgcolor: SURFACE, border: `1px solid ${BORDER}`, height: '100%' }}>
                <Typography sx={{ fontWeight: 700, color: TEXT_PRIMARY, fontSize: '1.15rem', mb: 3 }}>{feature.title}</Typography>
                {feature.items.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <CheckCircleIcon sx={{ color: EMERALD, fontSize: 18 }} />
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

function Contact() {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 10 }, bgcolor: SURFACE, borderTop: `1px solid ${BORDER}`, textAlign: 'center' }}>
      <Container maxWidth="sm">
        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', color: TEXT_PRIMARY, mb: 2 }}>
          Have security questions?
        </Typography>
        <Typography sx={{ color: TEXT_SECONDARY, mb: 4 }}>
          Our security team is happy to answer questions, provide documentation, or discuss your specific compliance requirements.
        </Typography>
        <Button
          variant="contained"
          href="mailto:security@svantic.com"
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
          Contact Security Team
        </Button>
      </Container>
    </Box>
  );
}
