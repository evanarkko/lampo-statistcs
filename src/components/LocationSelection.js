import React from 'react'

const LocationSelection = ({locations}) => {
    return(
        <div className="countryToggle">
            Add reading for:<br/>
            {locations
                .map(loc => <button key={loc.name} className="countryToggleButton">{loc.name}</button>)}
            <button className="addNewCountryButton">+ new</button>
        </div>
    )
}

export default LocationSelection