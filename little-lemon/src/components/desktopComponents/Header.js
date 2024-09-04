import { ReactComponent as Logo } from './../../assets/icons/Logo.svg'
import Nav from './Nav'
import styles from './../../styles/components_styles/header.module.scss'

const Header = () => {
  return (
    <header id="main_header" role="banner">
      <Nav logo={<Logo className={styles.header_logo} />} />
    </header>
  )
}

export default Header
