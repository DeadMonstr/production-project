import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ErrorPage } from './ErrorPage'

const meta = {
    title: 'widget/ErrorPage',
    component: ErrorPage,
    // parameters: {
    //     layout: 'centered'
    // },
    tags: ['autodocs']
} satisfies Meta<typeof ErrorPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {}
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
