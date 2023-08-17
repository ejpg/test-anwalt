<template>
  <div v-if="showPosts" class="posts">
    <h3 class="posts__title">Latest Posts</h3>
    <div class="posts__wrapper">
      <div v-for="(post, index) in postsStore.posts!.data" :key="index" class="post">
        <h3 class="post__title">{{ post.title }}</h3>
        <p class="post__description">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePostsStore } from '@/stores/posts'
import { computed, onMounted } from 'vue'

const postsStore = usePostsStore()

onMounted(() => {
  postsStore.getPosts()
})

const showPosts = computed(() => !!postsStore.posts)
</script>

<style lang="scss">
.posts {
  &__title {
    text-align: left;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  &__wrapper {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
}

.post {
  padding: 2rem;
  border: solid 3px grey;
  border-radius: 10%;
  width: 412px;

  @media (max-width: 768px) {
    width: 100%;
  }

  &__title,
  &__description {
    font-weight: normal;
  }
}
</style>
