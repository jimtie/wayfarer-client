import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"

export default class UserModel {
    static create = (data) => {
        let request = axios.post(`${REACT_APP_API_URL}/auth/register`, data)
        return request
    }

    static login(credentials) {
        let request = axios.post(`${REACT_APP_API_URL}/auth/login`, credentials, {
            withCredentials: true
        })
        return request
    }

    static logout() {
        let request = axios.delete(`${REACT_APP_API_URL}/auth/logout`, {
            withCredentials: true
        });
        return request
    }

    static update(data) {
      let request = axios.put(`${REACT_APP_API_URL}/users`, data, {
          withCredentials: true
      });
      return request;
    }

    // static verify() {
    //   let request = axios.get(`${REACT_APP_API_URL}/users/verify`, {
    //     withCredentials: true
    //   });
    //   return request;
    // }
}
