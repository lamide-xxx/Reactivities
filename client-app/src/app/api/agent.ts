import axios, {AxiosResponse} from "axios";
import { Activity } from "../models/activity";

const sleep = (delay : number) =>{
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}
axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response =>{
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = (response : AxiosResponse) => response.data;

const requests = {
    get: (url : string) => axios.get(url).then(responseBody),
    post: (url : string, body : {}) => axios.post(url, body).then(responseBody),
    put: (url : string, body : {}) => axios.put(url, body).then(responseBody),
    del: (url : string) => axios.delete(url).then(responseBody),
}

const Activities = {
    list: () => requests.get('/activities'),
    details: (id: string) => requests.get(`/activities/${id}`),
    create: (activity: Activity) => requests.post('/activities', activity),
    update: (activity: Activity) => requests.put(`/activities/${activity.id}`, activity),
    delete: (id: string) => requests.del(`/activities/${id}`),
}

const agent = {
    Activities
}

export default agent;