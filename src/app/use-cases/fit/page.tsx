'use client';

import { useState } from 'react';
import { Box, Button, Container, Typography, LinearProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Link from 'next/link';
import {
  BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED,
  SURFACE, CARD, BORDER, CODE_BG, EMERALD,
} from '@/theme/theme';

const QUESTIONS = [
  {
    id: 'sources',
    question: 'How many external systems do you integrate with?',
    options: [
      { label: 'Fewer than 10', score: 0 },
      { label: '10-30', score: 1 },
      { label: '30-100', score: 2 },
      { label: 'More than 100', score: 3 },
    ],
  },
  {
    id: 'variability',
    question: 'How varied are the inputs you process?',
    options: [
      { label: 'Standardized — same format every time', score: 0 },
      { label: 'Mostly standard with some exceptions', score: 1 },
      { label: 'Many different formats from different sources', score: 2 },
      { label: 'Every source is different', score: 3 },
    ],
  },
  {
    id: 'change',
    question: 'How often do external systems change?',
    options: [
      { label: 'Rarely — stable APIs we control', score: 0 },
      { label: 'Occasionally — quarterly updates', score: 1 },
      { label: 'Frequently — monthly changes', score: 2 },
      { label: 'Constantly — portals redesign, formats evolve', score: 3 },
    ],
  },
  {
    id: 'volume',
    question: 'How many times do you run similar tasks?',
    options: [
      { label: 'One-time or occasional', score: 0 },
      { label: 'Hundreds per month', score: 1 },
      { label: 'Thousands per month', score: 2 },
      { label: 'Tens of thousands or more', score: 3 },
    ],
  },
  {
    id: 'workflow',
    question: 'How predictable is your workflow?',
    options: [
      { label: 'Fixed — same steps every time', score: 0 },
      { label: 'Mostly fixed with some branches', score: 1 },
      { label: 'Dynamic — steps depend on what we find', score: 2 },
      { label: 'Highly dynamic — context determines everything', score: 3 },
    ],
  },
  {
    id: 'governance',
    question: 'Do you need audit trails and governance?',
    options: [
      { label: 'No — internal tooling only', score: 0 },
      { label: 'Nice to have', score: 1 },
      { label: 'Yes — compliance matters', score: 2 },
      { label: 'Critical — regulated industry', score: 3 },
    ],
  },
];

export default function FitAssessmentPage() {
  const [current_question, set_current_question] = useState(0);
  const [answers, set_answers] = useState<Record<string, number>>({});
  const [completed, set_completed] = useState(false);

  const handle_answer = (score: number) => {
    const question = QUESTIONS[current_question];
    const new_answers = { ...answers, [question.id]: score };
    set_answers(new_answers);

    if (current_question < QUESTIONS.length - 1) {
      set_current_question(current_question + 1);
    } else {
      set_completed(true);
    }
  };

  const total_score = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const max_score = QUESTIONS.length * 3;
  const percentage = Math.round((total_score / max_score) * 100);

  const get_result = () => {
    if (percentage >= 70) {
      return {
        verdict: 'Strong Fit',
        color: EMERALD,
        icon: <CheckCircleIcon sx={{ fontSize: 48, color: EMERALD }} />,
        description: "Your workflow has the patterns where Svantic excels — many sources, varied inputs, frequent changes, and high volume. The learning and orchestration capabilities will compound value over time.",
        cta: 'Get Started',
        cta_href: 'https://app.svantic.com/signup',
      };
    } else if (percentage >= 40) {
      return {
        verdict: 'Possible Fit',
        color: '#f59e0b',
        icon: <CheckCircleIcon sx={{ fontSize: 48, color: '#f59e0b' }} />,
        description: "Your workflow has some of the patterns where Svantic helps, but not all. It might be worth a conversation to see if the specific pain points align with what we solve.",
        cta: 'Talk to Us',
        cta_href: '/contact',
      };
    } else {
      return {
        verdict: 'Probably Not a Fit',
        color: '#ef4444',
        icon: <CancelIcon sx={{ fontSize: 48, color: '#ef4444' }} />,
        description: "Based on your answers, your workflow is probably well-served by simpler tools — static integrations, Zapier, or custom scripts. Svantic adds complexity that you may not need.",
        cta: 'Learn More Anyway',
        cta_href: '/features',
      };
    }
  };

  if (completed) {
    const result = get_result();
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: SURFACE, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            {result.icon}
            <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mt: 3, mb: 2 }}>
              {result.verdict}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 4 }}>
              <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem' }}>Fit Score</Typography>
              <Box sx={{ width: 200 }}>
                <LinearProgress
                  variant="determinate"
                  value={percentage}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: BORDER,
                    '& .MuiLinearProgress-bar': { bgcolor: result.color, borderRadius: 4 },
                  }}
                />
              </Box>
              <Typography sx={{ color: result.color, fontWeight: 700 }}>{percentage}%</Typography>
            </Box>
            <Typography sx={{ color: TEXT_SECONDARY, lineHeight: 1.8, mb: 5 }}>
              {result.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={result.cta_href.startsWith('http') ? 'a' : Link}
                href={result.cta_href}
                target={result.cta_href.startsWith('http') ? '_blank' : undefined}
                variant="contained"
                sx={{ bgcolor: BRAND_PRIMARY, fontWeight: 600, borderRadius: '10px', px: 4, py: 1.5, textTransform: 'none', '&:hover': { bgcolor: BRAND_PRIMARY_HOVER } }}
              >
                {result.cta}
              </Button>
              <Button
                onClick={() => { set_current_question(0); set_answers({}); set_completed(false); }}
                variant="outlined"
                sx={{ borderColor: BORDER, color: TEXT_SECONDARY, borderRadius: '10px', px: 4, py: 1.5, textTransform: 'none' }}
              >
                Retake Assessment
              </Button>
            </Box>
          </Box>

          <Box sx={{ p: 4, borderRadius: '16px', bgcolor: CARD, border: `1px solid ${BORDER}` }}>
            <Typography sx={{ fontWeight: 600, color: TEXT_PRIMARY, mb: 3 }}>Your Answers</Typography>
            {QUESTIONS.map((q) => {
              const answer = answers[q.id];
              const selected_option = q.options.find(o => o.score === answer);
              return (
                <Box key={q.id} sx={{ mb: 2, pb: 2, borderBottom: `1px solid ${BORDER}`, '&:last-child': { mb: 0, pb: 0, border: 'none' } }}>
                  <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.85rem', mb: 0.5 }}>{q.question}</Typography>
                  <Typography sx={{ color: TEXT_PRIMARY, fontSize: '0.95rem' }}>{selected_option?.label}</Typography>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    );
  }

  const question = QUESTIONS[current_question];
  const progress = ((current_question) / QUESTIONS.length) * 100;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: SURFACE }}>
      <Box sx={{ bgcolor: CARD, borderBottom: `1px solid ${BORDER}`, py: 3 }}>
        <Container maxWidth="sm">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>
              Question {current_question + 1} of {QUESTIONS.length}
            </Typography>
            <Typography sx={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>
              {Math.round(progress)}% complete
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              borderRadius: 3,
              bgcolor: BORDER,
              '& .MuiLinearProgress-bar': { bgcolor: BRAND_PRIMARY, borderRadius: 3 },
            }}
          />
        </Container>
      </Box>

      <Container maxWidth="sm" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h2" sx={{ color: TEXT_PRIMARY, mb: 5, fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.3 }}>
          {question.question}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {question.options.map((option, i) => (
            <Button
              key={i}
              onClick={() => handle_answer(option.score)}
              sx={{
                p: 3,
                borderRadius: '12px',
                bgcolor: CARD,
                border: `1px solid ${BORDER}`,
                textAlign: 'left',
                justifyContent: 'flex-start',
                textTransform: 'none',
                color: TEXT_PRIMARY,
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: `${BRAND_PRIMARY}08`,
                  borderColor: BRAND_PRIMARY,
                },
              }}
            >
              {option.label}
            </Button>
          ))}
        </Box>

        {current_question > 0 && (
          <Button
            onClick={() => set_current_question(current_question - 1)}
            sx={{ mt: 4, color: TEXT_SECONDARY, textTransform: 'none' }}
          >
            ← Back
          </Button>
        )}
      </Container>
    </Box>
  );
}
