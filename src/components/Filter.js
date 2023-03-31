/** @jsxImportSource theme-ui */

import React, {useEffect, useState} from 'react'

function Filter() {
    const queryParams = new URLSearchParams(window.location.search)
    const term = queryParams.get("region")
    const [region, setRegion] =  useState('')

    useEffect(() => {
        if (region) window.location.href = `?region=${region}`
    }, [region])

  return (
    <section className='filter'>
        <form className='form-control'>
            <input type="search" name="search" id="search" 
            placeholder='Search for a country'
            sx={{backgroundColor: "headerBackground", color: "color"}}>
            </input>
        </form>

        <div className="region-filter">
            <select name="select" id='select' className='select' onChange={(e) => {
                setRegion(e.target.value)
            }} defaultValue={term}
            sx={{backgroundColor: "headerBackground", color: "color"}}>
                <option value=" ">All</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default Filter
