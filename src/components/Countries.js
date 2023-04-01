/** @jsxImportSource theme-ui */

import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

let url = "https://restcountries.com/v2/all"

const queryParams = new URLSearchParams(window.location.search)
const term = queryParams.get("region")
if (term) {
    url = `https://restcountries.com/v2/region/${term}`
}

const fetchData = async (url) => {
    const response = await fetch(url)
    return await response.json()
}

const Countries = (props) => {
    const [countries, setCountries] = useState([])

    const initial = () => {
        fetchData(url).then((countries) => {
            setCountries(countries)
        })
    }

    useEffect(() => {
        props.search === '' && initial()  // TODO this can be improved
        props.search && fetchData(`https://restcountries.com/v2/name/${props.search}`).then((countries) => {
            setCountries(countries)
        })
    }, [props.search])

    useEffect(() => {
        props.region === '' && initial()  // TODO this can be improved
        props.region && fetchData(`https://restcountries.com/v2/region/${props.region}`).then((countries) => {
            setCountries(countries)
        })
    }, [props.region])

    return (
        <>
            <section className='gridblock' sx={{color: "color"}}>
                {countries.map((country) => {
                    const {name, population, region, capital, flag, numericCode} = country

                    return <article key={numericCode}>
                        <Link to={`/countries/${name}`} className="btn">
                            <div className='sec'>
                                <img src={flag} alt={name}/>
                                <div className='details'
                                     sx={{color: "color", backgroundColor: "headerBackground"}}>
                                    <h3>{name}</h3>
                                    <h4>Population: <span>{population}</span></h4>
                                    <h4>Region: <span>{region}</span></h4>
                                    <h4>Capital: <span>{capital}</span></h4>
                                </div>
                            </div>
                        </Link>
                    </article>
                })}
            </section>
        </>
    )
}

export default Countries
