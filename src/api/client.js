import axios from 'axios'

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://restcountries.com/v2',
  responseType: 'json',
})

export const getAllCountries = () => {
  const fields = [
    'name',
    'alpha3Code',
    'capital',
    'region',
    'population',
    'flag',
  ]

  const queryParams = {
    fields: fields.join(','),
  }

  return client
    .get('/all', { params: queryParams })
    .then((response) => response.data)
}
export const getCountryByName = (name) => {
  const fields = [
    'name',
    'topLevelDomain',
    'alpha3Code',
    'capital',
    'region',
    'subregion',
    'population',
    'borders',
    'nativeName',
    'currencies',
    'languages',
    'flag',
  ]

  const queryParams = {
    fields: fields.join(','),
  }

  return client
    .get(`/capital/${name}`, { params: queryParams })
    .then((response) => response.data)
}

export const getCountryByCode = (code) => {
  const fields = [
    'name',
    'topLevelDomain',
    'alpha3Code',
    'capital',
    'region',
    'subregion',
    'population',
    'borders',
    'nativeName',
    'currencies',
    'languages',
    'flag',
  ]

  const queryParams = {
    fields: fields.join(','),
  }

  return client
    .get(`/alpha/${code}`, { params: queryParams })
    .then((response) => response.data)
}

export const getAllJsonData = (value) => {
  const fields = [
    'name',
    'topLevelDomain',
    'alpha3Code',
    'capital',
    'region',
    'subregion',
    'population',
    'borders',
    'nativeName',
    'currencies',
    'languages',
    'flag',
  ]

  const queryParams = {
    fields: fields.join(','),
  }

  let one = `https://restcountries.com/v2/alpha/${value}`
  let two = `https://restcountries.com/v2/capital/${value}`
  let three = `https://restcountries.com/v2/region/${value}`

  const requestOne = axios.get(one)
  const requestTwo = axios.get(two)
  const requestThree = axios.get(three)

  axios
    .all([requestOne, requestTwo, requestThree])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0]
        const responseTwo = responses[1]
        const responesThree = responses[2]

        // use/access the results
        console.log(responseOne, responseTwo, responesThree)
      })
    )
    .catch((errors) => {
      // react on errors.
      console.error(errors)
    })
}
