<template>
  <div class="taskFormContainer">
    <form class="taskForm bg-primaryCard ">
    <label>Title</label>
    <input type="text" placeholder="Ex: Make Dinner" v-model="taskTitle">

    <label>Content </label>
    <input type="text" placeholder="Ex: Stuffed samon and alfredo pasta" v-model="taskContent">

    <div>
      <h1>Vars Values</h1>
      <p>Title: {{ taskTitle }}</p>
      <p>Content: {{ taskContent }}</p>
    </div>
  </form>
  </div>

  
</template>

<script>
export default {
  data() {
    return {
      taskTitle: "",
      taskContent: ""
    }
  }
}
</script>

<style>

</style>