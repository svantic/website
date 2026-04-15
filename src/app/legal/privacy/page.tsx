'use client';

import { Box, Container, Typography } from '@mui/material';
import {
  TEXT_PRIMARY, TEXT_SECONDARY, SURFACE, CARD, BORDER, BRAND_PRIMARY,
} from '@/theme/theme';

export default function PrivacyPage() {
  return (
    <Box sx={{ bgcolor: SURFACE, minHeight: '100vh' }}>
      <Box sx={{ bgcolor: CARD, borderBottom: `1px solid ${BORDER}`, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: TEXT_PRIMARY, mb: 2 }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY }}>
            Last updated: April 15, 2026
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ '& h2': { fontSize: '1.5rem', fontWeight: 700, color: TEXT_PRIMARY, mt: 5, mb: 2 }, '& h3': { fontSize: '1.15rem', fontWeight: 600, color: TEXT_PRIMARY, mt: 4, mb: 1.5 }, '& p': { color: TEXT_SECONDARY, lineHeight: 1.8, mb: 2 }, '& ul': { color: TEXT_SECONDARY, pl: 3, mb: 2 }, '& li': { mb: 1, lineHeight: 1.7 }, '& a': { color: BRAND_PRIMARY, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } } }}>
          
          <Typography sx={{ color: TEXT_SECONDARY, lineHeight: 1.8, mb: 3 }}>
            Data privacy is important to Svantic, Inc. ("Svantic," "We," "Our" or "Us"). This Privacy Policy describes the information and data we may collect about you, how we may use that information, and with whom we may share it. This Privacy Policy also describes your choices and rights related to the information we collect.
          </Typography>

          <Typography variant="h2" component="h2">How We Process Information</Typography>
          
          <Typography variant="h3" component="h3">Information We Collect</Typography>
          <Typography component="p">
            We receive and collect information submitted by, for, through, or on behalf of our customers in connection with the use of our Services. This includes:
          </Typography>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, company name, and other registration details</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our Services, including API calls, agent executions, and feature usage</li>
            <li><strong>Technical Data:</strong> IP addresses, browser type, device information, and connection data</li>
            <li><strong>Customer Data:</strong> Data you process through our Services, including inputs to and outputs from AI agents</li>
            <li><strong>Communication Data:</strong> Information from your communications with us, including support requests</li>
          </ul>

          <Typography variant="h3" component="h3">How We Use Information</Typography>
          <Typography component="p">We use the information we collect to:</Typography>
          <ul>
            <li>Provide, maintain, and improve our Services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize and improve your experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <Typography variant="h2" component="h2">Customer Data</Typography>
          
          <Typography variant="h3" component="h3">Data Processing</Typography>
          <Typography component="p">
            When you use our Services to process data, we act as a data processor on your behalf. We process Customer Data only as necessary to provide the Services and in accordance with your instructions. We do not use Customer Data for our own purposes except as necessary to provide and improve the Services.
          </Typography>

          <Typography variant="h3" component="h3">Data Retention</Typography>
          <Typography component="p">
            We retain Customer Data for as long as your account is active or as needed to provide you Services. You may request deletion of your Customer Data at any time. Upon termination of your account, we will delete or return your Customer Data within 30 days, unless retention is required by law.
          </Typography>

          <Typography variant="h3" component="h3">Data Location</Typography>
          <Typography component="p">
            Customer Data is stored in secure data centers. For customers with specific data residency requirements, we offer deployment options that allow you to control where your data is processed and stored.
          </Typography>

          <Typography variant="h2" component="h2">Information Sharing</Typography>
          <Typography component="p">We may share information in the following circumstances:</Typography>
          <ul>
            <li><strong>Service Providers:</strong> We share information with third-party service providers who perform services on our behalf, such as hosting, analytics, and customer support</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction</li>
            <li><strong>With Your Consent:</strong> We may share information with third parties when you give us consent to do so</li>
          </ul>
          <Typography component="p">
            We do not sell personal information to third parties.
          </Typography>

          <Typography variant="h2" component="h2">Security</Typography>
          <Typography component="p">
            We maintain a comprehensive security program designed to protect the information we collect. Our security measures include:
          </Typography>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Access controls and authentication requirements</li>
            <li>Employee security training</li>
            <li>Incident response procedures</li>
          </ul>
          <Typography component="p">
            While we implement safeguards designed to protect your information, no security system is impenetrable, and we cannot guarantee the security of our systems.
          </Typography>

          <Typography variant="h2" component="h2">Cookies and Tracking</Typography>
          <Typography component="p">
            We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. We use the following types of cookies:
          </Typography>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the operation of our website and Services</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
          </ul>

          <Typography variant="h2" component="h2">Your Rights and Choices</Typography>
          <Typography component="p">Depending on your location, you may have certain rights regarding your personal information:</Typography>
          <ul>
            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your personal information in a portable format</li>
            <li><strong>Objection:</strong> Object to certain processing of your personal information</li>
            <li><strong>Withdrawal of Consent:</strong> Withdraw consent where processing is based on consent</li>
          </ul>
          <Typography component="p">
            To exercise these rights, please contact us at privacy@svantic.com.
          </Typography>

          <Typography variant="h2" component="h2">International Data Transfers</Typography>
          <Typography component="p">
            Personal information may be transferred to, and processed in, countries other than the country in which you reside. When we transfer personal information outside of the European Economic Area or other regions with data protection laws, we ensure appropriate safeguards are in place, such as standard contractual clauses.
          </Typography>

          <Typography variant="h2" component="h2">Children's Privacy</Typography>
          <Typography component="p">
            Our Services are not directed to children under 16, and we do not knowingly collect personal information from children under 16. If we learn that we have collected personal information from a child under 16, we will take steps to delete that information.
          </Typography>

          <Typography variant="h2" component="h2">Changes to This Policy</Typography>
          <Typography component="p">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date. Your continued use of the Services after any changes constitutes your acceptance of the updated Privacy Policy.
          </Typography>

          <Typography variant="h2" component="h2">Contact Us</Typography>
          <Typography component="p">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
          </Typography>
          <Typography component="p">
            <strong>Email:</strong> privacy@svantic.com<br />
            <strong>Address:</strong> Svantic, Inc., 548 Market St, Suite 35000, San Francisco, CA 94104
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
