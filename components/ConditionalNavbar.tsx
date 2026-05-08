'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar'; // Your original solid navy navbar

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // If we are on the homepage, return nothing (null)
  // This effectively hides the solid navbar from the hero section
  if (pathname === '/') {
    return null;
  }

  // On every other page (/about, /contact, etc.), show the solid navbar
  return <Navbar />;
}