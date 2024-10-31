import React from 'react'
import cls from './SearchInput.module.scss'
import search from '../../../assets/icons/search.svg'
import BlueButton from '../BlueButton/BlueButton'
type Props = {
    onChange?: (e: any) => void;
    onClick?: () => void;
    value?: string
    button_title?: string
}

const SearchInput = ({ onChange, onClick, value, button_title }: Props) => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.search_wrapper}>
                <img src={search} alt="search" />
            </div>
            <input value={value} autoComplete='url' onChange={onChange} placeholder='Введите URL' type="text" />
            {button_title &&
                <BlueButton onClick={onClick}>{button_title}</BlueButton>}
        </div>
    )
}

export default SearchInput