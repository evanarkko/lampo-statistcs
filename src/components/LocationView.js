import React from 'react'

const LocationView = ({location, tempUnit}) => {
    return(
        <div style={styleSheet.view}>
            <div style={styleSheet.title}>{location.name}</div>
            <div>*current local time*</div>
            <div>
                <p>
                    <b>lat</b>: {location.lat}, <b>long</b>: {location.long}
                </p>
            </div>
            <div>latest temperature reading: {location.latest_temperature}</div>
            <div>
                <h1>Last 24 hours</h1>
                <p>high: {location.recent_high}</p>
                <p>low: {location.recent_low}</p>
                <p>average: {location.recent_avg}</p>
            </div>

        </div>
    )
}

const styleSheet={
    view: {
        marginBottom: '0.5em',
        marginTop: '1em',
        padding:'1em',
        fontSize: '1.5em',
        fontWeight: '70',
        textAlign: 'left',
        borderTop: 'solid',
        borderLeft: 'solid',
        borderRadius: 5,
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