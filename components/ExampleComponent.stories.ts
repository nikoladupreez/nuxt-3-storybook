import type { Meta, StoryObj } from '@storybook/vue3'
import ExampleComponent from './ExampleComponent.vue'

const meta: Meta<typeof ExampleComponent> = {
  title: 'ExampleComponent',
  component: ExampleComponent,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ExampleComponent>

const defaultArgs = {
  title: 'Example Component'
}

export const Default: Story = {
  args: {
    ...defaultArgs
  }
}
