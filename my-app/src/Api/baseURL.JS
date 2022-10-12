import axios from "axios"



const my_baseurl = axios.create(
                               {  baseURL:"http://127.0.0.1:8000"  }
                               );

export default my_baseurl;