

import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        // key: 'AIzaSyCchD_bUjE4TGVLr6QcgHcOnT1SgrtPmX0',
        // key: 'AIzaSyBZtkt6uW3eR3XcUMaNdnAxYEsUFnahqrU',
        key: 'AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U',
    },
})

export default request