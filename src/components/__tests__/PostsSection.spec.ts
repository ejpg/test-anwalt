import { expect, test, describe } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { createTestingPinia } from '@pinia/testing'
import Component from '@/components/PostsSection.vue'
import postsData from '../../../api/posts.json'

describe('PostsSection', () => {
  test('Renders posts', async () => {
    const { getByText } = render(Component, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              posts: { posts: { data: postsData } },
            },
            stubActions: false,
          }),
        ],
      },
    })

    for (const post of postsData) {
      expect(getByText(post.title)).toBeInTheDocument()
      expect(getByText(post.body)).toBeInTheDocument()
    }
  })
})
