<template>
  <div>
    <div>hello world!</div>
    <div>\{{index.birthday}}</div>
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
      ...Vuex.mapState({
        index: state => state.index
      }),
    }
  }
</script>
