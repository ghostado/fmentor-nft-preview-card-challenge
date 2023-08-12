import React from 'react'

// Css
import styles from './Card.module.css'

import imgEquilibrium from '../assets/image-equilibrium.jpg'
import iconEth from '../assets/icon-ethereum.svg'
import iconClock from '../assets/icon-clock.svg'
import iconView from '../assets/icon-view.svg'
import imgAvatar from '../assets/image-avatar.png'

const Card = () => {
    return (
        <div className={styles.container}>
            {/* cover */}
            <div className={styles.coverContainer}>
                {/* equilibrum cover */}
                <img
                    className={styles.cover}
                    src={imgEquilibrium}
                    alt='equilibrium-img'
                />
                
                {/* cover overlay */}
                <div className={styles.coverOverlay}>
                    <img src={iconView} alt="view-icon" />
                </div>
            </div>

            {/* title */}
            <h1 className={styles.title}>
                Equilibrium #3429
            </h1>

            {/* description */}
            <h1 className={styles.description}>
                Our Equilibrium collection promotes balance and calm
            </h1>

            {/* info section */}
            <div className={styles.info}>
                {/* ethereum section */}
                <div className={styles.ethereum}>
                    <img src={iconEth} />
                    <p>0.041</p>
                </div>

                {/* timer section */}
                <div className={styles.timer}>
                    <img src={iconClock} />
                    <p>3 days left</p>
                </div>
            </div>

            {/* line */}
            <div className={styles.line} />

            {/* profile */}
            <div className={styles.profile}>
                <img src={imgAvatar} />
                <p>Creation of <span>Jules Wyvern</span></p>
            </div>
        </div>
    )
}

export default Card