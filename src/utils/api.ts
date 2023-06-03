import { baseUrl, baseHeader } from "./constant";


function checkResponse(res: Response) {
    if (res.ok) {
        return res.json();
    }
    return res.json().then((err) => {
        err.statusCode = res.status;
        return Promise.reject(err);
    });
}

export function getUsers() {
    return fetch(`${baseUrl}`).then(checkResponse)
}