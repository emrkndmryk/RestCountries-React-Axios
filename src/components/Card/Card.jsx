import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import '../../styles/app.css'

function Card({ flag, name, alpha3Code, capital, region }) {
  return (
    <Link
      to={`/details/${alpha3Code}`}
      className={'link'}
      data-test={`country-${alpha3Code}-card`}
    >
      <div className={'card_main'} data-test="card">
        <div className={'card-image'}>
          <img
            className={'flag'}
            src={flag}
            alt={`Flag of ${name}`}
            loading="lazy"
            data-test={`country-${alpha3Code}-flag`}
          />
        </div>
        <div className={'cardBody'}>
          <h2
            className={'countryName'}
            data-test={`country-${alpha3Code}-name`}
          >
            {name}
          </h2>
          <dl className={'facts'}>
            <div className={'factGroup'}>
              <dt className={'factLabel'}>Region</dt>
              <dd
                className={'factValue'}
                data-test={`country-${alpha3Code}-region`}
              >
                {region}
              </dd>
            </div>
            <div className={'factGroup'}>
              <dt className={'factLabel'}>Capital</dt>
              <dd
                className={'factValue'}
                data-test={`country-${alpha3Code}-capital`}
              >
                {capital}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alpha3Code: PropTypes.string.isRequired,
  capital: PropTypes.string,
  region: PropTypes.string,
  population: PropTypes.string,
}

export default Card
