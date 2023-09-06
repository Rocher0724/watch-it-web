import axios from 'axios'

const instance = axios.create({
  // mallBaseURL: 'https://learn.codeit.kr/api/codeitmall',
  // watchItBaseURL: 'https://learn.codeit.kr/api/watchit'
  baseURL: 'https://learn.codeit.kr/api/watchit'
})

export default instance
