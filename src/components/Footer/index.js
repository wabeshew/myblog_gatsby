import React from "react"
import styles from '../../scss/components/_footer.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<small>Copyright&nbsp;(C)&nbsp;{new Date().getFullYear()}&nbsp;Kota&nbsp;Shimura&nbsp;All&nbsp;Rights&nbsp;Reserved.</small>
	</footer>
)

export default Footer