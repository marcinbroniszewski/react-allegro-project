import React from 'react'
import styles from './Footer.module.scss'
import logo from './img/logo-allegro.svg'
import mallCz from './img/mall-cz.svg'
import mallHr from './img/mall-hr.svg'
import mallHu from './img/mall-hu.svg'
import mallSk from './img/mall-sk.svg'
import mimovrste from './img/mimovrste.svg'
import wedo from './img/wedo.svg'
import czcCz from './img/czc-cz.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles['footer__upper-container']}>
				<div className='wrapper'>
					<div className={styles['footer__upper']}>
						<div className={styles['footer__upper-box']}>
							<p className={styles['footer__terms']}>
								Korzystanie z serwisu oznacza akceptację{' '}
								<Link to={''} className={styles['footer__terms-link']}>
									regulaminu
								</Link>
							</p>
							<img src={logo} alt='logo allegro' className={styles['footer__logo']} />
						</div>
					</div>
				</div>
			</div>
			<div className='wrapper'>
				<div className={styles['footer__lower']}>
                    <p className={styles['footer__services-text']}>Serwisy Grupy Allegro</p>
                    <div className={styles['footer__services-logos']}
                    >
                        <Link to={''}><img src={mallCz} alt="mall cz logo" className={styles['footer__service-logo']}/></Link>
                        <Link to={''}><img src={mallSk} alt="mall sk logo" className={styles['footer__service-logo']}/></Link>
                        <Link to={''}><img src={mallHu} alt="mall hu logo" className={styles['footer__service-logo']}/></Link>
                        <Link to={''}><img src={mallHr} alt="mall hr logo" className={styles['footer__service-logo']}/></Link>
                        <Link to={''}><img src={wedo} alt="mall cz logo" className={styles['footer__service-logo']}/></Link>
                        <Link to={''}><img src={mimovrste} alt="mimovrste logo" className={styles['footer__service-logo']}/></Link>
                        <Link to={''}><img src={czcCz} alt="czc cz logo" className={styles['footer__service-logo']}/></Link>
                    </div>
                </div>
			</div>
		</footer>
	)
}
