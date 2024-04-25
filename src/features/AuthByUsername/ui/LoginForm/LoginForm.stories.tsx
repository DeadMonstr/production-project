import type { Meta, StoryObj } from '@storybook/react'

import LoginForm from "./LoginForm";

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


