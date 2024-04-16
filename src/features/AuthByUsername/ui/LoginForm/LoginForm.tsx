import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {memo, useCallback} from "react";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../../model/service/loginByUsername/loginByUsername";
import {useDispatch, useSelector} from "react-redux";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string
}


export const LoginForm = memo((props: LoginFormProps) => {

    const {t} = useTranslation()
    const {
        className
    } = props


    const dispatch = useDispatch()
    
    
    const onChangeUsername = useCallback((value: string ) => {
        dispatch(loginActions.setUsername(value))
    },[dispatch])

    const onChangePassword= useCallback((value: string ) => {
        dispatch(loginActions.setPassword(value))
    },[dispatch])


    const {password,username,error,isLoading} = useSelector(getLoginState)

    const onLoginClick = useCallback(() => {

        dispatch(loginByUsername({username,password}))

    },[dispatch, password, username])


    return (
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
    )
})
