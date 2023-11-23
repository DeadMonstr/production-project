import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        void i18n.changeLanguage(i18n.language === 'uz' ? 'en' : 'uz')
    }

    return (

        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('lang')}
            {t('lang111')}
        </Button>
    )
}
