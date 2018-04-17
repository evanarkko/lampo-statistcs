import React from 'react'
import LocationView from './LocationView'

const LocationList = ({locations, unit}) => {
    return(
        <div>
            {locations.map(loc =>
                <LocationView key={loc.name} location={loc} unit={unit}/>)}
        </div>
    )
}

export default LocationList