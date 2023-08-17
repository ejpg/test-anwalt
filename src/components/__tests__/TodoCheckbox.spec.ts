import { expect, test, describe } from 'vitest'
import { fireEvent, render } from '@testing-library/vue'
import Component from '@/components/TodoCheckbox.vue'
import '@testing-library/jest-dom'

describe('TodoCheckbox', () => {
  test('emits value on click', async () => {
    const { emitted, getByRole } = render(Component)
    const button = getByRole('checkbox')

    await fireEvent.click(button)

    expect(emitted()['update:modelValue']).toHaveLength(1)
  })
})
