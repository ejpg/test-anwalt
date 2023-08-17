import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios, { AxiosResponse } from 'axios'
import { Todo } from '@/models/Todo'

const API_URL = 'https://gorest.co.in/public/v2'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<AxiosResponse<Todo[]>>()

  const getTodos = () => {
    return axios
      .get(`${API_URL}/todos`)
      .then((response) => {
        todos.value = response
      })
      .catch(() => {
        alert("There was an error fetching the Todo's")
      })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changeTodoStatus = (id: number, status: boolean) => {
    //Here it should do a PUT to change the status
    return Promise.resolve()
  }

  return { changeTodoStatus, getTodos, todos }
})
