'use client';

import { useState, useEffect, Fragment } from 'react';
import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG, ACCENT_LIGHT, ACCENT_PINK, EMERALD,
} from '@/theme/theme';

/* ================================================================
   ROTATING PHRASES
   ================================================================ */

const ROTATING_PHRASES = [
  'Every system deserves a Savant.',
  'Agents that learn, adapt, and get smarter over time.',
  'Support tickets resolved end to end — not just triaged.',
  'Compliance checks in seconds, not days.',
  'Documents processed at scale with zero hand-offs.',
  'Incidents diagnosed before your team opens Slack.',
  'Institutional knowledge that compounds — not a wiki nobody reads.',
];

const PHRASE_DISPLAY_MS = 3000;
const TRANSITION_MS = 420;

function RotatingText() {
  const [phrase_index, set_phrase_index] = useState(0);
  const [is_visible, set_is_visible] = useState(true);

  useEffect(() => {
    const cycle_handle = setInterval(() => {
      set_is_visible(false);
      setTimeout(() => {
        set_phrase_index((prev) => (prev + 1) % ROTATING_PHRASES.length);
        set_is_visible(true);
      }, TRANSITION_MS);
    }, PHRASE_DISPLAY_MS);
    return () => clearInterval(cycle_handle);
  }, []);

  return (
    <Box sx={{ minHeight: '1.5em', mb: 3, overflow: 'hidden' }}>
      <Typography
        variant="h2"
        sx={{
          background: `linear-gradient(135deg, #A78BFA 0%, ${BRAND_PRIMARY} 45%, ${ACCENT_PINK} 100%)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          opacity: is_visible ? 1 : 0,
          transform: is_visible ? 'translateY(0)' : 'translateY(12px)',
          transition: `opacity ${TRANSITION_MS}ms ease, transform ${TRANSITION_MS}ms ease`,
          fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
        }}
      >
        {ROTATING_PHRASES[phrase_index]}
      </Typography>
    </Box>
  );
}

/* ================================================================
   MESH DIAGRAM
   ================================================================ */

const MESH_NODES: { id: string; label: string; x: number; y: number; is_center?: boolean }[] = [
  { id: 'mesh', label: 'Svantic Mesh', x: 410, y: 350, is_center: true },
  { id: 'inventory', label: 'Inventory', x: 160, y: 95 },
  { id: 'payments', label: 'Payments', x: 470, y: 78 },
  { id: 'support', label: 'Support', x: 700, y: 155 },
  { id: 'compliance', label: 'Compliance', x: 690, y: 385 },
  { id: 'shipping', label: 'Shipping', x: 600, y: 590 },
  { id: 'crm', label: 'CRM', x: 215, y: 600 },
  { id: 'analytics', label: 'Analytics', x: 120, y: 410 },
  { id: 'success', label: 'Customer Success', x: 135, y: 235 },
  { id: 'billing', label: 'Billing Engine', x: 680, y: 260 },
];

const MESH_EDGES: [string, string][] = [
  ['mesh', 'inventory'],
  ['mesh', 'payments'],
  ['mesh', 'support'],
  ['mesh', 'compliance'],
  ['mesh', 'shipping'],
  ['mesh', 'crm'],
  ['mesh', 'analytics'],
  ['mesh', 'success'],
  ['mesh', 'billing'],
  ['inventory', 'shipping'],
  ['payments', 'billing'],
  ['support', 'success'],
  ['compliance', 'billing'],
  ['crm', 'analytics'],
  ['analytics', 'success'],
  ['shipping', 'crm'],
  ['support', 'compliance'],
  ['inventory', 'payments'],
];

const DW = 820;
const DH = 720;
const CENTER_NODE_R = 60;
const MESH_LOGO_SIZE = 76;
const LAYER_RY = 18;
const LAYER_GAP = 7;

const MESH_END_SERVICE_FILL = '#f5f3ff';
const MESH_END_SERVICE_STROKE = 'rgba(124, 58, 237, 0.22)';
const MESH_END_SAVANT_FILL = 'rgba(124, 58, 237, 0.07)';
const MESH_END_SAVANT_STROKE = BRAND_PRIMARY;
const MESH_END_CONNECTOR = 'rgba(124, 58, 237, 0.35)';

function MeshDiagram() {
  const node_map = Object.fromEntries(MESH_NODES.map((n) => [n.id, n]));
  const center = node_map['mesh'];
  const satellites = MESH_NODES.filter((n) => !n.is_center);

  const layer_offset = LAYER_RY + LAYER_GAP / 2;

  const savant_pos: Record<string, { x: number; y: number }> = {};
  const service_pos: Record<string, { x: number; y: number }> = {};

  for (const n of satellites) {
    const above_center = n.y < center.y;
    const savant_y = above_center ? n.y + layer_offset : n.y - layer_offset;
    const svc_y = above_center ? n.y - layer_offset : n.y + layer_offset;
    savant_pos[n.id] = { x: n.x, y: savant_y };
    service_pos[n.id] = { x: n.x, y: svc_y };
  }

  const resolve_pos = (id: string) => {
    if (id === 'mesh') return { x: center.x, y: center.y };
    return savant_pos[id] ?? { x: node_map[id].x, y: node_map[id].y };
  };

  const edges = MESH_EDGES.map(([a, b], i) => ({
    x1: resolve_pos(a).x,
    y1: resolve_pos(a).y,
    x2: resolve_pos(b).x,
    y2: resolve_pos(b).y,
    is_hub: a === 'mesh' || b === 'mesh',
    idx: i,
  }));

  return (
    <svg viewBox={`0 0 ${DW} ${DH}`} width="100%" height="100%" style={{ display: 'block' }}>
      <defs>
        <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.486  0 0 0 0 0.227  0 0 0 0 0.929  0 0 0 0.55 0"
            result="brand_blur"
          />
          <feMerge>
            <feMergeNode in="brand_blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="glow-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.486  0 0 0 0 0.227  0 0 0 0 0.929  0 0 0 0.22 0"
            result="soft_blur"
          />
          <feMerge>
            <feMergeNode in="soft_blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="glow-particle" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Mesh connection lines */}
      {edges.map((e) => (
        <Fragment key={`edge-${e.idx}`}>
          <motion.line
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            stroke="hsl(262 83% 58%)"
            strokeOpacity={e.is_hub ? 0.14 : 0.06}
            strokeWidth={e.is_hub ? 1 : 0.7}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.2 + e.idx * 0.06, ease: 'easeOut' }}
          />

          <circle r={e.is_hub ? 2.5 : 1.8} fill="hsl(262 83% 58%)" filter="url(#glow-particle)">
            <animateMotion
              dur={`${2.5 + e.idx * 0.2}s`}
              repeatCount="indefinite"
              path={`M${e.x1},${e.y1} L${e.x2},${e.y2}`}
            />
            <animate
              attributeName="opacity"
              values="0;0.85;0.85;0"
              dur={`${2.5 + e.idx * 0.2}s`}
              repeatCount="indefinite"
            />
          </circle>

          {e.is_hub && (
            <circle r={1.5} fill="hsl(262 83% 70%)">
              <animateMotion
                dur={`${3.2 + e.idx * 0.15}s`}
                repeatCount="indefinite"
                path={`M${e.x2},${e.y2} L${e.x1},${e.y1}`}
              />
              <animate
                attributeName="opacity"
                values="0;0.55;0.55;0"
                dur={`${3.2 + e.idx * 0.15}s`}
                repeatCount="indefinite"
              />
            </circle>
          )}
        </Fragment>
      ))}

      {/* Central node: Svantic Mesh */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
        style={{ originX: `${center.x}px`, originY: `${center.y}px` }}
      >
        <circle cx={center.x} cy={center.y} r={CENTER_NODE_R + 10} fill="none" stroke="hsl(262 83% 58%)" strokeWidth={1}>
          <animate
            attributeName="r"
            values={`${CENTER_NODE_R + 8};${CENTER_NODE_R + 18};${CENTER_NODE_R + 8}`}
            dur="3s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.18;0.04;0.18" dur="3s" repeatCount="indefinite" />
        </circle>

        <circle cx={center.x} cy={center.y} r={CENTER_NODE_R + 14} fill="none" stroke="hsl(262 83% 58%)" strokeWidth={0.5}>
          <animate
            attributeName="r"
            values={`${CENTER_NODE_R + 12};${CENTER_NODE_R + 24};${CENTER_NODE_R + 12}`}
            dur="4s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.08;0.02;0.08" dur="4s" repeatCount="indefinite" />
        </circle>

        <circle
          cx={center.x}
          cy={center.y}
          r={CENTER_NODE_R}
          fill="#ffffff"
          stroke="hsl(262 83% 58%)"
          strokeWidth={1.5}
          filter="url(#glow-cyan)"
        />

        <image
          href="/logo.png"
          x={center.x - MESH_LOGO_SIZE / 2}
          y={center.y - MESH_LOGO_SIZE / 2}
          width={MESH_LOGO_SIZE}
          height={MESH_LOGO_SIZE}
          preserveAspectRatio="xMidYMid meet"
          style={{ pointerEvents: 'none' }}
        />

        <text
          x={center.x}
          y={center.y + CENTER_NODE_R + 18}
          textAnchor="middle"
          fill="#64748b"
          fontSize="12"
          fontWeight="600"
          fontFamily="'JetBrains Mono', monospace"
          letterSpacing="0.06em"
        >
          MESH
        </text>
      </motion.g>

      {/* Satellite service nodes (two-layer: savant + service) */}
      {satellites.map((n, i) => {
        const savant_label = `${n.label} Savant`;
        const label_width = savant_label.length * 7.4 + 32;
        const rx = Math.max(label_width / 2, 62);

        const s = savant_pos[n.id];
        const v = service_pos[n.id];

        const top_y = Math.min(s.y, v.y) + LAYER_RY;
        const bot_y = Math.max(s.y, v.y) - LAYER_RY;

        return (
          <motion.g
            key={n.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 18,
              delay: 0.35 + i * 0.1,
            }}
            style={{ originX: `${n.x}px`, originY: `${n.y}px` }}
          >
            <rect
              x={v.x - rx}
              y={v.y - LAYER_RY}
              width={rx * 2}
              height={LAYER_RY * 2}
              rx={LAYER_RY}
              ry={LAYER_RY}
              fill={MESH_END_SERVICE_FILL}
              stroke={MESH_END_SERVICE_STROKE}
              strokeWidth={0.75}
            />
            <text
              x={v.x}
              y={v.y + 4.5}
              textAnchor="middle"
              fill={TEXT_SECONDARY}
              fontSize="10.5"
              fontWeight="500"
              fontFamily="'JetBrains Mono', monospace"
            >
              {n.label}
            </text>

            <rect
              x={s.x - rx}
              y={s.y - LAYER_RY}
              width={rx * 2}
              height={LAYER_RY * 2}
              rx={LAYER_RY}
              ry={LAYER_RY}
              fill={MESH_END_SAVANT_FILL}
              stroke={MESH_END_SAVANT_STROKE}
              strokeWidth={0.9}
              strokeOpacity={0.42}
              filter="url(#glow-soft)"
            />
            <text
              x={s.x}
              y={s.y + 4.5}
              textAnchor="middle"
              fill={BRAND_PRIMARY}
              fontSize="11"
              fontWeight="600"
              fontFamily="'JetBrains Mono', monospace"
            >
              {savant_label}
            </text>

            <line x1={n.x} y1={top_y} x2={n.x} y2={bot_y} stroke={MESH_END_CONNECTOR} strokeWidth={0.85} />
          </motion.g>
        );
      })}
    </svg>
  );
}

/* ================================================================
   USE CASES
   ================================================================ */

const USE_CASES = [
  {
    category: 'Customer Support',
    result: 'Generate a Zendesk agent in minutes. Resolve tickets 24/7.',
    body: 'Forge generates tools from the Zendesk API. The mesh orchestrates CRM lookup, knowledge search, and resolution.',
    color: '#8b5cf6',
    href: '/use-cases/customer-support',
  },
  {
    category: 'DevOps & CI/CD',
    result: 'A build failed at 2am. Your agents diagnosed it by 2:01.',
    body: 'Compose a Datadog + PagerDuty + GitHub agent. The mesh detects, diagnoses, generates a fix, and opens a PR.',
    color: '#0ea5e9',
    href: '/use-cases/devops',
  },
  {
    category: 'Document Processing',
    result: 'Intake, extract, validate, route — no hand-offs to chase.',
    body: 'Specialized agents for each step. The knowledge store learns document layouts over time.',
    color: '#10b981',
    href: '/use-cases/document-processing',
  },
  {
    category: 'Compliance & Audit',
    result: '"What did the AI decide and why?" — answered in one click.',
    body: 'Built-in telemetry traces every agent action. Audit trails are immutable and queryable.',
    color: '#f59e0b',
    href: '/use-cases/compliance',
  },
];

const PLATFORM_FEATURES = [
  { title: 'Forge', body: 'Generate production-ready agent code from an OpenAPI spec, TypeScript source, or plain English.', color: '#0ea5e9' },
  { title: 'SDK', body: 'Turn any existing application into an A2A-compliant agent with five lines of code.', color: EMERALD },
  { title: 'Mesh', body: 'A multi-agent runtime that plans, decomposes, executes, and evaluates.', color: BRAND_PRIMARY },
  { title: 'Knowledge Store', body: 'Institutional memory that survives sessions and deployments.', color: '#f59e0b' },
  { title: 'Dashboard', body: 'Every agent action, tool call, LLM decision, and token spend — traced and surfaced.', color: '#0ea5e9' },
  { title: 'Guardrails', body: 'Policies enforced before actions execute. Identity, boundaries, least-privilege.', color: ACCENT_PINK },
];

const TRUSTED_BY = ['Fortune 500 Companies', 'Fast-Growing Startups', 'Government Agencies', 'Healthcare Organizations'];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <UseCases />
      <Platform />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <Box
      sx={{
        width: '100%',
        background: `linear-gradient(180deg, ${SURFACE} 0%, ${CARD} 55%)`,
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          backgroundImage:
            'linear-gradient(hsl(262 83% 58% / 0.35) 1px, transparent 1px), ' +
            'linear-gradient(90deg, hsl(262 83% 58% / 0.35) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Left — copy */}
        <Box sx={{ flex: 1, maxWidth: { md: 600 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <img src="/logo.png" alt="Svantic" style={{ width: 56, height: 56, display: 'block', objectFit: 'contain' }} />
          </Box>

          <Typography
            sx={{
              color: BRAND_PRIMARY,
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            Every System Deserves a Savant
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: TEXT_PRIMARY,
              mb: 2,
              lineHeight: 1.1,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              fontWeight: 900,
            }}
          >
            AI agents that{' '}
            <Box
              component="span"
              sx={{
                background: `linear-gradient(135deg, ${ACCENT_LIGHT}, ${BRAND_PRIMARY})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              learn and adapt.
            </Box>
          </Typography>

          <RotatingText />

          <Typography
            sx={{
              color: TEXT_SECONDARY,
              mb: 4,
              fontSize: '1.05rem',
              lineHeight: 1.65,
              maxWidth: 520,
            }}
          >
            A <strong>Savant</strong> is an AI agent that wraps your existing service — ready to act, learn from every interaction, and get
            smarter over time. The mesh orchestrates them. Knowledge compounds. Governance and telemetry are built in.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
            <Button
              variant="contained"
              size="large"
              href="https://app.svantic.com/signup"
              sx={{
                bgcolor: BRAND_PRIMARY,
                color: '#ffffff',
                fontWeight: 600,
                borderRadius: '10px',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'none',
                '&:hover': { bgcolor: BRAND_PRIMARY_HOVER },
              }}
            >
              Sign Up Free
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/how-it-works"
              sx={{
                borderColor: 'rgba(124,58,237,0.35)',
                color: BRAND_PRIMARY,
                borderRadius: '10px',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'none',
                '&:hover': {
                  borderColor: BRAND_PRIMARY,
                  bgcolor: 'rgba(124,58,237,0.06)',
                },
              }}
            >
              Get Started
            </Button>
          </Box>

          <Typography sx={{ color: TEXT_MUTED, fontSize: '0.82rem', lineHeight: 1.5 }}>
            Free credits included. No credit card required.
          </Typography>
        </Box>

        {/* Right — animated mesh diagram */}
        <Box
          sx={{
            flex: 1.2,
            minWidth: { md: 580 },
            mt: { md: 2 },
            alignSelf: 'stretch',
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
          }}
        >
          <MeshDiagram />
        </Box>
      </Container>
    </Box>
  );
}

function TrustedBy() {
  return (
    <Box sx={{ width: '100%', py: 6, bgcolor: CARD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Typography
          sx={{ color: TEXT_MUTED, fontSize: '0.8rem', textAlign: 'center', mb: 3, letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          Trusted by teams at
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 4, md: 8 }, flexWrap: 'wrap' }}>
          {TRUSTED_BY.map((name) => (
            <Typography key={name} sx={{ color: TEXT_MUTED, fontSize: '0.95rem', fontWeight: 500 }}>
              {name}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function UseCases() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}
          >
            Use Cases
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 2 }}>
            What teams are building.
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, maxWidth: 560, mx: 'auto' }}>
            From support automation to compliance pipelines — real patterns running in production.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {USE_CASES.map((uc, i) => (
            <Grid2 key={uc.category} size={{ xs: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Box
                  component="a"
                  href={uc.href}
                  sx={{
                    display: 'block',
                    p: 4,
                    borderRadius: '16px',
                    bgcolor: CARD,
                    border: `1px solid ${BORDER}`,
                    height: '100%',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: 'rgba(124,58,237,0.3)',
                      boxShadow: '0 8px 24px rgba(124,58,237,0.08)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Box sx={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', bgcolor: uc.color }} />
                  <Typography
                    sx={{ color: uc.color, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 2 }}
                  >
                    {uc.category}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: TEXT_PRIMARY, mb: 1.5, lineHeight: 1.35 }}>
                    {uc.result}
                  </Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.65 }}>{uc.body}</Typography>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button href="/use-cases" sx={{ color: BRAND_PRIMARY, fontWeight: 600, textTransform: 'none' }}>
            View all use cases →
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

function Platform() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: CARD, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}
          >
            The Platform
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 2 }}>
            Build, orchestrate, observe, and learn.
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, maxWidth: 560, mx: 'auto' }}>
            Six capabilities across three layers. Forge generates code. The SDK wires capabilities. The mesh orchestrates. Governance and
            telemetry are built in.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {PLATFORM_FEATURES.map((feature, i) => (
            <Grid2 key={feature.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    border: `1px solid ${BORDER}`,
                    bgcolor: SURFACE,
                    height: '100%',
                    transition: 'all 0.2s ease',
                    '&:hover': { borderColor: `${feature.color}40`, bgcolor: `${feature.color}05` },
                  }}
                >
                  <Box sx={{ width: 3, height: 32, borderRadius: 1, bgcolor: feature.color, mb: 2 }} />
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: TEXT_PRIMARY, mb: 1 }}>{feature.title}</Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.65 }}>{feature.body}</Typography>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button href="/features" sx={{ color: BRAND_PRIMARY, fontWeight: 600, textTransform: 'none' }}>
            Explore all features →
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

function HowItWorks() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: SURFACE, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}
          >
            How It Works
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 2 }}>
            From zero to production in minutes.
          </Typography>
        </Box>

        <Grid2 container spacing={4}>
          {[
            {
              step: '01',
              title: 'Generate',
              body: 'Point Forge at an OpenAPI spec, TypeScript file, or describe what you need. It generates tool specs, capabilities, and scaffolded projects.',
            },
            {
              step: '02',
              title: 'Connect',
              body: 'The SDK turns any existing service into an agent. Define capabilities, register with the mesh, and your service is now AI-callable.',
            },
            {
              step: '03',
              title: 'Orchestrate',
              body: 'The mesh plans, executes, and evaluates. Complex workflows emerge from simple tasks. Knowledge compounds over time.',
            },
            {
              step: '04',
              title: 'Govern',
              body: 'Guardrails enforce policies before actions execute. Every decision is traced. Approval workflows keep humans in the loop.',
            },
          ].map((item, i) => (
            <Grid2 key={item.step} size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '14px',
                      bgcolor: `${BRAND_PRIMARY}12`,
                      border: `1px solid ${BRAND_PRIMARY}25`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <Typography sx={{ color: BRAND_PRIMARY, fontWeight: 800, fontSize: '1rem' }}>{item.step}</Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: TEXT_PRIMARY, mb: 1 }}>{item.title}</Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.65 }}>{item.body}</Typography>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

function Testimonials() {
  return (
    <Box sx={{ width: '100%', py: { xs: 10, md: 14 }, bgcolor: CARD, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}
          >
            Testimonials
          </Typography>
          <Typography variant="h2" sx={{ color: TEXT_PRIMARY }}>
            What our customers say.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {[
            {
              quote:
                'Svantic reduced our ticket resolution time by 60%. The knowledge store means our agents actually learn from every interaction.',
              author: 'Sarah Chen',
              role: 'VP of Support',
              company: 'TechCorp',
            },
            {
              quote:
                'We deployed our first production agent in under a week. The guardrails gave our compliance team the confidence to go live.',
              author: 'Michael Torres',
              role: 'CTO',
              company: 'FinanceFlow',
            },
            {
              quote:
                'The flipped tool model was the key. Our data never leaves our infrastructure, which made enterprise approval possible.',
              author: 'Jennifer Park',
              role: 'Head of Engineering',
              company: 'HealthSync',
            },
          ].map((testimonial, i) => (
            <Grid2 key={i} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  border: `1px solid ${BORDER}`,
                  bgcolor: SURFACE,
                  height: '100%',
                }}
              >
                <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1rem', lineHeight: 1.7, mb: 3, fontStyle: 'italic' }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </Typography>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: TEXT_PRIMARY, fontSize: '0.95rem' }}>{testimonial.author}</Typography>
                  <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>
                    {testimonial.role}, {testimonial.company}
                  </Typography>
                </Box>
              </Box>
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
        <Typography variant="h2" sx={{ color: '#f8fafc', mb: 3 }}>
          Ready to build your first agent?
        </Typography>
        <Typography sx={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto' }}>
          Create your free account and deploy your first agent in minutes. No credit card required.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            href="https://app.svantic.com/signup"
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
            Start Building Free
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="/contact"
            sx={{
              borderColor: 'rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.85)',
              borderRadius: '10px',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              '&:hover': {
                borderColor: 'rgba(255,255,255,0.35)',
                bgcolor: 'rgba(255,255,255,0.06)',
              },
            }}
          >
            Talk to Sales
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
