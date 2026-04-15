'use client';

import { Box, Container, Typography } from '@mui/material';
import { BRAND_PRIMARY, TEXT_PRIMARY, TEXT_SECONDARY, SURFACE, CARD, BORDER } from '@/theme/theme';

export default function TermsPage() {
  return (
    <Box sx={{ bgcolor: SURFACE, minHeight: '100vh' }}>
      <Box sx={{ width: '100%', pt: { xs: 8, md: 12 }, pb: { xs: 4, md: 6 }, bgcolor: CARD, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="md">
          <Typography sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Legal
          </Typography>
          <Typography sx={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: TEXT_PRIMARY, mb: 2 }}>
            Terms of Service
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY }}>
            Last updated: April 1, 2026
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ '& h2': { fontWeight: 700, color: TEXT_PRIMARY, fontSize: '1.25rem', mb: 2, mt: 4 }, '& p': { color: TEXT_SECONDARY, lineHeight: 1.8, mb: 2 } }}>
          <Typography variant="h2">1. Acceptance of Terms</Typography>
          <Typography>
            By accessing or using the Svantic platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
          </Typography>

          <Typography variant="h2">2. Description of Service</Typography>
          <Typography>
            Svantic provides a platform for building, orchestrating, and governing AI agents. The Service includes the Svantic SDK, Mesh runtime, Knowledge Store, Dashboard, and related APIs and documentation.
          </Typography>

          <Typography variant="h2">3. Account Registration</Typography>
          <Typography>
            To use the Service, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary. You are responsible for safeguarding your account credentials and for all activities that occur under your account.
          </Typography>

          <Typography variant="h2">4. Acceptable Use</Typography>
          <Typography>
            You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
          </Typography>
          <ul style={{ color: TEXT_SECONDARY, lineHeight: 1.8, marginBottom: 16 }}>
            <li>Use the Service for any illegal or unauthorized purpose</li>
            <li>Attempt to gain unauthorized access to the Service or its related systems</li>
            <li>Interfere with or disrupt the integrity or performance of the Service</li>
            <li>Use the Service to transmit malware or other harmful code</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>

          <Typography variant="h2">5. Intellectual Property</Typography>
          <Typography>
            The Service and its original content, features, and functionality are owned by Svantic, Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </Typography>

          <Typography variant="h2">6. Data and Privacy</Typography>
          <Typography>
            Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to the collection and use of information as described in our Privacy Policy.
          </Typography>

          <Typography variant="h2">7. Payment and Billing</Typography>
          <Typography>
            Certain features of the Service require payment. You agree to pay all applicable fees as described on our pricing page. Fees are non-refundable except as required by law or as explicitly stated in these Terms.
          </Typography>

          <Typography variant="h2">8. Termination</Typography>
          <Typography>
            We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
          </Typography>

          <Typography variant="h2">9. Limitation of Liability</Typography>
          <Typography>
            In no event shall Svantic, Inc., its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </Typography>

          <Typography variant="h2">10. Changes to Terms</Typography>
          <Typography>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
          </Typography>

          <Typography variant="h2">11. Contact Us</Typography>
          <Typography>
            If you have any questions about these Terms, please contact us at legal@svantic.com.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
