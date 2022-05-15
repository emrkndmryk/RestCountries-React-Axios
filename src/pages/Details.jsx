import { useParams } from 'react-router-dom'

import { useCountryQuery } from '../hooks/useRestCountries'

import NavButton from '../components/NavButton'
import Loading from '../components/Loading'

import { Container } from 'react-bootstrap'

import '../styles/app.css'

function Details() {
  const { code } = useParams()

  const { data: country, error, isLoading, isError } = useCountryQuery(code)

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <main id="main-content" className={'detail-container'}>
          <div>{error.message}</div>
        </main>
      ) : (
        <Container>
          <div className={'nav-container'}>
            <NavButton to="/" />
          </div>
          <div className={'content-container'}>
            <div id="flag-container">
              <img
                className={'flag'}
                src={country.flag}
                loading="lazy"
                alt={`Flag of ${country.name}`}
              />
            </div>
            <div className={'country-details'}>
              <h2
                className={'countryName'}
                data-test={`country-${country.alpha3Code}-name`}
              >
                {country.name}
              </h2>
              <div className={'country-facts'}>
                <dl id="fact-group-left">
                  <div className={'factGroup'}>
                    <dt className={'fact-label'}>Native Name</dt>
                    <dd className={'factValue'}>{country.nativeName}</dd>
                  </div>
                  <div className={'factGroup'}>
                    <dt className={'fact-label'}>Population</dt>
                    <dd className={'factValue'}>{country.population}</dd>
                  </div>
                  <div className={'factGroup'}>
                    <dt className={'fact-label'}>Region</dt>
                    <dd className={'factValue'}>{country.region}</dd>
                  </div>
                  <div className={'factGroup'}>
                    <dt className={'fact-label'}>Sub Region</dt>
                    <dd className={'factValue'}>{country.subregion}</dd>
                  </div>
                  <div className={'factGroup'}>
                    <dt className={'fact-label'}>Capital</dt>
                    <dd className={'factValue'}>{country.capital}</dd>
                  </div>
                </dl>
                <dl id="fact-group-right" className={'fact-group-right'}>
                  <div className={'factGroup'}>
                    <dt className={'fact-label'}>Top Level Domain</dt>
                    <dd className={'factValue'}>{country.topLevelDomains}</dd>
                  </div>
                  <div className={'factGroup'}>
                    <dt className={'fact-label'}>Currencies</dt>
                    <dd className={'factValue'}>{country.currencies}</dd>
                  </div>
                  <div className={'factGroup'}>
                    <dt className={'fact-label'}>Languages</dt>
                    <dd className={'factValue'}>{country.languages}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  )
}

export default Details
