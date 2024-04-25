import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {memo, useCallback} from "react";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {useDispatch, useSelector} from "react-redux";
import {Text, TextTheme} from "shared/ui/Text/Text";


import {loginByUsername} from "../../model/service/loginByUsername/loginByUsername";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
    className?: string
}


const initialReducers: ReducerList = {
    loginForm: loginReducer
}

const LoginForm = memo((props: LoginFormProps) => {

    const {t} = useTranslation()
    const {
        className
    } = props


    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)



    const dispatch = useDispatch()
    
    
    const onChangeUsername = useCallback((value: string ) => {
        dispatch(loginActions.setUsername(value))
    },[dispatch])

    const onChangePassword= useCallback((value: string ) => {
        dispatch(loginActions.setPassword(value))
    },[dispatch])



    const onLoginClick = useCallback(() => {

        dispatch(loginByUsername({username,password}))

    },[dispatch, password, username])


    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t("Form Authorization")}/>
                {error && <Text text={t("Siz notog'ri parol yoki username terdingiz")} theme={TextTheme.ERROR} />}
                <Input
                    autoFocus={true}
                    placeholder={t('usernameEnter')}
                    type="text"
                    className={cls.input}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    onChange={onChangePassword}
                    placeholder={t('passwordEnter')}
                    type="text" className={cls.input}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t("Login")}
                </Button>
            </div>
        </DynamicModuleLoader>

    )
})


export default LoginForm