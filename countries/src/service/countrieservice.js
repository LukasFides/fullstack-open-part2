import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1/all'

const getAll = () => {
    const response = axios.get(baseUrl)

    return response.then(response => {
        return response.data
    })
}

const create = (newObject) => {
    const response = axios.post(baseUrl, newObject)

    return response.then(response => {
        return response.data
    })
}

const update = (id, newObject) => {
    const response = axios.put(`${baseUrl}/${id}`, newObject)

    return response.then(response => {
        return response.data
    })
}

const destroy = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
  getAll,
  create,
  update,
  destroy
}