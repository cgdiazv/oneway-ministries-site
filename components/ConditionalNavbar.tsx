'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar'; // Your original solid navy navbar

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // If we are on the homepage or on the admin access portal, return nothing (null)
  if (pathname === '/' || pathname === '/access') {
    return null;
  }

  // On every other page (/about, /contact, etc.), show the solid navbar
  return <Navbar />;
}