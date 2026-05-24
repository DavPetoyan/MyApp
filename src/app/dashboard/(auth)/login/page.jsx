"use client"

import React, { useEffect } from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

export default function Login() {

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder='email'
          className={styles.input}
          required
        />

        <input
          type="password"
          placeholder='password'
          className={styles.input}
          required
        />

        <button className={styles.button}>
          Login
        </button>
      </form>

      <button className={styles.btnG} onClick={() => signIn("google")}>
        Login with Google
      </button>
    </div>
  )
}