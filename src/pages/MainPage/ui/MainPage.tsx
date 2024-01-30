import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import {Counter} from "entities/Counter";
import {Input} from "shared/ui/Input/Input";


const MainPage = () => {
    const [value,setValue] = useState("")

    const { t } = useTranslation('main')

    return (
        <div>
            <Input value={value} onChange={setValue} placeholder={"Username"} />


            {/* <Counter/> */}
            {t('mainPage')}
        </div>
    )
}

export default MainPage
