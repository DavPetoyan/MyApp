"use client"

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

const links = [
  {
    id: 1,
    name: 'Home',
    href: '/'
  },
  {
    id: 2,
    name: 'Portfolio',
    href: '/portfolio'
  },
  {
    id: 3,
    name: 'Blog',
    href: '/blog'
  },
  {
    id: 4,
    name: 'About',
    href: '/about'
  },
  {
    id: 5,
    name: 'Contact',
    href: '/contact'
  },
  {
    id: 6,
    name: 'Dashboard',
    href: '/dashboard'
  }
];

export default function NavBar() {

  const session = useSession()

  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Lama
        </Link>
        <div className={styles.links}>
          <DarkModeToggle />
          {links.map(link => (
            <Link key={link.id} href={link.href} className={styles.link}>
              {link.name}
            </Link>
          ))}

          {
            session.status === "authenticated" && (
              <button onClick={signOut} className={styles.logout}>
                Logout
              </button>
            )
          }
        </div>
      </div>
    </>
  )
}
