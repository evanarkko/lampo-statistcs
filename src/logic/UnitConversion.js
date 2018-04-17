import Unit from '../enums/Unit'

/**
 * App's logic is Kelvin-based
 */


const convertFrom = (value, unit) => {
    switch (unit) {
        case Unit.celsius:
            return value + 273.15
        case Unit.fahrenheit:
            return (value + 459.67) / (9.0/5.0)
        case Unit.kelvin:
            return value
        default:
            return null
    }
}

const convertTo = (value, unit) => {
    switch (unit) {
        case Unit.celsius:
            return value - 273.15
        case Unit.fahrenheit:
            return value * (9.0/5.0) - 459.67
        case Unit.kelvin:
            return value
        default:
            return null
    }
}

export default {convertFrom, convertTo}

