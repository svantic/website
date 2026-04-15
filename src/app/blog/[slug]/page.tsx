import { notFound } from 'next/navigation';
import { Box, Container, Typography, Chip, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { get_post_by_slug, get_all_posts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {
  BRAND_PRIMARY, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG,
} from '@/theme/theme';

export async function generateStaticParams() {
  const posts = get_all_posts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = get_post_by_slug(slug);
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: `${post.title} - Svantic Blog`,
    description: post.excerpt,
  };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const mdx_components = {
  h1: (props: any) => (
    <Box component="h1" sx={{ fontSize: '2rem', fontWeight: 800, color: TEXT_PRIMARY, mt: 5, mb: 3, lineHeight: 1.3 }} {...props} />
  ),
  h2: (props: any) => (
    <Box component="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, color: TEXT_PRIMARY, mt: 5, mb: 2, lineHeight: 1.3 }} {...props} />
  ),
  h3: (props: any) => (
    <Box component="h3" sx={{ fontSize: '1.25rem', fontWeight: 600, color: TEXT_PRIMARY, mt: 4, mb: 2, lineHeight: 1.4 }} {...props} />
  ),
  p: (props: any) => (
    <Box component="p" sx={{ color: TEXT_SECONDARY, lineHeight: 1.8, mb: 2.5, fontSize: '1.05rem' }} {...props} />
  ),
  ul: (props: any) => (
    <Box component="ul" sx={{ color: TEXT_SECONDARY, lineHeight: 1.8, mb: 2.5, pl: 3 }} {...props} />
  ),
  ol: (props: any) => (
    <Box component="ol" sx={{ color: TEXT_SECONDARY, lineHeight: 1.8, mb: 2.5, pl: 3 }} {...props} />
  ),
  li: (props: any) => (
    <Box component="li" sx={{ mb: 1, fontSize: '1.05rem', color: TEXT_SECONDARY }} {...props} />
  ),
  blockquote: (props: any) => (
    <Box
      component="blockquote"
      sx={{
        borderLeft: `4px solid ${BRAND_PRIMARY}`,
        pl: 3,
        py: 1,
        my: 3,
        bgcolor: `${BRAND_PRIMARY}08`,
        borderRadius: '0 8px 8px 0',
        '& p': { mb: 0 },
      }}
      {...props}
    />
  ),
  code: (props: any) => {
    const is_inline = !props.className;
    if (is_inline) {
      return (
        <Box
          component="code"
          sx={{
            bgcolor: CODE_BG,
            color: '#e879f9',
            px: 0.75,
            py: 0.25,
            borderRadius: '4px',
            fontSize: '0.9em',
            fontFamily: 'monospace',
          }}
          {...props}
        />
      );
    }
    return <code {...props} />;
  },
  pre: (props: any) => (
    <Box
      component="pre"
      sx={{
        bgcolor: CODE_BG,
        borderRadius: '12px',
        p: 3,
        overflow: 'auto',
        my: 3,
        border: `1px solid ${BORDER}`,
        '& code': {
          bgcolor: 'transparent',
          color: '#e2e8f0',
          fontSize: '0.9rem',
          fontFamily: '"Fira Code", monospace',
          lineHeight: 1.6,
        },
      }}
      {...props}
    />
  ),
  a: (props: any) => (
    <Box
      component="a"
      sx={{
        color: BRAND_PRIMARY,
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' },
      }}
      {...props}
    />
  ),
  strong: (props: any) => (
    <Box component="strong" sx={{ color: TEXT_PRIMARY, fontWeight: 600 }} {...props} />
  ),
  table: (props: any) => (
    <Box sx={{ overflowX: 'auto', my: 3 }}>
      <Box
        component="table"
        sx={{
          width: '100%',
          borderCollapse: 'collapse',
          '& th, & td': {
            border: `1px solid ${BORDER}`,
            p: 1.5,
            textAlign: 'left',
          },
          '& th': {
            bgcolor: CARD,
            fontWeight: 600,
            color: TEXT_PRIMARY,
          },
          '& td': {
            color: TEXT_SECONDARY,
          },
        }}
        {...props}
      />
    </Box>
  ),
  hr: () => <Box sx={{ border: 'none', borderTop: `1px solid ${BORDER}`, my: 4 }} />,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = get_post_by_slug(slug);

  if (!post) {
    notFound();
  }

  const formatted_date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Box sx={{ bgcolor: SURFACE, minHeight: '100vh' }}>
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Button
          component={Link}
          href="/blog"
          startIcon={<ArrowBackIcon />}
          sx={{ color: TEXT_MUTED, textTransform: 'none', mb: 4, '&:hover': { color: BRAND_PRIMARY } }}
        >
          Back to blog
        </Button>

        <Box sx={{ mb: 6 }}>
          <Chip
            label={post.category}
            size="small"
            sx={{ bgcolor: `${BRAND_PRIMARY}15`, color: BRAND_PRIMARY, fontWeight: 500, mb: 3 }}
          />
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 800,
              color: TEXT_PRIMARY,
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            {post.title}
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, fontSize: '1.15rem', lineHeight: 1.7, mb: 4 }}>
            {post.excerpt}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Typography sx={{ fontWeight: 600, color: TEXT_PRIMARY }}>{post.author}</Typography>
            <Typography sx={{ color: TEXT_MUTED }}>•</Typography>
            <Typography sx={{ color: TEXT_MUTED }}>{formatted_date}</Typography>
            <Typography sx={{ color: TEXT_MUTED }}>•</Typography>
            <Typography sx={{ color: TEXT_MUTED }}>{post.read_time}</Typography>
          </Box>
        </Box>

        <Box sx={{ borderTop: `1px solid ${BORDER}`, pt: 5 }}>
          <MDXRemote source={post.content} components={mdx_components} />
        </Box>

        <Box
          sx={{
            mt: 8,
            p: 4,
            borderRadius: '16px',
            bgcolor: CARD,
            border: `1px solid ${BORDER}`,
            textAlign: 'center',
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', color: TEXT_PRIMARY, mb: 2 }}>
            Ready to get started?
          </Typography>
          <Typography sx={{ color: TEXT_SECONDARY, mb: 3 }}>
            Deploy your first AI agent in minutes.
          </Typography>
          <Button
            component="a"
            href="https://app.svantic.com/signup"
            variant="contained"
            sx={{
              bgcolor: BRAND_PRIMARY,
              textTransform: 'none',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: '10px',
              '&:hover': { bgcolor: '#6D28D9' },
            }}
          >
            Start Building Free
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
