'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem,
  ListItemButton, ListItemText, Toolbar, Typography, Menu, MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { BRAND_PRIMARY, BRAND_PRIMARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY, BORDER } from '@/theme/theme';

interface NavChild {
  label: string;
  href: string;
  external?: boolean;
}

interface NavItemWithChildren {
  label: string;
  children: NavChild[];
}

interface NavItemDirect {
  label: string;
  href: string;
}

type NavItem = NavItemWithChildren | NavItemDirect;

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Product',
    children: [
      { label: 'Features', href: '/features' },
      { label: 'How It Works', href: '/how-it-works' },
    ],
  },
  {
    label: 'Use Cases',
    href: '/use-cases',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Company',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export function Header() {
  const [mobile_open, set_mobile_open] = useState(false);
  const [anchor_el, set_anchor_el] = useState<{ [key: string]: HTMLElement | null }>({});

  const handle_menu_open = (label: string, event: React.MouseEvent<HTMLElement>) => {
    set_anchor_el({ ...anchor_el, [label]: event.currentTarget });
  };

  const handle_menu_close = (label: string) => {
    set_anchor_el({ ...anchor_el, [label]: null });
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ px: { xs: 0 }, minHeight: { xs: 64, md: 72 } }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="/logo.png" alt="Svantic" style={{ height: 36, width: 36 }} />
              <Typography
                sx={{
                  color: TEXT_PRIMARY,
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Svantic
              </Typography>
            </Link>

            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 5, gap: 0.5 }}>
              {NAV_ITEMS.map((item) => (
                <Box key={item.label}>
                  {'children' in item ? (
                    <>
                      <Button
                        onClick={(e) => handle_menu_open(item.label, e)}
                        endIcon={<KeyboardArrowDownIcon sx={{ fontSize: '1rem !important' }} />}
                        sx={{
                          color: TEXT_SECONDARY,
                          fontWeight: 500,
                          fontSize: '0.9rem',
                          textTransform: 'none',
                          px: 2,
                          '&:hover': { color: TEXT_PRIMARY, bgcolor: 'transparent' },
                        }}
                      >
                        {item.label}
                      </Button>
                      <Menu
                        anchorEl={anchor_el[item.label]}
                        open={Boolean(anchor_el[item.label])}
                        onClose={() => handle_menu_close(item.label)}
                        sx={{
                          '& .MuiPaper-root': {
                            mt: 1,
                            borderRadius: '12px',
                            border: `1px solid ${BORDER}`,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            minWidth: 180,
                          },
                        }}
                      >
                        {(item as NavItemWithChildren).children.map((child) => (
                          <MenuItem
                            key={child.label}
                            onClick={() => handle_menu_close(item.label)}
                            component={child.external ? 'a' : Link}
                            href={child.href}
                            target={child.external ? '_blank' : undefined}
                            sx={{
                              fontSize: '0.9rem',
                              color: TEXT_SECONDARY,
                              py: 1.25,
                              px: 2.5,
                              '&:hover': { color: TEXT_PRIMARY, bgcolor: `${BRAND_PRIMARY}08` },
                            }}
                          >
                            {child.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Button
                      component={Link}
                      href={(item as NavItemDirect).href}
                      sx={{
                        color: TEXT_SECONDARY,
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        textTransform: 'none',
                        px: 2,
                        '&:hover': { color: TEXT_PRIMARY, bgcolor: 'transparent' },
                      }}
                    >
                      {item.label}
                    </Button>
                  )}
                </Box>
              ))}
            </Box>

            {/* Desktop CTA */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, alignItems: 'center' }}>
              <Button
                component="a"
                href="https://docs.svantic.com"
                target="_blank"
                sx={{
                  color: TEXT_SECONDARY,
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  '&:hover': { color: TEXT_PRIMARY, bgcolor: 'transparent' },
                }}
              >
                Docs
              </Button>
              <Button
                component="a"
                href="https://app.svantic.com"
                target="_blank"
                sx={{
                  color: TEXT_SECONDARY,
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  '&:hover': { color: TEXT_PRIMARY, bgcolor: 'transparent' },
                }}
              >
                Sign In
              </Button>
              <Button
                component={Link}
                href="/download"
                variant="outlined"
                sx={{
                  borderColor: BRAND_PRIMARY,
                  color: BRAND_PRIMARY,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 2.5,
                  '&:hover': { 
                    borderColor: BRAND_PRIMARY_HOVER,
                    color: BRAND_PRIMARY_HOVER,
                    bgcolor: `${BRAND_PRIMARY}08`,
                  },
                }}
              >
                Download
              </Button>
              <Button
                component="a"
                href="https://app.svantic.com/signup"
                target="_blank"
                variant="contained"
                sx={{
                  bgcolor: BRAND_PRIMARY,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 2.5,
                  '&:hover': { bgcolor: BRAND_PRIMARY_HOVER },
                }}
              >
                Get Started
              </Button>
            </Box>

            {/* Mobile menu button */}
            <IconButton
              sx={{ display: { md: 'none' }, ml: 'auto' }}
              onClick={() => set_mobile_open(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobile_open}
        onClose={() => set_mobile_open(false)}
        sx={{
          display: { md: 'none' },
          '& .MuiDrawer-paper': { width: '100%', maxWidth: 320 },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>Menu</Typography>
            <IconButton onClick={() => set_mobile_open(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {NAV_ITEMS.map((item) => (
              <Box key={item.label}>
                {'children' in item ? (
                  <>
                    <ListItem disablePadding>
                      <ListItemText
                        primary={item.label}
                        sx={{ px: 2, py: 1, '& .MuiTypography-root': { fontWeight: 600, color: TEXT_PRIMARY } }}
                      />
                    </ListItem>
                    {(item as NavItemWithChildren).children.map((child) => (
                      <ListItem key={child.label} disablePadding>
                        <ListItemButton
                          component={child.external ? 'a' : Link}
                          href={child.href}
                          target={child.external ? '_blank' : undefined}
                          onClick={() => set_mobile_open(false)}
                          sx={{ pl: 4 }}
                        >
                          <ListItemText
                            primary={child.label}
                            sx={{ '& .MuiTypography-root': { fontSize: '0.9rem', color: TEXT_SECONDARY } }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </>
                ) : (
                  <ListItem disablePadding>
                    <ListItemButton
                      component={Link}
                      href={(item as NavItemDirect).href}
                      onClick={() => set_mobile_open(false)}
                    >
                      <ListItemText
                        primary={item.label}
                        sx={{ '& .MuiTypography-root': { fontWeight: 600, color: TEXT_PRIMARY } }}
                      />
                    </ListItemButton>
                  </ListItem>
                )}
              </Box>
            ))}
          </List>

          <Box sx={{ p: 2, mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              href="https://app.svantic.com/signup"
              target="_blank"
              sx={{
                bgcolor: BRAND_PRIMARY,
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
                py: 1.25,
                mb: 1.5,
                '&:hover': { bgcolor: BRAND_PRIMARY_HOVER },
              }}
            >
              Get Started
            </Button>
            <Button
              fullWidth
              variant="outlined"
              component={Link}
              href="/download"
              onClick={() => set_mobile_open(false)}
              sx={{
                borderColor: BRAND_PRIMARY,
                color: BRAND_PRIMARY,
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
                py: 1.25,
                mb: 1.5,
                '&:hover': { 
                  borderColor: BRAND_PRIMARY_HOVER,
                  bgcolor: `${BRAND_PRIMARY}08`,
                },
              }}
            >
              Download
            </Button>
            <Button
              fullWidth
              variant="outlined"
              href="https://app.svantic.com"
              target="_blank"
              sx={{
                borderColor: BORDER,
                color: TEXT_PRIMARY,
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
                py: 1.25,
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
