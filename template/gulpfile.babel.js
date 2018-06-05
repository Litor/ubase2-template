import path from 'path'
import ubase from 'ubase-vue'

ubase({
  dist: './www/',

  alias: {
    'components': path.resolve(__dirname, './src/components'),
    'statics': path.resolve(__dirname, './src/statics')
  },

  'proxy': [
    {
      source: 'wec-counselor-leave-apps',
      //target: 'http://172.16.6.150:8888',
      marathonID: 'wec-counselor-leave-apps-v0.0.98'
    }]
})
