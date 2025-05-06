<template>
  <h1>This is the All Tasks Page</h1>

  <div>
    <TaskForm />
    <TaskList />
  </div>
</template>

<script>
import TaskForm from "../components/TaskForm.vue"
import TaskList from "../components/TaskList.vue"

export default {
  name: "AllTasks",

  components: {TaskForm, TaskList},
}
</script>

<style>

</style>