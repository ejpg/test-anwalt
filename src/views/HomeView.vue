<template>
  <h1>My Dashboard</h1>
  <PostsSection />
  <TodosSection v-if="route.params.userId" />
</template>

<script setup lang="ts">
import PostsSection from '@/components/PostsSection.vue'
import TodosSection from '@/components/TodosSection.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
