import Axios from 'axios'
import toastr from 'toastr'

export const axios = Axios.create({
  baseURL: '/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
})

export const http = {
  getPromise (url, params = {}) {
    let conf = {
      params: params
    }
    return new Promise((resolve, reject) => {
      axios.get(url, conf)
        .then(res => {
          if(res.data.error) {
            toastr().error(res.data.error.message)
          }else {
            toastr().error('success')
            resolve(res)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}