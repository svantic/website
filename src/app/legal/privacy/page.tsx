'use client';

import { Box, Container, Typography } from '@mui/material';
import { BRAND_PRIMARY, TEXT_PRIMARY, TEXT_SECONDARY, SURFACE, CARD, BORDER } from '@/theme/theme';

export default function PrivacyPage() {
  return (
    <Box sx={{ bgcolor: SURFACE, minHeight: '100vh' }}>
      <Box sx={{ width: '100%', pt: { xs: 8, md: 12 }, pb: { xs: 4, md: 6 }, bgcolor: CARD, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="md">
          <Typography sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Legal
          </Typography>
          <Typography sx={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: TEXT_PRIMARY, mb: 2 }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY }}>
            Last updated: April 1, 2026
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ '& h2': { fontWeight: 700, color: TEXT_PRIMARY, fontSize: '1.25rem', mb: 2, mt: 4 }, '& p': { color: TEXT_SECONDARY, lineHeight: 1.8, mb: 2 } }}>
          <Typography variant="h2">1. Information We Collect</Typography>
          <Typography>
            We collect information you provide directly to us, such as when you create an account, use our Service, or contact us for support. This may include:
          </Typography>
          <ul style={{ color: TEXT_SECONDARY, lineHeight: 1.8, marginBottom: 16 }}>
            <li>Name and email address</li>
            <li>Company name and job title</li>
            <li>Payment information</li>
            <li>Usage data and analytics</li>
            <li>Communications with our team</li>
          </ul>

          <Typography variant="h2">2. How We Use Your Information</Typography>
          <Typography>
            We use the information we collect to:
          </Typography>
          <ul style={{ color: TEXT_SECONDARY, lineHeight: 1.8, marginBottom: 16 }}>
            <li>Provide, maintain, and improve our Service</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Monitor and analyze trends, usage, and activities</li>
          </ul>

          <Typography variant="h2">3. Data Storage and Security</Typography>
          <Typography>
            We implement appropriate technical and organizational measures to protect the security of your personal information. All data is encrypted in transit and at rest. We use industry-standard security practices and undergo regular security audits.
          </Typography>

          <Typography variant="h2">4. Data Retention</Typography>
          <Typography>
            We retain your personal information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
          </Typography>

          <Typography variant="h2">5. Your Rights</Typography>
          <Typography>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </Typography>
          <ul style={{ color: TEXT_SECONDARY, lineHeight: 1.8, marginBottom: 16 }}>
            <li>Access to your personal data</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data</li>
            <li>Data portability</li>
            <li>Objection to processing</li>
          </ul>

          <Typography variant="h2">6. Cookies and Tracking</Typography>
          <Typography>
            We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </Typography>

          <Typography variant="h2">7. Third-Party Services</Typography>
          <Typography>
            Our Service may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party services you access.
          </Typography>

          <Typography variant="h2">8. International Data Transfers</Typography>
          <Typography>
            Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
          </Typography>

          <Typography variant="h2">9. Changes to This Policy</Typography>
          <Typography>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </Typography>

          <Typography variant="h2">10. Contact Us</Typography>
          <Typography>
            If you have any questions about this Privacy Policy, please contact us at privacy@svantic.com.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
