import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/locations'

const getAll = async () => {
    const result = await axios.get(baseUrl)
    if(result.status === 200) console.log('OK')
    return result.data
}

export default {getAll}