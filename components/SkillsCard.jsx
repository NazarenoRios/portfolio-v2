import Image from 'next/image'
import React from 'react'
import styles from "../styles/SkillsCard.module.css"

function SkillsCard({skill}) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.name}>{skill.name}</h2>
        <a href="#" className={styles.buy}>Buy now</a>
        <div className={styles.circle}></div>
        <Image src={skill.img} className={styles.skill}/>
      </div>
    </div>
  )
}

export default SkillsCard