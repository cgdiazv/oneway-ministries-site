'use client'; // Required if using the "back to top" onClick function in Next.js App Router

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '../styles/theme'; // Adjust path if needed

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pagesLinks = [
    { name: 'About Us', link: '/about' },
    { name: 'Ministries', link: '/ministries' },
    { name: 'News', link: '/news' },
    { name: 'Contact', link: '/contact' },
  ];

  const ministryLinks = [
    { name: 'Nuevo Comienzo', link: '/ministries/nuevo-comienzo' },
    { name: 'Shalom Mision Xtrema', link: '/ministries/shalom-mision-xtrema' },
    { name: 'Alfa y Omega', link: '/ministries/iglesia-alfa-y-omega' },
    { name: 'Morada de Gracia', link: '/ministries/morada-de-gracia' },
    { name: 'Nuevo Amanecer', link: '/ministries/nuevo-amanecer' },
    /*{ name: 'Pan de Vida', link: '/ministries/pan-de-vida' },*/
    { name: 'Amor Inagotable', link: '/ministries/amor-inagotable' },
    { name: 'Impacto Biblico', link: '/ministries/impacto-biblico' },
    { name: 'Funcifunac', link: '/ministries/funcifunac' },
    { name: 'Iglesia Reformada Calvary', link: '/ministries/iglesia-reformada-calvary' },
    { name: 'Unidos por la Vida', link: '/ministries/unidos-por-la-vida' },
    { name: 'Luminar Missionary', link: '/ministries/luminar-missionary-foundation' },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Column 1: Logo */}
        <div style={styles.column}>
          <Link href="/">
            <Image 
              src="/logo.webp" 
              alt="One Way Ministries" 
              width={200} 
              height={50} 
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>

        {/* Column 2: Headquarters */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Our Headquarters</h3>
          <p style={styles.text}>One Way Ministries International<br/>2311 Oxford brook court<br/>Katy Texas, 77493</p>
          <p style={styles.text}><br/><a href="tel:+18329087487" style={styles.link}>+1 832-908-7487</a><br/><a href="mailto:onewayministriescol@gmail.com" style={styles.link}>onewayministriescol@gmail.com</a></p>
          
          <div style={styles.socialRow}>
            <a href="#" style={styles.socialIcon} aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" style={styles.socialIcon} aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" style={styles.socialIcon} aria-label="X (Twitter)">
              <TwitterIcon />
            </a>
          </div>
        </div>

        {/* Column 3: Pages */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Pages</h3>
          <ul style={styles.list}>
            {pagesLinks.map((item) => (
              <li key={item.name} style={styles.listItem}>
                <Link href={item.link} style={styles.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Ministries */}
        <div style={{ ...styles.column, flex: '2 1 400px' }}>
          <h3 style={styles.heading}>Ministries</h3>
          <ul style={{ ...styles.list, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem 1rem' }}>
            {ministryLinks.map((item) => (
              <li key={item.name} style={styles.listItem}>
                <Link href={item.link} style={styles.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div style={styles.bottomBar}>
        <div style={styles.bottomContainer}>
          <p style={styles.copyrightText}>
            Oneway Ministries © {new Date().getFullYear()} – All Rights Reserved
          </p>
          <button onClick={scrollToTop} style={styles.scrollTopBtn} aria-label="Scroll to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: theme.colors.primary, // Deep Navy from your theme
    color: theme.colors.text.inverse,
    paddingTop: '4rem',
    fontFamily: theme.fonts.body,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem 3rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap' as const,
    gap: '2rem',
  },
  column: {
    flex: '1 1 200px', // Ensures responsive wrapping on smaller screens
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  heading: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: theme.colors.text.inverse,
  },
  text: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    margin: 0,
    color: '#D1D5DB', // Slightly dimmed white for readability
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
  },
  listItem: {
    margin: 0,
  },
  link: {
    color: '#D1D5DB',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s',
  },
  socialRow: {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '0.5rem',
  },
  socialIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '35px',
    height: '35px',
    backgroundColor: theme.colors.text.inverse,
    color: theme.colors.primary,
    borderRadius: '50%',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    transition: 'transform 0.2s',
  },
  bottomBar: {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    padding: '1.5rem 0',
  },
  bottomContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyrightText: {
    fontSize: '0.85rem',
    color: '#9CA3AF',
    margin: 0,
  },
  scrollTopBtn: {
    backgroundColor: theme.colors.text.inverse,
    color: theme.colors.primary,
    border: 'none',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: theme.shadows.card,
  }
};

export default Footer;