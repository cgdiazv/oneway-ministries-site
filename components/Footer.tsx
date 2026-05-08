import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '../styles/theme';

const Footer = () => {
  const ministryLinks = [
    { name: 'Casa del Rey', link: '/ministries/casa-del-rey' },
    { name: 'Morada de Gracia', link: '/ministries/morada-de-gracia' },
    { name: 'Ambalema', link: '/ministries/ambalema' },
    { name: 'Guainia', link: '/ministries/guainia' },
    { name: 'North Coast', link: '/ministries/north-coast' },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <Image src="/logo.webp" alt="Logo" width={150} height={40} />
        </div>
        <div style={styles.column}>
          <h3 style={styles.heading}>Our Headquarters</h3>
          <p style={styles.text}>Katy, TX 10785<br/>United States</p>
        </div>
        <div style={styles.column}>
          <h3 style={styles.heading}>Ministries</h3>
          <ul style={styles.list}>
            {ministryLinks.map((m) => (
              <li key={m.name}><Link href={m.link} style={styles.link}>{m.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p style={styles.copyright}>© {new Date().getFullYear()} One Way Ministries – All Rights Reserved</p>
      </div>
    </footer>
  );
};

const styles: Record<string, React.CSSProperties> = {
  footer: { backgroundColor: theme.colors.primary, color: theme.colors.text.inverse, paddingTop: '3rem', marginTop: 'auto' },
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' },
  column: { flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '1rem' },
  heading: { fontSize: '1.1rem', fontWeight: 'bold' },
  text: { fontSize: '0.9rem', color: '#D1D5DB' },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  link: { color: '#D1D5DB', textDecoration: 'none', fontSize: '0.9rem' },
  bottomBar: { borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem 0', textAlign: 'center' },
  copyright: { fontSize: '0.8rem', color: '#9CA3AF' }
};

export default Footer;