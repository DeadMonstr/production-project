import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    // parameters: {
    //     layout: 'centered'
    // },
    tags: ['autodocs'],
    args: {
        to: '/'
    }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY
    }
}

export const Secondary: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.SECONDARY
    }
}

export const Red: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.RED
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY
    }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.SECONDARY
    }
}

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RedDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.RED
    }
}

RedDark.decorators = [ThemeDecorator(Theme.DARK)]
