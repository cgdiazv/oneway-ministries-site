"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '../styles/theme';
import { Menu, X, ChevronDown } from 'lucide-react';
// 1. Import your global context hook
import { useDonate } from '@/context/DonateContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Call the hook to get the open function
  const { openDonateModal } = useDonate();

  const menuItems = [
    { 
      name: 'About Us', 
      link: '/about',
      subItems: [
        { name: 'Our Story', link: '/about/our-story' },
        { name: 'Vision & Mission', link: '/about/vision-mission' }
      ]
    },
    { name: 'Ministries', link: '/ministries' },
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
              <div key={item.name} className="relative group flex flex-col md:block w-full md:w-auto">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link href={item.link} className="nav-link-hover flex items-center" style={styles.link} onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <ChevronDown size={16} color={theme.colors.text.inverse} className="hidden md:block ml-1 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </div>
                {item.subItems && (
                  <div className="md:absolute md:left-0 md:top-full md:mt-4 md:w-48 md:bg-white md:shadow-lg md:rounded-md md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible transition-all duration-300 md:-translate-y-2 md:group-hover:translate-y-0 z-50 flex flex-col mt-3 pl-4 md:pl-0 border-l-2 md:border-0 border-slate-200">
                    {item.subItems.map((sub) => (
                      <Link 
                        key={sub.name} 
                        href={sub.link} 
                        className="py-2 md:px-4 text-sm hover:bg-slate-50 md:hover:text-blue-900 transition-colors rounded-md font-medium"
                        style={{ ...styles.link, textTransform: 'none', color: theme.colors.primary }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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