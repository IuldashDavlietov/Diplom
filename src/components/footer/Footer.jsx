import React from 'react'
import styles from "./Footer.module.css"
import insta from "../../assets/image/ic-instagram.svg"
import whatsapp from "../../assets/image/ic-whatsapp.svg"

function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.footer_items}>
                    <h2>Contact</h2>
                    <div className={styles.footer_wrapper}>
                        <div className={styles.footer_phone}>
                            <p>Phone</p>
                            <h3>+49 999 999 99 99</h3>
                        </div>
                        <div className={styles.footer_socials}>
                            <p>Socials</p>
                            <img src={insta} alt="instargram_icon" />
                            <img src={whatsapp} alt="whatsapp_icon" />
                        </div>
                        <div className={styles.footer_address}>
                            <p>Address</p>
                            <h3>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</h3>
                        </div>
                        <div className={styles.footer_hours}>
                            <p>Working Hours</p>
                            <h3>24 hours a day</h3>
                        </div>
                    </div>
                    <div className={styles.footer_map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.636886541603!2d13.3750447!3d52.5079329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1690373306128!5m2!1sru!2sde" title='myFrame' loading="lazy" ></iframe>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;