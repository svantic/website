'use client';

import { useState, useEffect } from 'react';
import { Box, Button, Container, Typography, Grid2, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import AppleIcon from '@mui/icons-material/Apple';
import TerminalIcon from '@mui/icons-material/Terminal';
import WindowIcon from '@mui/icons-material/Window';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG,
} from '@/theme/theme';

const API_BASE = '';

const PLATFORMS = [
  { id: 'darwin-arm64', name: 'macOS', arch: 'Apple Silicon', icon: AppleIcon },
  { id: 'darwin-x64', name: 'macOS', arch: 'Intel', icon: AppleIcon },
  { id: 'linux-x64', name: 'Linux', arch: 'x64', icon: TerminalIcon },
  { id: 'linux-arm64', name: 'Linux', arch: 'ARM64', icon: TerminalIcon },
  { id: 'win-x64', name: 'Windows', arch: 'x64', icon: WindowIcon },
];

export default function DownloadPage() {
  const [version, set_version] = useState<string | null>(null);
  const [copied, set_copied] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/api/download/cli/latest`)
      .then(res => res.json())
      .then(data => set_version(data.version))
      .catch(() => set_version('1.3.0'));
  }, []);

  const copy_command = () => {
    navigator.clipboard.writeText('curl -fsSL https://svantic.com/install.sh | bash');
    set_copied(true);
    setTimeout(() => set_copied(false), 2000);
  };

  const download_url = (platform: string) => {
    return `${API_BASE}/api/download/cli/${version}/${platform}`;
  };

  return (
    <>
      <Hero version={version} copied={copied} on_copy={copy_command} />
      <PlatformDownloads version={version} download_url={download_url} />
      <InstallInstructions />
    </>
  );
}

function Hero({ version, copied, on_copy }: { version: string | null; copied: boolean; on_copy: () => void }) {
  return (
    <Box
      sx={{
        width: '100%',
        pt: { xs: 10, md: 14 },
        pb: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${CODE_BG} 0%, #1e293b 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.12,
          backgroundImage:
            'linear-gradient(hsl(262 83% 58% / 0.35) 1px, transparent 1px), ' +
            'linear-gradient(90deg, hsl(262 83% 58% / 0.35) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
        <Typography
          sx={{
            color: BRAND_PRIMARY,
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            mb: 2,
          }}
        >
          Download
        </Typography>

        <Typography
          variant="h1"
          sx={{
            color: '#f8fafc',
            mb: 3,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
          }}
        >
          Svantic CLI
        </Typography>

        {version && (
          <Chip
            label={`v${version}`}
            sx={{
              bgcolor: `${BRAND_PRIMARY}20`,
              color: BRAND_PRIMARY,
              fontWeight: 600,
              mb: 4,
            }}
          />
        )}

        <Typography
          sx={{
            color: 'rgba(248,250,252,0.65)',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            maxWidth: 520,
            mx: 'auto',
            mb: 5,
          }}
        >
          The command-line interface for building, deploying, and managing AI agents on the Svantic platform.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            p: 2,
            borderRadius: '12px',
            bgcolor: 'rgba(0,0,0,0.3)',
            border: `1px solid ${BORDER}`,
            maxWidth: 520,
            mx: 'auto',
          }}
        >
          <Typography
            component="code"
            sx={{
              color: '#e2e8f0',
              fontSize: '0.9rem',
              fontFamily: 'monospace',
              flex: 1,
              textAlign: 'left',
            }}
          >
            curl -fsSL https://svantic.com/install.sh | bash
          </Typography>
          <Button
            onClick={on_copy}
            size="small"
            sx={{
              minWidth: 40,
              color: copied ? '#10b981' : TEXT_MUTED,
              '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
            }}
          >
            {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

function PlatformDownloads({ version, download_url }: { version: string | null; download_url: (p: string) => string }) {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 10 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: TEXT_PRIMARY,
            mb: 1,
            textAlign: 'center',
          }}
        >
          Download for your platform
        </Typography>
        <Typography
          sx={{
            color: TEXT_SECONDARY,
            mb: 6,
            textAlign: 'center',
          }}
        >
          Pre-built binaries — no dependencies required.
        </Typography>

        <Grid2 container spacing={3} justifyContent="center">
          {PLATFORMS.map((platform, i) => (
            <Grid2 key={platform.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    bgcolor: CARD,
                    border: `1px solid ${BORDER}`,
                    textAlign: 'center',
                    transition: 'all 0.2s',
                    '&:hover': {
                      borderColor: BRAND_PRIMARY,
                      boxShadow: `0 8px 24px ${BRAND_PRIMARY}15`,
                    },
                  }}
                >
                  <platform.icon sx={{ fontSize: 48, color: TEXT_MUTED, mb: 2 }} />
                  <Typography sx={{ fontWeight: 700, color: TEXT_PRIMARY, fontSize: '1.1rem' }}>
                    {platform.name}
                  </Typography>
                  <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem', mb: 3 }}>
                    {platform.arch}
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    href={version ? download_url(platform.id) : '#'}
                    disabled={!version}
                    sx={{
                      borderColor: BORDER,
                      color: TEXT_PRIMARY,
                      fontWeight: 600,
                      textTransform: 'none',
                      py: 1.5,
                      '&:hover': {
                        borderColor: BRAND_PRIMARY,
                        bgcolor: `${BRAND_PRIMARY}08`,
                      },
                    }}
                  >
                    Download
                  </Button>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

function InstallInstructions() {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 10 }, bgcolor: CARD, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="md">
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: TEXT_PRIMARY,
            mb: 4,
            textAlign: 'center',
          }}
        >
          Getting started
        </Typography>

        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: '12px', bgcolor: SURFACE, border: `1px solid ${BORDER}` }}>
              <Typography sx={{ fontWeight: 600, color: TEXT_PRIMARY, mb: 2 }}>
                1. Install
              </Typography>
              <Box
                component="pre"
                sx={{
                  p: 2,
                  borderRadius: '8px',
                  bgcolor: CODE_BG,
                  color: '#e2e8f0',
                  fontSize: '0.85rem',
                  overflow: 'auto',
                }}
              >
                {`curl -fsSL https://svantic.com/install.sh | bash`}
              </Box>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: '12px', bgcolor: SURFACE, border: `1px solid ${BORDER}` }}>
              <Typography sx={{ fontWeight: 600, color: TEXT_PRIMARY, mb: 2 }}>
                2. Configure
              </Typography>
              <Box
                component="pre"
                sx={{
                  p: 2,
                  borderRadius: '8px',
                  bgcolor: CODE_BG,
                  color: '#e2e8f0',
                  fontSize: '0.85rem',
                  overflow: 'auto',
                }}
              >
                {`export SVANTIC_CLIENT_ID="your-id"
export SVANTIC_CLIENT_SECRET="your-secret"`}
              </Box>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: '12px', bgcolor: SURFACE, border: `1px solid ${BORDER}` }}>
              <Typography sx={{ fontWeight: 600, color: TEXT_PRIMARY, mb: 2 }}>
                3. Start chatting
              </Typography>
              <Box
                component="pre"
                sx={{
                  p: 2,
                  borderRadius: '8px',
                  bgcolor: CODE_BG,
                  color: '#e2e8f0',
                  fontSize: '0.85rem',
                  overflow: 'auto',
                }}
              >
                {`svantic`}
              </Box>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: '12px', bgcolor: SURFACE, border: `1px solid ${BORDER}` }}>
              <Typography sx={{ fontWeight: 600, color: TEXT_PRIMARY, mb: 2 }}>
                Or use npm
              </Typography>
              <Box
                component="pre"
                sx={{
                  p: 2,
                  borderRadius: '8px',
                  bgcolor: CODE_BG,
                  color: '#e2e8f0',
                  fontSize: '0.85rem',
                  overflow: 'auto',
                }}
              >
                {`npm install -g @svantic/cli`}
              </Box>
            </Box>
          </Grid2>
        </Grid2>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button
            variant="contained"
            href="/docs/getting-started"
            sx={{
              bgcolor: BRAND_PRIMARY,
              px: 4,
              py: 1.5,
              borderRadius: '10px',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': { bgcolor: BRAND_PRIMARY_HOVER },
            }}
          >
            Read the docs
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
