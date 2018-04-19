import React from 'react'
import DataForm from './DataForm'
import UnitConversion from '../logic/UnitConversion'


const LocationView = ({location, unit, addReading}) => {
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
                <h2>latest temperature reading</h2>
                <p>{UnitConversion.convertTo(location.latest.temp, unit).toFixed(2)}°{unit[0]}</p>
                <p>*time submitted*</p>
            </div>
            <div>
                <h2>Last 24 hours</h2>
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
        display: 'inline-block',
        marginTop: '1em',
        padding:'1em',
        fontSize: '1em',
        textAlign: 'left',
        borderTop: 'solid',
        borderLeft: 'solid',
        borderRadius: '0.5em',
        borderTopWidth: 2,
        borderLeftWidth: 1,
        fontFamily: 'Arial',
        borderTopColor: 'purple' /*change according to weather blue - red ?*/

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