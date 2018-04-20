import axios from 'axios'

const baseUrl = '/api/readings'


const saveOne = async (temperatureAsKelvin, locationName) => {
    const result = axios.post(baseUrl, {locationName: locationName, temperature: temperatureAsKelvin})
    return result
}

const getStructuredByName = async (locationName) => {
    const result = await axios.get(`${baseUrl}/structured/${locationName}`)
    return result.data
}

export default {saveOne, getStructuredByName}