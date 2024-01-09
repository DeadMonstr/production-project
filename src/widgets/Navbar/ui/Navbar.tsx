import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {useTranslation} from 'react-i18next'
import React, {useCallback, useState} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Modal} from "shared/ui/Modal/Modal";

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    const [isAuthModal, setIsAuthModal] = useState(false);
    
    const onToggleModal = useCallback( () => {
        setIsAuthModal(prev => !prev)
    },[])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('login')}

            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t("login")}
            </Modal>

        </div>
    )
}
