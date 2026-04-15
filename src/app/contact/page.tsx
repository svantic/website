'use client';

import { useState } from 'react';
import { Box, Button, Container, Grid2, TextField, Typography, MenuItem } from '@mui/material';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER,
} from '@/theme/theme';

const CONTACT_REASONS = [
  'Sales inquiry',
  'Enterprise pricing',
  'Partnership opportunity',
  'Technical support',
  'Press inquiry',
  'Other',
];

const CONTACT_INFO = [
  { label: 'Sales', value: 'sales@svantic.com', href: 'mailto:sales@svantic.com' },
  { label: 'Support', value: 'support@svantic.com', href: 'mailto:support@svantic.com' },
  { label: 'General', value: 'hello@svantic.com', href: 'mailto:hello@svantic.com' },
  { label: 'Press', value: 'press@svantic.com', href: 'mailto:press@svantic.com' },
];

export default function ContactPage() {
  const [form_data, set_form_data] = useState({
    name: '',
    email: '',
    company: '',
    reason: '',
    message: '',
  });

  const handle_change = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_form_data({ ...form_data, [e.target.name]: e.target.value });
  };

  const handle_submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', form_data);
  };

  return (
    <>
      <Hero />
      <ContactForm form_data={form_data} handle_change={handle_change} handle_submit={handle_submit} />
      <Locations />
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
          Contact Us
        </Typography>
        <Typography sx={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT_PRIMARY, lineHeight: 1.15, mb: 2 }}>
          Let's talk.
        </Typography>
        <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1.1rem', maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
          Whether you have questions about pricing, need technical support, or want to explore a partnership, we're here to help.
        </Typography>
      </Container>
    </Box>
  );
}

function ContactForm({
  form_data,
  handle_change,
  handle_submit,
}: {
  form_data: any;
  handle_change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handle_submit: (e: React.FormEvent) => void;
}) {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 12 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={6}>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <Box
              component="form"
              onSubmit={handle_submit}
              sx={{
                p: { xs: 4, md: 5 },
                borderRadius: '20px',
                bgcolor: CARD,
                border: `1px solid ${BORDER}`,
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', color: TEXT_PRIMARY, mb: 3 }}>
                Send us a message
              </Typography>

              <Grid2 container spacing={3}>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={form_data.name}
                    onChange={handle_change}
                    required
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={form_data.email}
                    onChange={handle_change}
                    required
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Company"
                    name="company"
                    value={form_data.company}
                    onChange={handle_change}
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    select
                    label="Reason for contact"
                    name="reason"
                    value={form_data.reason}
                    onChange={handle_change}
                    required
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                  >
                    {CONTACT_REASONS.map((reason) => (
                      <MenuItem key={reason} value={reason}>
                        {reason}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label="Message"
                    name="message"
                    value={form_data.message}
                    onChange={handle_change}
                    required
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
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
                    Send Message
                  </Button>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box sx={{ mb: 4 }}>
              <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: TEXT_PRIMARY, mb: 2 }}>
                Contact Information
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {CONTACT_INFO.map((info) => (
                  <Box key={info.label}>
                    <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem', mb: 0.5 }}>{info.label}</Typography>
                    <Box
                      component="a"
                      href={info.href}
                      sx={{
                        color: BRAND_PRIMARY,
                        fontSize: '1rem',
                        fontWeight: 500,
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      {info.value}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                p: 4,
                borderRadius: '16px',
                bgcolor: CARD,
                border: `1px solid ${BORDER}`,
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: TEXT_PRIMARY, mb: 2 }}>
                Schedule a demo
              </Typography>
              <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.95rem', lineHeight: 1.7, mb: 3 }}>
                Want to see Svantic in action? Book a 30-minute demo with our team and we'll show you how to build your first agent.
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                href="https://calendly.com/svantic/demo"
                target="_blank"
                sx={{
                  borderColor: BORDER,
                  color: TEXT_PRIMARY,
                  borderRadius: '10px',
                  py: 1.25,
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': { borderColor: BRAND_PRIMARY, bgcolor: `${BRAND_PRIMARY}08` },
                }}
              >
                Book a Demo
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

function Locations() {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 10 }, bgcolor: CARD, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', color: TEXT_PRIMARY, mb: 1 }}>
            Our Offices
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY }}>
            We're a remote-first company with hubs in key locations.
          </Typography>
        </Box>

        <Grid2 container spacing={4} justifyContent="center">
          {[
            { city: 'San Francisco', address: '548 Market St, Suite 35000', country: 'United States' },
            { city: 'New York', address: '175 Greenwich St', country: 'United States' },
            { city: 'London', address: '1 Canada Square', country: 'United Kingdom' },
          ].map((office) => (
            <Grid2 key={office.city} size={{ xs: 12, sm: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 700, color: TEXT_PRIMARY, fontSize: '1.05rem', mb: 0.5 }}>
                  {office.city}
                </Typography>
                <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem' }}>{office.address}</Typography>
                <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>{office.country}</Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
