import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className={styles.container}>
      <div>2023 Lama. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Lama fb" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Lama instagram" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Lama twitter" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Lama YouTube" />
      </div>
    </div>
  )
}
