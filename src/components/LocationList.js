import React from 'react'
import LocationView from './LocationView'

const LocationList = ({locations, unit, addReading}) => {
    return(
        <div>
            {locations.map(loc =>
                <LocationView key={loc.name} location={loc} unit={unit} addReading={addReading}/>)}
        </div>
    )
}

export default LocationList