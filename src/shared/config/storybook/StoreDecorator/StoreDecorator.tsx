import { Story } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import {ThemeProvider} from "app/providers/ThemeProvider";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit";
import {loginReducer} from "features/AuthByUsername";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
}

// eslint-disable-next-line react/display-name,max-len
export const StoreDecorator = (state: DeepPartial<StateSchema>,asyncReducers?:DeepPartial<ReducersMapObject<StateSchema>>) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers,...asyncReducers}}>
            <StoryComponent />
        </StoreProvider>
    )
}
