import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const next_config = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'standalone',
  outputFileTracingIncludes: {
    '/blog': ['./src/content/blog/**/*'],
    '/blog/[slug]': ['./src/content/blog/**/*'],
  },
};

const with_mdx = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default with_mdx(next_config);
