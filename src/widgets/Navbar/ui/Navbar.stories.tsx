import type {Meta, StoryObj} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider/lib/ThemeContext'
import {Navbar} from './Navbar'
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    // parameters: {
    //     layout: 'centered'
    // },
    tags: ['autodocs']
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {}
}

Light.decorators = [
    StoreDecorator({})
]


export const Dark: Story = {
    args: {}
}

Dark.decorators = [
    StoreDecorator({}), ThemeDecorator(Theme.DARK)
]
export const AuthNavbar: Story = {
    args: {}
}

AuthNavbar.decorators = [
    StoreDecorator({
        user: {
            authData: {username: "abs"}
        }
    }), ThemeDecorator(Theme.DARK)
]
