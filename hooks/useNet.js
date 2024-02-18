import axios from 'axios'

export const useNetGet = (url) => {
    var respones = axios.get(url) .then(
        data = respones.data
    );
    return data;
}

export const useNetPost = (url, data) => {
    var response = axios.post(url, {...data}).then(
        thisData = respones.data
    )
    return thisData;
}