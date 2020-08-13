import axios from 'axios'

const instance = axios.create({
baseURL: "https://input-output-6b73f.firebaseio.com"
});

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance