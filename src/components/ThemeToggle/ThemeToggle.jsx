import PropTypes from 'prop-types'

import { MoonIcon } from '@heroicons/react/outline'

import '../../styles/app.css'

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      type="button"
      className={'button'}
      onClick={toggleTheme}
      data-test="theme-toggle"
    >
      <MoonIcon className={'themeSwitchIcon'} />
      Dark Mode
    </button>
  )
}

ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default ThemeToggle
