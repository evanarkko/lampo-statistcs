import React from 'react'
import LocationView from './LocationView'

const MainView = ({locations}) => {
    return(
        <div>
            {locations.map(loc => <LocationView key={loc.name} location={loc}/>)}
        </div>
    )
}

export default MainView