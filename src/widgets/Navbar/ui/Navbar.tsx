import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {useTranslation} from 'react-i18next'
import React, {useCallback, useState} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Modal} from "shared/ui/Modal/Modal";
import {LoginModal} from "features/AuthByUsername";

interface NavbarProps {
    className?: string,

}

export const Navbar = ({ className}: NavbarProps) => {
    const { t } = useTranslation()

    const [isAuthModal, setIsAuthModal] = useState(false);
    
    const onCloseModal = useCallback( () => {
        setIsAuthModal(false)
    },[])

    const onShowModal = useCallback( () => {
        setIsAuthModal( true)
    },[])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('login')}

            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>

        </div>
    )
}
