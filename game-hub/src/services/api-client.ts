import axios from "axios"

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'db1313d1e3954217a13a4d3a4f45e840'
    }
})