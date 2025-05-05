<template>
  <p>Acces to $route template ref with Vue Router</p>
  <p>Ex: current path: {{ $route.fullPath }} | this is the current full path</p>

  <nav>
    <RouterLink :to="{name:'AllTasks'}">All Tasks </RouterLink>
    <RouterLink :to="{name:'ActiveTasks'}">Active Tasks </RouterLink>
    
  </nav>

  <!-- Main section of the app  -->
  <main>
    <!-- to -> the route link or name defined in the index.js -->
    <RouterView />

  </main>
</template>

<script>
  export default {
    data() {
      return {

      }
    },


  }
</script>

<style scoped>
/* .logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
