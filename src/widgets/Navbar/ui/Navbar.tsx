import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={'/'}
                    className={cls.mainLink}
                >
                    {t('mainPage')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={'/about'}
                >
                    {t('aboutPage')}
                </AppLink>

            </div>

        </div>
    )
}
