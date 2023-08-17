import { expect, test, describe, vi } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { createTestingPinia } from '@pinia/testing'
import Component from '@/components/TodosSection.vue'
import todosData from '../../../api/todos.json'
import { useRoute } from 'vue-router'

vi.mock('vue-router')

describe('TodosSection', () => {
  test("Doesn't render title if theres no posts for the user", async () => {
    ;(useRoute as jest.Mock).mockReturnValue({
      params: {
        userId: 'xxx',
      },
    })

    const { queryByText } = render(Component, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              todos: { todos: { data: todosData } },
            },
            stubActions: false,
          }),
        ],
      },
    })

    expect(queryByText("My Todo's")).not.toBeInTheDocument()
  })

  test('Renders title if theres posts for the user', async () => {
    ;(useRoute as jest.Mock).mockReturnValue({
      params: {
        userId: todosData[0].user_id.toString(),
      },
    })

    const { getByText } = render(Component, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              todos: { todos: { data: todosData } },
            },
            stubActions: false,
          }),
        ],
      },
    })

    expect(getByText("My Todo's")).toBeInTheDocument()
  })

  test('Renders user todos', async () => {
    const [firstTodo] = todosData

    ;(useRoute as jest.Mock).mockReturnValue({
      params: {
        userId: firstTodo.user_id.toString(),
      },
    })

    const { getByText } = render(Component, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              todos: { todos: { data: todosData } },
            },
            stubActions: false,
          }),
        ],
      },
    })

    expect(getByText(firstTodo.title)).toBeInTheDocument()
  })
})
