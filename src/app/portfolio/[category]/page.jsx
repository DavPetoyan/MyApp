import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (cat) => {
  const data = items[cat]

  if (data) {
    return data
  }

  return notFound()
}


export default async function Category({ params }) {

  const { category } = await params


  const data = getData(category)

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}> {item.title} </h1>
            <p className={styles.desc}> {item.desc} </p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image src={item.image} width={500} height={500} alt="" className={styles.img} />
          </div>
        </div>
      ))}
    </div>
  )
}
