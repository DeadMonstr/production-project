import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss';

import {Modal} from "shared/ui/Modal/Modal";
import {Suspense} from "react";
import {LoginFormAsync} from "../LoginForm/LoginForm.async";
import {Loader} from "shared/ui/Loader/Loader";

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        onClose,
        isOpen
    } = props

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync/>
            </Suspense>

        </Modal>
    )
}
