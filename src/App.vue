<template>
  <p>Acces to $route template ref with Vue Router</p>
  <p>Ex: current path: {{ $route.fullPath }} | this is the current full path</p>

  <nav class="globalNavContainer">
    <RouterLink :to="{name:'AllTasks'}" class="globalNavRoute">All Tasks </RouterLink>
    <RouterLink :to="{name:'ActiveTasks'}" class="globalNavRoute">Active Tasks </RouterLink>
    
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

    mounted() {
      const tasks = [
        {title:"Make 1 Phone Case", content:"Upload 1 phone case to store front"},
        {title:"Make Youtube Video", content:"Edit and upload youtube video to channel"},
        {title:"Cook Dinner Tonight", content:"Take food out of fride and cook dinner"}
      ]

      localStorage.setItem('tasks', JSON.stringify(tasks))
      console.log("App has Mounted")
    }


  }
</script>

<style>
/* .logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
