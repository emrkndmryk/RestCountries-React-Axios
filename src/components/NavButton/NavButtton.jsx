import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline'

import '../../styles/app.css'

function NavButton({ to }) {
  return (
    <Link to={to} className={'navButton'}>
      <ArrowNarrowLeftIcon className={'arrow-icon'} />
      Back
    </Link>
  )
}

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
}

export default NavButton
