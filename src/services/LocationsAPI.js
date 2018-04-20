import axios from 'axios'

const baseUrl = '/api/locations'

const getAll = async () => {
    const result = await axios.get(baseUrl)
    if(result.status === 200) console.log('OK')
    return result.data
}

const saveOne = (name, lat, long) => {
    axios.post(baseUrl, {name: name, lat: lat, long: long})
}

export default {getAll, saveOne}