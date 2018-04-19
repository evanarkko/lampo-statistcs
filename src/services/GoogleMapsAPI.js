import axios from 'axios'

const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?'
const googleApiKey = 'AIzaSyBP1yTlTWa3ouuMq79zEull6RqJdK2AwO0'

const getLocationByLatLong = async (lat , long) => {
    const result = await axios.get(`${baseUrl}latlng=${lat},${long}&key=${googleApiKey}`)
    if(result.data.status !== 'OK') return null
    return result.data.results[0].formatted_address
}

const getLatLongByLocation = async (address) => {
    const result = await axios.get(`${baseUrl}address=${address}&key=${googleApiKey}`)
    if(result.data.status !== 'OK') return null
    return result.data.results[0].geometry.location
}

export default {getLocationByLatLong, getLatLongByLocation}

