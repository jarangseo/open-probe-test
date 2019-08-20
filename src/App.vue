<template>
  <div class="container" id="app">
    <div class="wrap">
      <nav class="lnb">
        <left-menu></left-menu>
      </nav>
      <section class="content"></section>
    </div>
  </div>
</template>
<script>
import LeftMenu from './views/LeftMenu.vue'
import 'vue-awesome/icons'
import { queryEventBus } from '@/shared/events/QueryEventBus'

export default {
  components: {
    LeftMenu
  },
  methods: {

  },
  created() {
    queryEventBus.$on('addTab', (data) => {
      console.log(data)
    })
  }
}
</script>
<style lang="scss">
  @import "~@/assets/styles/settings.scss";
</style>
