import React from 'react'

const Intro = ({locations, unit, toggleUnit}) => {
    const locationNames = locations.map(loc => loc.name)
    const locString = locationNames
        .slice(0, locationNames.length-2)
        .map(loc => loc + ', ')
        .concat(locationNames[locationNames.length-2], ' or ', locationNames[locationNames.length-1])
    const temperatureToggleButton =
        <button onClick={toggleUnit} className="temperatureToggle" title="change">{unit}</button>

    return(
        <div className="App-intro">
            <p>
                If you currently reside in either {locString}, please enter the current temperature in&nbsp;
                {temperatureToggleButton} for <i>strictly scientific</i> purposes.
            </p>
        </div>
    )
}


export default Intro