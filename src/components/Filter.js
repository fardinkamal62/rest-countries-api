/** @jsxImportSource theme-ui */

import React, {useState} from 'react'

import Countries from "./Countries";

function Filter() {
    const [region, setRegion] = useState('')
    const [search, setSearch] = useState('')

    return (
        <>
            <section className='filter'>
                <form className='form-control'>
                    <input type="search" name="search" id="search"
                           placeholder='Search for a country'
                           onChange={(e) => {
                               setSearch(e.target.value)
                           }}
                           sx={{backgroundColor: "headerBackground", color: "color"}}>
                    </input>
                </form>

                <div className="region-filter">
                    <select name="select" id='select' className='select' onChange={(e) => {
                        setRegion(e.target.value)
                    }} sx={{backgroundColor: "headerBackground", color: "color"}}>
                        <option value="">All</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </section>
            <Countries search={search} region={region}/>
        </>
    )
}

export default Filter
