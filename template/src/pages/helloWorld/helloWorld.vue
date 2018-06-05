<template>
  <div>
    <div>hello world!</div>
    <div>vuex: \{{index.description}}</div>
    <div>i18n: \{{$t('test.title')}}</div>
    <div>config.json: \{{$root.config.name}}</div>
    <div>service: \{{$service.api.getList}}</div>
    <div>
      <img :src="logo" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    data:function () {
      return {
        logo:require('statics/images/logo.png')
      }
    },

    computed: {
      index(){
        return this.$state.index
      }
    },

    mounted(){
      console.log('vuex: '+ this.index.description)
      console.log('i18n: '+ this.$t('test.title'))
      console.log('config.json: '+ this.$root.config.name)
      console.log('service: '+ this.$service.api.getList)
    }
  }
</script>
