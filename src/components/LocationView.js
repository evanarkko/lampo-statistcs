import React from 'react'
import DataForm from './DataForm'
import UnitConversion from '../logic/UnitConversion'


const LocationView = ({location, unit, addReading}) => {
    if(location.name === 'Tokyo') {
        console.log(UnitConversion.convertTo(location.latest.temp, unit))
    }
    return(
        <div style={styleSheet.container}>
            <div style={styleSheet.title}><u>{location.name}</u></div>
            <div>*current local time*</div>
            <div>
                <p>
                    <b>lat</b>: {location.lat}, <b>long</b>: {location.long}
                </p>
            </div>
            <div>
                <h1>latest temperature reading: {UnitConversion.convertTo(location.latest.temp, unit).toFixed(2)}°{unit[0]}</h1>
                *time submitted*
            </div>
            <div>
                <h1>Last 24 hours</h1>
                <p>high: {UnitConversion.convertTo(location.recent.high, unit).toFixed(2)} °{unit[0]}</p>
                <p>low: {UnitConversion.convertTo(location.recent.low, unit).toFixed(2)} °{unit[0]}</p>
                <p>average: {UnitConversion.convertTo(location.recent.avg, unit).toFixed(2)} °{unit[0]}</p>
            </div>
            <DataForm
                location={location}
                unit={unit}
                addReading={addReading} /*()?*/
            />
        </div>
    )
}

const styleSheet={
    container: {
        marginBottom: '0.5em',
        marginTop: '1em',
        padding:'1em',
        fontSize: '1.5em',
        fontWeight: '70',
        textAlign: 'left',
        borderTop: 'solid',
        borderLeft: 'solid',
        borderRadius: '0.5em',
        borderTopWidth: 2,
        borderLeftWidth: 1,
        borderTopColor: 'darkred' /*change according to weather blue - red ?*/
    },
    title:{
        fontSize:'2em',
        fontWeight: 'bold',
        marginBottom: 4
    },
    coordinates:{

    }
}

export default LocationView