import Vue from 'vue'
import json from 'jsonify'

export default {
  loaderContarct (pid) {
    Vue.http.get('m/' + pid).then((response) => {
      let data = response.data
      const reg = new RegExp('　', 'g')
      data = data.replace(reg, ' ')
      const rawStr = '[' + data.split('}{').join('},{') + ']'
      const rawArr = json.parse(rawStr)
      const jData = rawArr.reduce((data, obj) => {
        return Object.keys(obj).reduce((d, key) => {
          d[key] = obj[key]
          return d
        }, data)
      }, {})
      const uniq = []
      jData['images'] = jData.imgs.match(/\/upload[\w\d\/\-\.]+[jpg|jpeg|png|gif|tif|tiff|webp]/g)
        .filter((item) => {
          const exist = uniq.indexOf(item) !== -1
          if (exist) {
            return false
          } else {
            uniq.push(item)
            return true
          }
        })
    })
  }
}
