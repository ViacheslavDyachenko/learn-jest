import axios from 'axios';

class Api {
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }
    private baseUrl: string = '';

    apiRequest(method: string, endpoint: string, data: Record<string, any> | null, params: Record<string, any> | null): Record<string, any> | null | unknown {
        return axios({
            method,
            baseURL: this.baseUrl,
            url: endpoint,
            params,
            data
        }).then(res => res.data)
    }
}

export default Api;