import type { Meta, StoryObj } from '@storybook/react'

import {Button, ButtonSize, ButtonTheme} from './Button'
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
        theme: ButtonTheme.CLEAR
    }
}
SecondaryLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SecondaryDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.CLEAR
    }
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineLight: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE
    }
}

OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE
    }
}

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]


export const Background: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND
    }
}




export const BackgroundInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
}

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true
    }
}


export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M
    }
}

SquareSizeM.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L
    }
}

SquareSizeL.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareSizeXl: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL
    }
}

SquareSizeXl.decorators = [ThemeDecorator(Theme.DARK)]

// BackgroundInverted.decorators = [ThemeDecorator(Theme.LIGHT)]