
import axios from 'axios';

const API_KEY = 'AIzaSyAuugzXXL2WdEgmjZqTOWqR7KLLImBTtYc';
const API_URL = 'https://www.googleapis.com/youtube/v3/';

export default class YoutubeAPI {

  static fetchMoviesBySerch(param) {
    return axios.get(`${API_URL}search?q=${param}&type=video&maxResults=25&part=snippet&key=${API_KEY}`)
  }

  static fetchMovieById(id) {
    return axios.get(`${API_URL}videos?id=${id}&part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}`)
  }

  static fetchChannelById(id){
    return axios.get(`${API_URL}channels/?id=${id}&part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}`)
  }

  static fetchMostPopular(page = '') {
    return axios.get(`${API_URL}videos/?regionCode=RU&chart=mostPopular&part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&pageToken=${page}&maxResults=15`)
  }
}