import type { Meta, StoryObj } from '@storybook/react'

import {Text,TextTheme} from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import {SecondaryDark} from "shared/ui/Button/Button.stories";

const meta = {
    title: 'shared/Text',
    component: Text,
    // parameters: {
    //     layout: 'centered'
    // },
    tags: ['autodocs']
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Hello',
        text: "Lorem iasd ada sd"
    }
}


export const Error: Story = {
    args: {
        title: 'Hello',
        text: "Lorem iasd ada sd",
        theme: TextTheme.ERROR
    }
}

export const onTitle: Story = {
    args: {
        title: 'Hello',
    }
}

export const onText: Story = {
    args: {
        text: 'Hello',
    }
}



export const PrimaryDark: Story = {
    args: {
        title: 'Hello',
        text: "Lorem iasd ada sd"
    }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]


export const OnTitleDark: Story = {
    args: {
        title: 'Hello',
    }
}


OnTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnTextDark: Story = {
    args: {
        text: 'Hello',
    }
}

OnTextDark.decorators = [ThemeDecorator(Theme.DARK)]
