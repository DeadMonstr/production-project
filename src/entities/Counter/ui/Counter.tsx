import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/counterSlice";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";
import {useTranslation} from "react-i18next";

export const Counter = () => {

    const counterValue = useSelector(getCounterValue)
    const dispatch = useDispatch()
    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    const {t} = useTranslation()


    return (
        <div>
            <h1 data-testid="value-title"> {counterValue}</h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('inc')}
            </Button>
            <Button
                data-testid="decrement-btn"

                onClick={decrement}
            >
                {t("dec")}
            </Button>
        </div>
    )
}
