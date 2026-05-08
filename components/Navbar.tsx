import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '../styles/theme';

const Navbar = () => {
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Our Mission', link: '/mission' },
    { name: 'Impact', link: '/impact' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link href="/">
          <Image src="/logo.webp" alt="One Way Ministries" width={180} height={45} priority />
        </Link>
        <ul style={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.name}><Link href={item.link} style={styles.link}>{item.name}</Link></li>
          ))}
        </ul>
        <div style={styles.actions}>
          <button style={styles.langToggle}>EN | ES</button>
          <Link href="/donate" style={styles.donateBtn}>Donate</Link>
        </div>
      </div>
    </nav>
  );
};

const styles: Record<string, React.CSSProperties> = {
  nav: { backgroundColor: theme.colors.primary, padding: '1rem 0', width: '100%', position: 'sticky', top: 0, zIndex: 1000 },
  container: { maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' },
  menuList: { display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0 },
  link: { color: theme.colors.text.inverse, textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' },
  actions: { display: 'flex', alignItems: 'center', gap: '1.5rem' },
  langToggle: { background: 'none', border: `1px solid ${theme.colors.text.muted}`, color: theme.colors.text.inverse, padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' },
  donateBtn: { backgroundColor: theme.colors.accent, color: theme.colors.text.inverse, padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }
};

export default Navbar;