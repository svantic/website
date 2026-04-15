'use client';

import { Box, Container, Grid2, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import {
  BRAND_PRIMARY, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER,
} from '@/theme/theme';

const BLOG_POSTS = [
  {
    slug: 'introducing-svantic',
    title: 'Introducing Svantic: The Platform for Production AI Agents',
    excerpt: "Today we're announcing Svantic, the platform that makes AI agents reliable, governable, and production-ready. Here's why we built it.",
    author: 'Alex Chen',
    date: 'April 10, 2026',
    category: 'Announcements',
    read_time: '5 min read',
    featured: true,
  },
  {
    slug: 'flipped-tool-model',
    title: 'The Flipped Tool Model: Why AI Agents Should Never Touch Your Data',
    excerpt: "Every existing agent framework assumes tools run on the server. Here's why that assumption fails for real-world automation.",
    author: 'Sarah Kim',
    date: 'April 8, 2026',
    category: 'Technical',
    read_time: '8 min read',
  },
  {
    slug: 'knowledge-store-deep-dive',
    title: 'Building Institutional Memory: A Deep Dive into the Knowledge Store',
    excerpt: "How Svantic's knowledge store turns every interaction into compounding intelligence for your AI agents.",
    author: 'Michael Torres',
    date: 'April 5, 2026',
    category: 'Technical',
    read_time: '10 min read',
  },
  {
    slug: 'customer-support-automation',
    title: 'How TechCorp Reduced Ticket Resolution Time by 60% with Svantic',
    excerpt: 'A case study on deploying AI agents for customer support at scale, with real metrics and lessons learned.',
    author: 'Jennifer Park',
    date: 'April 2, 2026',
    category: 'Case Studies',
    read_time: '7 min read',
  },
  {
    slug: 'guardrails-governance',
    title: 'Guardrails and Governance: Making AI Agents Enterprise-Ready',
    excerpt: 'How to deploy autonomous AI agents in regulated industries without losing sleep.',
    author: 'Alex Chen',
    date: 'March 28, 2026',
    category: 'Product',
    read_time: '6 min read',
  },
  {
    slug: 'forge-announcement',
    title: 'Announcing Forge: Generate Production Agents in Seconds',
    excerpt: "Point Forge at an OpenAPI spec and get production-ready agent code. Here's how it works.",
    author: 'Sarah Kim',
    date: 'March 25, 2026',
    category: 'Announcements',
    read_time: '4 min read',
  },
];

const CATEGORIES = ['All', 'Announcements', 'Technical', 'Product', 'Case Studies'];

export default function BlogPage() {
  const featured_post = BLOG_POSTS.find(p => p.featured);
  const other_posts = BLOG_POSTS.filter(p => !p.featured);

  return (
    <>
      <Hero />
      {featured_post && <FeaturedPost post={featured_post} />}
      <PostList posts={other_posts} />
      <Newsletter />
    </>
  );
}

function Hero() {
  return (
    <Box
      sx={{
        width: '100%',
        pt: { xs: 8, md: 12 },
        pb: { xs: 4, md: 6 },
        textAlign: 'center',
        background: `linear-gradient(180deg, ${CARD} 0%, ${SURFACE} 100%)`,
      }}
    >
      <Container maxWidth="md">
        <Typography sx={{ color: BRAND_PRIMARY, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
          Blog
        </Typography>
        <Typography sx={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT_PRIMARY, lineHeight: 1.15, mb: 2 }}>
          Insights on AI agents, automation, and production systems.
        </Typography>
        <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1.1rem', maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
          Technical deep dives, case studies, and product updates from the Svantic team.
        </Typography>
      </Container>
    </Box>
  );
}

function FeaturedPost({ post }: { post: typeof BLOG_POSTS[0] }) {
  return (
    <Box sx={{ width: '100%', py: { xs: 4, md: 6 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            component="a"
            href={`/blog/${post.slug}`}
            sx={{
              display: 'block',
              p: { xs: 4, md: 6 },
              borderRadius: '20px',
              bgcolor: CARD,
              border: `1px solid ${BORDER}`,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: `${BRAND_PRIMARY}40`,
                boxShadow: `0 12px 40px ${BRAND_PRIMARY}10`,
              },
            }}
          >
            <Chip label="Featured" size="small" sx={{ bgcolor: BRAND_PRIMARY, color: '#fff', fontWeight: 600, mb: 3 }} />
            <Typography sx={{ fontWeight: 800, fontSize: { xs: '1.5rem', md: '2rem' }, color: TEXT_PRIMARY, mb: 2, lineHeight: 1.25 }}>
              {post.title}
            </Typography>
            <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1.1rem', lineHeight: 1.7, mb: 3, maxWidth: 700 }}>
              {post.excerpt}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Typography sx={{ fontWeight: 600, color: TEXT_PRIMARY, fontSize: '0.9rem' }}>{post.author}</Typography>
              <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>•</Typography>
              <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>{post.date}</Typography>
              <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>•</Typography>
              <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>{post.read_time}</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

function PostList({ posts }: { posts: typeof BLOG_POSTS }) {
  return (
    <Box sx={{ width: '100%', py: { xs: 6, md: 10 }, bgcolor: SURFACE }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', gap: 1.5, mb: 6, flexWrap: 'wrap' }}>
          {CATEGORIES.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              clickable
              sx={{
                bgcolor: cat === 'All' ? BRAND_PRIMARY : CARD,
                color: cat === 'All' ? '#fff' : TEXT_SECONDARY,
                fontWeight: 500,
                border: cat === 'All' ? 'none' : `1px solid ${BORDER}`,
                '&:hover': { bgcolor: cat === 'All' ? BRAND_PRIMARY : `${BRAND_PRIMARY}10` },
              }}
            />
          ))}
        </Box>

        <Grid2 container spacing={3}>
          {posts.map((post, i) => (
            <Grid2 key={post.slug} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ height: '100%' }}
              >
                <Box
                  component="a"
                  href={`/blog/${post.slug}`}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 4,
                    borderRadius: '16px',
                    bgcolor: CARD,
                    border: `1px solid ${BORDER}`,
                    height: '100%',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: `${BRAND_PRIMARY}30`,
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Chip
                    label={post.category}
                    size="small"
                    sx={{ alignSelf: 'flex-start', bgcolor: `${BRAND_PRIMARY}10`, color: BRAND_PRIMARY, fontWeight: 500, mb: 2 }}
                  />
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: TEXT_PRIMARY, mb: 1.5, lineHeight: 1.35, flex: 1 }}>
                    {post.title}
                  </Typography>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.6, mb: 3 }}>
                    {post.excerpt}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 'auto' }}>
                    <Typography sx={{ fontWeight: 500, color: TEXT_PRIMARY, fontSize: '0.85rem' }}>{post.author}</Typography>
                    <Typography sx={{ color: TEXT_MUTED, fontSize: '0.8rem' }}>•</Typography>
                    <Typography sx={{ color: TEXT_MUTED, fontSize: '0.8rem' }}>{post.read_time}</Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

function Newsletter() {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 10 }, bgcolor: CARD, borderTop: `1px solid ${BORDER}` }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', color: TEXT_PRIMARY, mb: 2 }}>
          Subscribe to our newsletter
        </Typography>
        <Typography sx={{ color: TEXT_SECONDARY, mb: 4 }}>
          Get the latest posts delivered straight to your inbox. No spam, unsubscribe anytime.
        </Typography>
        <Box
          component="form"
          sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Box
            component="input"
            type="email"
            placeholder="you@company.com"
            sx={{
              flex: 1,
              minWidth: 240,
              px: 2,
              py: 1.5,
              borderRadius: '10px',
              border: `1px solid ${BORDER}`,
              fontSize: '0.95rem',
              outline: 'none',
              '&:focus': { borderColor: BRAND_PRIMARY },
            }}
          />
          <Box
            component="button"
            type="submit"
            sx={{
              px: 3,
              py: 1.5,
              borderRadius: '10px',
              bgcolor: BRAND_PRIMARY,
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.95rem',
              border: 'none',
              cursor: 'pointer',
              '&:hover': { bgcolor: '#6D28D9' },
            }}
          >
            Subscribe
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
