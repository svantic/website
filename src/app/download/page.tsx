'use client';

import { useState, useEffect } from 'react';
import { Box, Button, Container, Typography, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import AppleIcon from '@mui/icons-material/Apple';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import DownloadIcon from '@mui/icons-material/Download';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG,
} from '@/theme/theme';

const API_BASE = '';

const PLATFORMS = [
  { id: 'darwin-arm64', name: 'macOS', arch: 'Apple Silicon (M1/M2/M3)', icon: AppleIcon, recommended: true },
  { id: 'darwin-x64', name: 'macOS', arch: 'Intel', icon: AppleIcon, recommended: false },
  { id: 'linux-x64', name: 'Linux', arch: 'x64 (AMD/Intel)', icon: LinuxIcon, recommended: false },
  { id: 'linux-arm64', name: 'Linux', arch: 'ARM64', icon: LinuxIcon, recommended: false },
  { id: 'win-x64', name: 'Windows', arch: 'x64', icon: WindowsIcon, recommended: false },
];

const FEATURES = [
  { icon: RocketLaunchIcon, title: 'Instant Setup', desc: 'One command to install. No dependencies.' },
  { icon: SpeedIcon, title: 'Lightning Fast', desc: 'Native binary. Starts in milliseconds.' },
  { icon: SecurityIcon, title: 'Secure by Default', desc: 'Code-signed binaries. Secure connections.' },
  { icon: AutoAwesomeIcon, title: 'AI-Powered', desc: 'Chat with agents. Generate code. Deploy.' },
];

function LinuxIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} style={{ width: '1em', height: '1em', ...props.style }}>
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.468v.018c.003.2.066.4.2.601-.003.003-.007.007-.01.007a.927.927 0 00-.63-.179c-.047.003-.087.007-.128.007h-.003c-.035-.007-.065-.007-.098-.02-.05-.003-.097-.007-.14-.012-.003 0-.008-.002-.008-.002a.927.927 0 01-.195-.045l.003-.003a.95.95 0 01-.166-.068c.003-.003.003-.007.003-.007a.726.726 0 01-.136-.102c-.003 0-.006-.003-.006-.003-.265-.266-.312-.595-.312-.885v-.024l-.003-.02v-.02a1.633 1.633 0 01.132-.653c.12-.267.273-.466.466-.6a.891.891 0 01.596-.199zm-2.962 4.116c.077-.003.15.007.225.03.156.06.313.155.464.267.154.135.313.289.472.453.19.2.381.4.57.537.2.14.38.22.577.197h.014c.199-.021.4-.098.601-.195.199-.098.398-.212.547-.318.15-.105.3-.195.4-.247.098-.058.165-.087.227-.087.067 0 .131.03.2.097.067.069.1.17.1.335 0 .399-.165.930-.398 1.463-.235.533-.533 1.067-.8 1.534a9.394 9.394 0 01-.7.995c-.265.335-.468.535-.576.603-.11.067-.165.067-.178.067-.014 0-.027-.003-.043-.003-.062-.003-.13-.033-.235-.1a2.26 2.26 0 01-.376-.333c-.137-.145-.27-.316-.398-.468-.13-.165-.26-.312-.388-.437-.13-.132-.254-.235-.38-.285-.125-.05-.25-.05-.371.003-.123.05-.25.135-.377.265-.13.132-.26.297-.392.465-.13.168-.26.335-.387.468-.136.135-.27.232-.4.264h-.016c-.093.003-.164-.067-.232-.2a1.17 1.17 0 01-.165-.467 2.756 2.756 0 01-.02-.668c.02-.268.063-.535.133-.798.067-.265.15-.532.265-.766.115-.235.265-.468.448-.601.19-.135.414-.202.677-.202z"/>
    </svg>
  );
}

function WindowsIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} style={{ width: '1em', height: '1em', ...props.style }}>
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
    </svg>
  );
}

export default function DownloadPage() {
  const [version, set_version] = useState<string | null>(null);
  const [copied, set_copied] = useState(false);
  const [detected_platform, set_detected_platform] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/download/cli/latest`)
      .then(res => res.json())
      .then(data => set_version(data.version))
      .catch(() => set_version('1.3.14'));

    // Detect user's platform
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('mac')) {
      set_detected_platform('darwin-arm64');
    } else if (ua.includes('win')) {
      set_detected_platform('win-x64');
    } else if (ua.includes('linux')) {
      set_detected_platform('linux-x64');
    }
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
    <Box sx={{ bgcolor: '#0a0a0f', minHeight: '100vh' }}>
      <HeroSection 
        version={version} 
        copied={copied} 
        on_copy={copy_command}
        detected_platform={detected_platform}
        download_url={download_url}
      />
      <FeaturesSection />
      <AllPlatformsSection version={version} download_url={download_url} detected_platform={detected_platform} />
      <QuickStartSection />
    </Box>
  );
}

function HeroSection({ 
  version, 
  copied, 
  on_copy, 
  detected_platform,
  download_url 
}: { 
  version: string | null; 
  copied: boolean; 
  on_copy: () => void;
  detected_platform: string | null;
  download_url: (p: string) => string;
}) {
  const primary_platform = PLATFORMS.find(p => p.id === detected_platform) || PLATFORMS[0];

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, md: 18 },
        pb: { xs: 10, md: 16 },
      }}
    >
      {/* Animated gradient background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, ${BRAND_PRIMARY}30, transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, #3b82f620, transparent),
            radial-gradient(ellipse 50% 30% at 20% 80%, #8b5cf620, transparent)
          `,
        }}
      />
      
      {/* Grid pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          backgroundImage: `
            linear-gradient(${BRAND_PRIMARY}20 1px, transparent 1px),
            linear-gradient(90deg, ${BRAND_PRIMARY}20 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Chip
                icon={<AutoAwesomeIcon sx={{ fontSize: 16, color: `${BRAND_PRIMARY} !important` }} />}
                label={version ? `Version ${version} — Latest Release` : 'Loading...'}
                sx={{
                  bgcolor: `${BRAND_PRIMARY}15`,
                  border: `1px solid ${BRAND_PRIMARY}40`,
                  color: BRAND_PRIMARY,
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  py: 2,
                  px: 1,
                  mb: 4,
                  '& .MuiChip-icon': { ml: 1 },
                }}
              />
            </motion.div>

            {/* Main headline */}
            <Typography
              variant="h1"
              sx={{
                color: '#fff',
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(180deg, #ffffff 0%, #a0a0a0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Svantic CLI
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.7,
                mb: 5,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Build, deploy, and orchestrate AI agents from your terminal. 
              One command to install. Zero dependencies.
            </Typography>

            {/* Primary CTA - Detected platform download */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, mb: 6 }}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="contained"
                  size="large"
                  href={version ? download_url(primary_platform.id) : '#'}
                  disabled={!version}
                  startIcon={<DownloadIcon />}
                  sx={{
                    bgcolor: BRAND_PRIMARY,
                    color: '#fff',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    py: 2,
                    px: 5,
                    borderRadius: '14px',
                    textTransform: 'none',
                    boxShadow: `0 0 40px ${BRAND_PRIMARY}50`,
                    '&:hover': { 
                      bgcolor: BRAND_PRIMARY_HOVER,
                      boxShadow: `0 0 60px ${BRAND_PRIMARY}70`,
                    },
                  }}
                >
                  Download for {primary_platform.name}
                </Button>
              </motion.div>
              
              <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                {primary_platform.arch} • {version ? `v${version}` : '...'} • ~75MB
              </Typography>
            </Box>

            {/* Install command */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                p: 1,
                pl: 3,
                borderRadius: '16px',
                bgcolor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                maxWidth: 560,
                mx: 'auto',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.85rem',
                  fontFamily: 'monospace',
                  mr: 1,
                }}
              >
                $
              </Typography>
              <Typography
                component="code"
                sx={{
                  color: '#e2e8f0',
                  fontSize: { xs: '0.8rem', md: '0.95rem' },
                  fontFamily: '"SF Mono", "Fira Code", monospace',
                  flex: 1,
                  textAlign: 'left',
                  letterSpacing: '-0.01em',
                }}
              >
                curl -fsSL https://svantic.com/install.sh | bash
              </Typography>
              <IconButton
                onClick={on_copy}
                sx={{
                  color: copied ? '#10b981' : 'rgba(255,255,255,0.5)',
                  bgcolor: copied ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.05)',
                  borderRadius: '10px',
                  p: 1.5,
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
              </IconButton>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

function FeaturesSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: { xs: 3, md: 4 },
          }}
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '14px',
                    bgcolor: `${BRAND_PRIMARY}10`,
                    border: `1px solid ${BRAND_PRIMARY}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <feature.icon sx={{ color: BRAND_PRIMARY, fontSize: 26 }} />
                </Box>
                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '1rem', mb: 0.5 }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
                  {feature.desc}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function AllPlatformsSection({ 
  version, 
  download_url,
  detected_platform,
}: { 
  version: string | null; 
  download_url: (p: string) => string;
  detected_platform: string | null;
}) {
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        bgcolor: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: '#fff',
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            textAlign: 'center',
            mb: 2,
          }}
        >
          All Platforms
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.5)',
            textAlign: 'center',
            mb: 6,
          }}
        >
          Pre-compiled native binaries. No runtime dependencies.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' },
            gap: 2,
          }}
        >
          {PLATFORMS.map((platform, i) => {
            const is_detected = platform.id === detected_platform;
            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Box
                  component="a"
                  href={version ? download_url(platform.id) : '#'}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 3,
                    borderRadius: '16px',
                    bgcolor: is_detected ? `${BRAND_PRIMARY}10` : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${is_detected ? BRAND_PRIMARY + '50' : 'rgba(255,255,255,0.08)'}`,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    cursor: version ? 'pointer' : 'default',
                    position: 'relative',
                    '&:hover': {
                      bgcolor: is_detected ? `${BRAND_PRIMARY}15` : 'rgba(255,255,255,0.05)',
                      borderColor: is_detected ? BRAND_PRIMARY : 'rgba(255,255,255,0.15)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {is_detected && (
                    <Chip
                      label="Detected"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: -10,
                        bgcolor: BRAND_PRIMARY,
                        color: '#fff',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        height: 20,
                      }}
                    />
                  )}
                  <Box sx={{ color: is_detected ? BRAND_PRIMARY : 'rgba(255,255,255,0.6)', fontSize: 32, mb: 1.5 }}>
                    <platform.icon style={{ fontSize: 32 }} />
                  </Box>
                  <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>
                    {platform.name}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
                    {platform.arch}
                  </Typography>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

function QuickStartSection() {
  const [copied_step, set_copied_step] = useState<number | null>(null);

  const copy_text = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    set_copied_step(step);
    setTimeout(() => set_copied_step(null), 2000);
  };

  const steps = [
    { title: 'Install', code: 'curl -fsSL https://svantic.com/install.sh | bash' },
    { title: 'Login', code: 'svantic config --client-id YOUR_ID --client-secret YOUR_SECRET' },
    { title: 'Chat', code: 'svantic' },
  ];

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="md">
        <Typography
          sx={{
            color: '#fff',
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            textAlign: 'center',
            mb: 2,
          }}
        >
          Get started in seconds
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.5)',
            textAlign: 'center',
            mb: 6,
          }}
        >
          Three commands to production.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  p: 2,
                  pl: 3,
                  borderRadius: '14px',
                  bgcolor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '8px',
                    bgcolor: `${BRAND_PRIMARY}20`,
                    color: BRAND_PRIMARY,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500, width: 60, flexShrink: 0 }}>
                  {step.title}
                </Typography>
                <Box
                  component="code"
                  sx={{
                    flex: 1,
                    color: '#e2e8f0',
                    fontSize: '0.9rem',
                    fontFamily: '"SF Mono", "Fira Code", monospace',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {step.code}
                </Box>
                <IconButton
                  onClick={() => copy_text(step.code, i)}
                  size="small"
                  sx={{
                    color: copied_step === i ? '#10b981' : 'rgba(255,255,255,0.4)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' },
                  }}
                >
                  {copied_step === i ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                </IconButton>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Button
            variant="outlined"
            href="https://docs.svantic.com"
            target="_blank"
            sx={{
              borderColor: 'rgba(255,255,255,0.2)',
              color: '#fff',
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                borderColor: 'rgba(255,255,255,0.4)',
                bgcolor: 'rgba(255,255,255,0.05)',
              },
            }}
          >
            Read the documentation
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
