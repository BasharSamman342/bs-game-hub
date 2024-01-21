import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: '771bd62880db4ed7bb88106b4dc29be0'
    }
})