import { useDarkMode } from '../../hooks/useDarkMode'
import ThemeToggle from '../ThemeToggle'
import styles from '../../styles/app.css'

function Header() {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <header className={'header'}>
      <div className={'wrapper'}>
        <h1 className={'title'} data-test="page-title">
          Fintech Yazılım Staj Projesi
        </h1>
        <div className={'themeSwitchContainer'}>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  )
}

export default Header
