"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '../styles/theme';
import { Menu, X } from 'lucide-react';
// 1. Import your global context hook
import { useDonate } from '@/context/DonateContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Call the hook to get the open function
  const { openDonateModal } = useDonate();

  const menuItems = [
    { name: 'About Us', link: '/about' },
    { name: 'Ministries', link: '/ministries' },
    { name: 'Get Involved', link: '/get-involved' },
    { name: 'News', link: '/news' },
    { name: 'Contact Us', link: '/contact' },
  ];

  return (
    <nav style={styles.nav}>
      <div className="nav-container" style={styles.container}>
        <div className="logo-and-menu">
          <div className="logo-box" style={styles.logoBox}>
            <Link href="/">
              <Image src="/logo.webp" alt="One Way Ministries" width={180} height={45} priority />
            </Link>
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(true)}>
            <Menu size={32} color="#fff" />
          </button>
        </div>

        <div className={`nav-wrapper ${isMenuOpen ? "open" : ""}`} style={styles.navWrapper}>
          <div className="drawer-header">
            <button className="close-menu-btn" onClick={() => setIsMenuOpen(false)}>
              <X size={32} color={theme.colors.primary} />
            </button>
          </div>
          <nav className="nav-links" style={styles.menuList}>
            {menuItems.map((item) => (
              <Link key={item.name} href={item.link} className="nav-link-hover" style={styles.link} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* 3. Simply call openDonateModal() here */}
          <button 
            className="donate-btn-hover donate-action" 
            style={styles.donateBtn} 
            onClick={(e) => { 
              e.preventDefault(); 
              setIsMenuOpen(false); 
              openDonateModal(); 
            }}
          >
            Donate
          </button>
        </div>
        
        <div className={`nav-overlay ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(false)}></div>
      </div>
    </nav>
  );
};

// 4. We deleted all the modal styles! Only the actual Navbar styles remain.
const styles: Record<string, React.CSSProperties> = {
  nav: { backgroundColor: theme.colors.primary, padding: '1rem 0', width: '100%', position: 'sticky', top: 0, zIndex: 1000 },
  container: { maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' },
  logoBox: { display: 'flex', alignItems: 'center' },
  navWrapper: { display: 'flex', alignItems: 'center', flex: 1, gap: '2.5rem' },
  menuList: { display: 'flex', listStyle: 'none', gap: '1.5rem', margin: '0 auto', padding: 0 },
  link: { color: theme.colors.text.inverse, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' },
  donateBtn: { backgroundColor: '#fff', color: theme.colors.primary, padding: '10px 25px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase' },
};

export default Navbar;