import axios from 'axios'
const baseUrl = 'http://localhost:3003/persons'

const getAll = async () => {
    const response = axios.get(baseUrl)

    const response_1 = await response
    return response_1.data
}

const create = async (newObject) => {
    const response = axios.post(baseUrl, newObject)

    const response_1 = await response
    return response_1.data
}

const update = async (id, newObject) => {
    const response = axios.put(`${baseUrl}/${id}`, newObject)

    const response_1 = await response
    return response_1.data
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deletePerson }