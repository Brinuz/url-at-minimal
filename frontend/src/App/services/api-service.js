import Axios from 'axios';

class ApiService {
    static minify(url, expiration = 60) {
        return Axios.post('/minify', { url, expiration });
    }
}

export default ApiService;