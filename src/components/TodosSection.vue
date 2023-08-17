<template>
  {{ showTodos }}
  <div v-if="showTodos" class="todos">
    <h3 class="todos__title">My Todo's</h3>
    <div class="todos__wrapper">
      <div v-for="(todo, index) in userTodos" :key="index" class="todo">
        <TodoCheckbox
          :checked="isTodoCompleted(todo.status)"
          @input="toggleTodo($event, todo.id)"
        />
        <h3 class="todo__title">{{ todo.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TodoCheckbox from '@/components/TodoCheckbox.vue'
import { useTodosStore } from '@/stores/todos'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const todosStore = useTodosStore()

onMounted(() => {
  todosStore.getTodos()
})

const showTodos = computed(
  () =>
    !!(
      todosStore.todos &&
      todosStore.todos.data.find((todo) => todo.user_id.toString() === route.params.userId)
    )
)

const userTodos = computed(() => {
  if (todosStore.todos) {
    return todosStore.todos.data.filter((todo) => todo.user_id.toString() === route.params.userId)
  } else {
    return []
  }
})

const toggleTodo = (event: Event, id: number) => {
  todosStore.changeTodoStatus(id, (event.target as HTMLInputElement).checked)
}

const isTodoCompleted = (status: string) => {
  return status === 'completed'
}
</script>

<style lang="scss">
.todos {
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

.todo {
  padding: 2rem;
  border: solid 3px grey;
  border-radius: 10%;
  width: 246px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  &__title {
    font-weight: normal;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
