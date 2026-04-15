'use client';

import { Box, Container, Typography } from '@mui/material';
import {
  TEXT_PRIMARY, TEXT_SECONDARY, SURFACE, CARD, BORDER,
} from '@/theme/theme';

export default function TermsPage() {
  return (
    <Box sx={{ bgcolor: SURFACE, minHeight: '100vh' }}>
      <Box sx={{ bgcolor: CARD, borderBottom: `1px solid ${BORDER}`, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: TEXT_PRIMARY, mb: 2 }}>
            Terms of Service
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY }}>
            Last updated: April 15, 2026
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ '& h2': { fontSize: '1.5rem', fontWeight: 700, color: TEXT_PRIMARY, mt: 5, mb: 2 }, '& h3': { fontSize: '1.15rem', fontWeight: 600, color: TEXT_PRIMARY, mt: 4, mb: 1.5 }, '& p': { color: TEXT_SECONDARY, lineHeight: 1.8, mb: 2 }, '& ul': { color: TEXT_SECONDARY, pl: 3, mb: 2 }, '& li': { mb: 1, lineHeight: 1.7 } }}>
          <Typography sx={{ color: TEXT_SECONDARY, lineHeight: 1.8, mb: 3 }}>
            Thank you for your interest in Svantic, Inc. ("Svantic," "We," "Our" or "Us")!
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, lineHeight: 1.8, mb: 3 }}>
            These Terms of Service (this "Agreement") represent a legally binding agreement between You and Us governing Your access to and use of Our Services. "You" (or "Your," and similar phrases, as the context requires) in the case of an individual accepting this Agreement on his or her own behalf, means that individual, and in the case of an individual accepting this Agreement on behalf of a company or other legal entity, means the company or other legal entity for which that individual is accepting this Agreement, and affiliates of that company or entity.
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, lineHeight: 1.8, mb: 3 }}>
            If You use Our Services, You are agreeing to the Terms of Service set forth in this Agreement. If You do not agree to the Terms of Service set forth in this Agreement, You must not access or use Our Services.
          </Typography>

          <Typography variant="h2" component="h2">1. Access and Use Rights</Typography>
          
          <Typography variant="h3" component="h3">1.1 Access</Typography>
          <Typography component="p">
            Subject to Your compliance with this Agreement, You have the non-exclusive right during the applicable term to: (i) internally use the application programming interface materials, SDKs, CLI tools, and related documentation that We provide or make available to You (collectively, the "Platform") for the purpose of building, deploying, and operating AI agents and related applications; and (ii) use the Platform and associated services (collectively, the "Services") for the benefit of Yourself and Your authorized end users, subject to compliance with all applicable laws.
          </Typography>

          <Typography variant="h3" component="h3">1.2 Restrictions on Use</Typography>
          <Typography component="p">Unless We otherwise expressly permit You in writing, You will not:</Typography>
          <ul>
            <li>Attempt to reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code, object code, or underlying structure of the Services</li>
            <li>Modify, translate, or create derivative works based on the Services, except as permitted by this Agreement</li>
            <li>Sell, resell, license, sublicense, distribute, rent or lease any Services to any third-party</li>
            <li>Use the Services to build a competitive product or service</li>
            <li>Use the Services in violation of any applicable law or regulation</li>
            <li>Use the Services to process, store, or transmit any data that violates third-party rights</li>
            <li>Interfere with or disrupt the integrity or performance of the Services</li>
          </ul>

          <Typography variant="h3" component="h3">1.3 Ownership</Typography>
          <Typography component="p">
            Except for the rights expressly granted under this Agreement, We reserve and retain all right, title, and interest in and to the Services, including all intellectual property rights. You retain all right, title, and interest in and to Your data and any applications You build using the Services.
          </Typography>

          <Typography variant="h2" component="h2">2. Your Data and Privacy</Typography>
          
          <Typography variant="h3" component="h3">2.1 Your Data</Typography>
          <Typography component="p">
            You retain ownership of all data You submit to the Services ("Your Data"). You grant Us a limited license to use Your Data solely to provide and improve the Services. We will not access Your Data except as necessary to provide the Services, prevent or address service or technical problems, or as required by law.
          </Typography>

          <Typography variant="h3" component="h3">2.2 Data Processing</Typography>
          <Typography component="p">
            When processing Your Data, We act as a data processor on Your behalf. You are responsible for ensuring that Your use of the Services complies with all applicable data protection laws, including obtaining any necessary consents from end users.
          </Typography>

          <Typography variant="h3" component="h3">2.3 Security</Typography>
          <Typography component="p">
            We maintain appropriate technical and organizational measures designed to protect the security, confidentiality, and integrity of Your Data. These measures include encryption, access controls, and regular security assessments.
          </Typography>

          <Typography variant="h2" component="h2">3. Payments</Typography>
          <Typography component="p">
            Payments for any charges or fees must be made within thirty (30) days from the date of invoice. Unpaid invoices are subject to a finance charge of 1.5% per month or the maximum rate permitted by law, whichever is lower. You are responsible for all taxes associated with the Services, other than taxes based on Our income. All payments are non-refundable unless otherwise specified in writing.
          </Typography>

          <Typography variant="h2" component="h2">4. Term and Termination</Typography>
          
          <Typography variant="h3" component="h3">4.1 Term</Typography>
          <Typography component="p">
            This Agreement begins on the date You first access or use the Services and continues until terminated by either party.
          </Typography>

          <Typography variant="h3" component="h3">4.2 Termination for Cause</Typography>
          <Typography component="p">
            Either party may terminate this Agreement if the other party materially breaches this Agreement and fails to cure such breach within thirty (30) days after receiving written notice. We may immediately suspend or terminate Your access to the Services if We believe that Your use violates this Agreement or applicable law.
          </Typography>

          <Typography variant="h3" component="h3">4.3 Termination for Convenience</Typography>
          <Typography component="p">
            Either party may terminate this Agreement for any reason upon thirty (30) days' prior written notice to the other party.
          </Typography>

          <Typography variant="h3" component="h3">4.4 Effect of Termination</Typography>
          <Typography component="p">
            Upon termination, Your right to access and use the Services will immediately cease. We will make Your Data available for export for a period of thirty (30) days following termination, after which We may delete Your Data.
          </Typography>

          <Typography variant="h2" component="h2">5. Confidentiality</Typography>
          <Typography component="p">
            Each party agrees to maintain the confidentiality of any confidential information disclosed by the other party. Confidential information includes, but is not limited to, pricing information, technical specifications, and business strategies. The receiving party will not disclose confidential information to any third party without the prior written consent of the disclosing party, except as required by law.
          </Typography>

          <Typography variant="h2" component="h2">6. Warranties and Disclaimers</Typography>
          <Typography component="p">
            WE PROVIDE OUR SERVICES "AS IS" AND "AS AVAILABLE." TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
          </Typography>

          <Typography variant="h2" component="h2">7. Limitation of Liability</Typography>
          <Typography component="p">
            TO THE FULLEST EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES ARISING OUT OF OR RELATED TO THIS AGREEMENT. OUR TOTAL LIABILITY UNDER THIS AGREEMENT WILL NOT EXCEED THE AMOUNTS PAID BY YOU TO US DURING THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO LIABILITY.
          </Typography>

          <Typography variant="h2" component="h2">8. Indemnification</Typography>
          <Typography component="p">
            You will defend, indemnify, and hold Us harmless from and against all claims, damages, losses, and expenses arising out of or related to: (i) Your breach of this Agreement; (ii) Your violation of any applicable law; (iii) Your Data; or (iv) any claim that Your use of the Services infringes or misappropriates any third-party rights.
          </Typography>

          <Typography variant="h2" component="h2">9. General Provisions</Typography>
          
          <Typography variant="h3" component="h3">9.1 Governing Law</Typography>
          <Typography component="p">
            This Agreement shall be governed by the laws of the State of California, without regard to its conflict of laws principles. Any disputes arising under this Agreement shall be resolved exclusively in the state or federal courts located in San Francisco County, California.
          </Typography>

          <Typography variant="h3" component="h3">9.2 Modifications</Typography>
          <Typography component="p">
            We may modify this Agreement from time to time. We will provide notice of material changes by posting the updated Agreement on Our website or by other means. Your continued use of the Services after such changes constitutes Your acceptance of the modified Agreement.
          </Typography>

          <Typography variant="h3" component="h3">9.3 Assignment</Typography>
          <Typography component="p">
            You may not assign this Agreement without Our prior written consent. We may assign this Agreement in connection with a merger, acquisition, or sale of all or substantially all of Our assets.
          </Typography>

          <Typography variant="h3" component="h3">9.4 Entire Agreement</Typography>
          <Typography component="p">
            This Agreement constitutes the entire agreement between the parties regarding the subject matter hereof and supersedes all prior agreements and understandings.
          </Typography>

          <Typography variant="h3" component="h3">9.5 Contact</Typography>
          <Typography component="p">
            If You have any questions about these Terms of Service, please contact Us at legal@svantic.com.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
