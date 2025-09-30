import axios from 'axios'
import { createApp } from 'vue'

export default {
  install(app) {
    app.config.globalProperties.$axios = axios
  },
}
