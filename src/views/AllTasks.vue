<template>
  <div>
    <TaskForm />
  </div>

  <div >
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