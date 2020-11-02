import axios from 'axios'

const instance = axios.create({

    // Test Emulator 
    // http://localhost:5001/clone-efd95/us-central1/api/
    baseURL: 'https://us-central1-clone-efd95.cloudfunctions.net/api'
});

export default instance;