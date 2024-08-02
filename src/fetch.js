// import axios from 'axios'

// const apiClient = axios.create({
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   baseURL: 'http://localhost:8080/',
// })

// export const GET = (path) => {
//   return apiClient
//     .get(`${path}`)
//     .then((res) => {
//       return res.data
//     })
//     .catch((err) => {
//       console.log('There was an error', err)
//     })
// }

// apiClient.interceptors.request.use(
//   (config) => {
//     const user = JSON.parse(sessionStorage.getItem('userDetails'))
//     console.log(`User -----> ${user?.email}`)
//     config.headers['Authorization'] = `Basic ${window.btoa(
//       user.email + ':' + user.password
//     )}`

//     let xsrf = sessionStorage.getItem('XSRF-TOKEN')
//     if (xsrf) {
//       config.headers['X-XSRF-TOKEN'] = xsrf
//     }

//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )
