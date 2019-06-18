import axios from 'axios'

const customerApi = axios.create({
    baseURL: 'http://locahost:4000/customers'
})

export default customerApi