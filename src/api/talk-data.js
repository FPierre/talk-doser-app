import Vue from 'vue'

export default {
  getTalkData (cb, errorCb) {
    Vue.http.get('http://localhost:3003').then(response => cb(response.body), response => errorCb())
  }
}
