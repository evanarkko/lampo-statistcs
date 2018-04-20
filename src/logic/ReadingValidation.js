import Unit from '../enums/Unit'
import UnitConversion from "./UnitConversion"

const validateAsIntOrFloat = (reading) => {
    let input = reading.replace(/\s+/g,"");

    if(isFinite(input) && input !== '') return true
    return false
}

const validateAsRealTemperature = (reading, unit) => {
    const kelvinUpper = 330.95
    const kelvinLower = 179.95

    switch (unit) {
        case Unit.celsius:
            return withinBounds(
                UnitConversion.convertTo(kelvinLower, unit),
                reading,
                UnitConversion.convertTo(kelvinUpper, unit))
        case Unit.fahrenheit:
            return withinBounds(
                UnitConversion.convertTo(kelvinLower, unit),
                reading,
                UnitConversion.convertTo(kelvinUpper, unit))
        case Unit.kelvin:
            return withinBounds(
                kelvinLower,
                reading,
                kelvinUpper)
        default:
            return null
    }
}

const withinBounds = (lower, value, upper) => {
    return lower < value && value < upper
}



export default {validateAsIntOrFloat, validateAsRealTemperature}