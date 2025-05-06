<template>
  <div class="taskItemCard">
    <div class="flex flex-row justify-between">
      <button>Edit</button>
      <button>Delete</button>
    </div>
    <h1>{{title}}</h1>
    <p>{{content}}</p>
    
    <div>
      <label for="">Mark as Completed</label>
      <input type="checkbox">
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ['title', 'content'],

  data() {
    return {
      // title: "Make Phone Case",
      // content: "Publish 1 Phone Case to the store front",
    }
  }
}
</script>

<style>

</style>