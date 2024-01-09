import type { Meta, StoryObj } from '@storybook/react'

import {Modal} from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

const meta = {
    title: 'shared/Modal',
    component: Modal,
    // parameters: {
    //     layout: 'centered'
    // },
    tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'lorem aasd aa sdasda er we as da sd asdasdassdasd asd ad asda sd'
    }
}

// Modal.decorators = [ThemeDecorator(Theme.LIGHT)]