// need to import the correct function and dependecies for creatig a router

// installs (not auto included when using vite)

// createRouter -> function for creating router instance
// createWebHistory -> create a HTML5 web hisory object that inserts into the pipeline for navigation
  // and state management
import { createRouter, createWebHistory } from "vue-router";

// View (component) imports
import AllTasks from "../views/AllTasks.vue" 
import ActiveTasks from "../views/ActiveTasks.vue"

const routes = [
  // routes is a list of route objects contains
  // path, name, and component it maps to
  {
    path: '/',
    name: "AllTasks",
    component: AllTasks
  },
  {
    path: '/active',
    name: 'ActiveTasks',
    component: ActiveTasks
  },
]

const router = createRouter({
  // start routing form the correct base path where the app is deployed
  // In vite, import.meta.env is a special var that auto inject at build time
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
