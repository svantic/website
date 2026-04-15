import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/theme/theme_provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Svantic — Build, Orchestrate, and Govern AI Agents',
  description: 'Every system deserves a Savant. Build AI agents that learn, adapt, and get smarter over time. From pilot to production.',
  keywords: ['AI agents', 'automation', 'orchestration', 'machine learning', 'enterprise AI'],
  authors: [{ name: 'Svantic' }],
  openGraph: {
    title: 'Svantic — Build, Orchestrate, and Govern AI Agents',
    description: 'Every system deserves a Savant. Build AI agents that learn, adapt, and get smarter over time.',
    url: 'https://svantic.com',
    siteName: 'Svantic',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Svantic — AI Agents That Learn and Adapt',
    description: 'Every system deserves a Savant. Build AI agents that learn, adapt, and get smarter over time.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
