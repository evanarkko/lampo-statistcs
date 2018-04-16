import React from 'react'
import LocationView from './LocationView'

const MainView = ({locations, tempUnit}) => {
    return(
        <div>
            {locations.map(loc => <LocationView key={loc.name} location={loc} tempUnit={tempUnit}/>)}
        </div>
    )
}

export default MainView