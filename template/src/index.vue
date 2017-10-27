<template>
    <div>
      <div>name:{{index.name}}</div>
      <img :src="logo" alt="">
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
