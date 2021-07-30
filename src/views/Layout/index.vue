<template>
  <div>
    <div class="app-wrapper">
      <Header />
      <Painter />
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import Painter from '../Painter.vue';
import Header from '../Header.vue'
export default {
  components: {
    Painter,
    Header
  },
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  // .header {
  //   height: 56px;
  // }
}
</style>