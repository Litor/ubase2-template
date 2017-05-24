<template>
    <div>
      name:{{index.name}}
    </div>
</template>
<script>
    export default {
      computed: {
        ...Vuex.mapState({
          index: state => state.index
        }),
      }
    }
</script>
