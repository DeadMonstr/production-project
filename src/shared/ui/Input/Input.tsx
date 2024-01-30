import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss';
import React, {InputHTMLAttributes, memo, useEffect, useRef, useState} from "react";


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void,
    type?: string,
    placeholder?: string,
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {

    const {
        className,
        value,
        onChange,
        type,
        placeholder,
        autoFocus,
        ...otherComponents
    } = props

    const ref = useRef<HTMLInputElement>()
    const [isFocused,setIsFocused] = useState(false)
    const [caretPosition,setCaretPosition] = useState(0)
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(autoFocus);
            ref.current?.focus();
        }
    },[autoFocus])
    
    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }
    
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }
    
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (<div className={cls.placeholder}>
                {placeholder + ">"}
            </div>)}

            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherComponents}
                />
                {
                    isFocused && (
                        <span style={{left: `${caretPosition * 9}px`}} className={cls.caret} />
                    )
                }
            </div>


        </div>
    )
});
