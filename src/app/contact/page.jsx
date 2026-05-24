import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'


export const metadata = {
  title: "Lama Contact Information",
  description: "This is the Contact Page",
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" fill={true} alt="Contact" className={styles.image} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea placeholder="message" cols="30" rows="10" className={styles.textArea}></textarea>
          <Button url="#" text="Send Message" />
        </form>
      </div>
    </div>
  )
}
