import React from 'react'
import styles from '../styles/header.module.css';
import Image from 'next/image';
import { FiInstagram , FiFacebook, FiMail } from "react-icons/fi";
import { GoVerified } from "react-icons/go";





export default function header_profile() {
  return (
    <div className={styles.header_cont}>
      <section className={styles.back_profile}/>
      <div className={styles.profile_photo}>
        <img
          src="https://uploads-ssl.webflow.com/5cc2c9e1b620bc94339c7d39/6012dd3184c35758d91a3971_social.png"
          alt="profile"
          className={styles.img_profile}
        />
      </div>
      <div className={styles.tittle_profile}>
        <h3>Super Nova</h3>
        
          <GoVerified className={styles.verified_icon}/>
      </div>
      <div className={styles.bio_profile}>
        <p>
          🦾La mejor empresa de tecnologia uwu🦾
        </p>
      </div>
      <div className={styles.icons_profile}>
        <a className={styles.icon_media}>
          <FiInstagram />
        </a>
        <a className={styles.icon_media}>
          <FiFacebook />
        </a>
        <a className={styles.icon_media}>
          <FiMail />
        </a>
      </div>
    </div>
  );
}
