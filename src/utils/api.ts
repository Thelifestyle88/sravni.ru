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

export function getPhotos(id: string) {
    return fetch(`${baseUrl}/albums/${id}/photos`).then(checkResponse)
}

export function getUser(id: string) {
    return fetch(`${baseUrl}/users/${id}`).then(checkResponse)
}