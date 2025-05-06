<template>
  <div class="taskListTaskItemsContainer m-3 p-2">
    <TaskItem v-for="task in tasks" :key="task.title" :title=task.title :content="task.content" ></TaskItem>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue"

export default {
  name: "TaskList",

  components: {TaskItem},

  data() {
    return {
      tasks: []
    }
  },

  mounted() {
    const storedTasks = localStorage.getItem('tasks')

    // ? = ternary operator -> conditionaly assign vlaue to variable
    //  condition ? valIfTrue : valIfFalse
    // if storedTask exits and not empty ? parse stored task : else return empty array 
    this.tasks = storedTasks ? JSON.parse(storedTasks) : []
    
    console.log(this.tasks)
  }
}
</script>

<style lang="postcss">


</style>