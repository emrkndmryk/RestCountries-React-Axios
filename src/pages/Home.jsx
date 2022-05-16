import { useState } from 'react'
import { useCountriesQuery } from '../hooks/useRestCountries'
import useDebounce from '../hooks/useDebounce'

import Card from '../components/Card'
import Loading from '../components/Loading'

import '../styles/app.css'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
  const [searchCountryName, setSearchCountryName] = useState('')
  const [searchAllJson, setSearchAllJson] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedTerm = useDebounce(searchTerm)
  const { data, error, isLoading, isError } = useCountriesQuery(debouncedTerm)

  const onInputChanged = (evt) => {
    setSearchCountryName(evt.target.value)
    setSearchTerm({ type: 'search', value: evt.target.value })
  }
  const onInputChangedAll = (all) => {
    setSearchAllJson(all.target.value)
    setSearchTerm({ type: 'all', value: all.target.value })
  }

  return (
    <>
      <Container>
        <div className={'filterBar'}>
          <Form.Control
            className={'search_input left'}
            id={'capital'}
            onChange={onInputChanged}
            value={searchCountryName}
            placeholder="Search capital..."
          />
          <Form.Control
            className={'search_input'}
            id={'allJson'}
            onChange={onInputChangedAll}
            value={searchAllJson}
            placeholder="Search name..."
          />
        </div>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <div className={'card-container'}>
            <div>{error.message}</div>
          </div>
        ) : (
          <div className={'card-container'} data-test="card-list">
            {data.countries.map((country) => (
              <Card key={country.alpha3Code} {...country} />
            ))}
          </div>
        )}
      </Container>
    </>
  )
}

export default Home
