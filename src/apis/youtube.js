import axios from 'axios';

const KEY = 'AIzaSyBO7fR1eMoCKczLYaJ_rCc_dKZDCKjOMPY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});

