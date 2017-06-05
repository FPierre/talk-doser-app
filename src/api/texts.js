import Vue from 'vue'

export default {
  getTexts (cb, errorCb) {
    Vue.http.get('http://localhost:3003').then(response => {
      // TODO: add status on back side?
      const pendingTexts = response.body.texts.map(t => {
        t.id = `${t.tag}-${t.text}`
        t.status = undefined

        return t
      })

      cb(pendingTexts)
    }, response => {
      errorCb()
    })
  }
}
