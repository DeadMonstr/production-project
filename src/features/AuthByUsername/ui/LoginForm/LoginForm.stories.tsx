import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { LoginForm } from './LoginForm'
import {Dark} from "widgets/Navbar/ui/Navbar.stories";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    // parameters: {
    //     backgroundC: 'centered'
    // },
    tags: ['autodocs']
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {}
}


Light.decorators = [StoreDecorator({
    loginForm: {username: "123", password: "123"}
})]


