import { baseUrl } from "./constant";


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
    return fetch(`${baseUrl}/users`).then(checkResponse)
}

export function getPhotos() {
    return fetch(`${baseUrl}/photos`).then(checkResponse)
}