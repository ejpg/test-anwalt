import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios, { AxiosResponse } from 'axios'
import { Post } from '@/models/Post'

const API_URL = 'https://gorest.co.in/public/v2'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<AxiosResponse<Post[]>>()

  const getPosts = () => {
    return axios
      .get(`${API_URL}/posts`)
      .then((response) => {
        posts.value = response
      })
      .catch(() => {
        alert('There was an error fetching the Posts')
      })
  }

  return { getPosts, posts }
})
