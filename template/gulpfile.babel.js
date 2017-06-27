import path from 'path'
import ubase from 'ubase-vue'

ubase({
  dist:'./www/',

  alias: {
    'components': path.resolve(__dirname, './src/components'),
    'statics': path.resolve(__dirname, './src/statics')
  },

  port: '8082'
})
