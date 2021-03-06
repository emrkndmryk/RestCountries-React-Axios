import { useCallback } from 'react'
import { useQuery } from 'react-query'
import {
  getAllCountries,
  getCountryByName,
  getCountryByCode,
  getAllJsonData,
} from '../api/client'

const formatPopulation = (value) => {
  return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(value)
}

const searchCountries = ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [_key, { params }] = queryKey

  if (typeof params === 'undefined' || params === '') {
    return getAllCountries()
  }

  if (
    Object.prototype.hasOwnProperty.call(params, 'type') &&
    params.type === 'all'
  ) {
    return getAllJsonData(params.value)
  }

  if (
    Object.prototype.hasOwnProperty.call(params, 'type') &&
    params.type === 'search' &&
    params.value !== ''
  ) {
    return getCountryByName(params.value)
  }

  return getAllCountries()
}

export function useCountriesQuery(params) {
  return useQuery(['countries', { params }], searchCountries, {
    select: useCallback(
      (data) => ({
        countries: data.map((country) => ({
          ...country,
          population: formatPopulation(country.population),
        })),
        regions: data.reduce((acc, country) => {
          return new Set([...acc, country.region])
        }, []),
      }),
      []
    ),
  })
}

export const useCountryQuery = (code) => {
  return useQuery(['country', code], () => getCountryByCode(code), {
    select: useCallback(
      (data) => ({
        ...data,
        population: formatPopulation(data.population),
        topLevelDomains:
          data.topLevelDomain.length > 1
            ? data.topLevelDomain.join(', ')
            : data.topLevelDomain[0],
        languages:
          data.languages.length > 1
            ? data.languages.map((lang) => lang.name).join(', ')
            : data.languages[0].name,
        currencies:
          data.currencies.length > 1
            ? data.currencies.map((cur) => cur.name).join(', ')
            : data.currencies[0].name,
      }),
      []
    ),
  })
}
