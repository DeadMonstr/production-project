import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

const meta = {
    title: 'shared/Button',
    component: Button,
    // parameters: {
    //     layout: 'centered'
    // },
    tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Hello'
    }
}

Primary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SecondaryLight: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR
    }
}
SecondaryLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SecondaryDark: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR
    }
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineLight: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE
    }
}

OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE
    }
}

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
