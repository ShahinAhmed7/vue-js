<script setup>

  //  End
  import NavMenu from './components/NavMenu.vue'

</script>

<template>

  <NavMenu></NavMenu>

  <router-view/>
  <router-view name="postCategory"></router-view>


  <!-- End -->
</template>

<style scoped>

</style>
