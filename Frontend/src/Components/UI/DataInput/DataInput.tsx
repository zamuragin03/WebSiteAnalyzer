import { FC, HTMLAttributes, HTMLInputTypeAttribute, memo } from 'react'
import cls from './DataInput.module.scss'

interface IDataProps {
    isDisabled?: boolean,
    clss?: string[],
    type?: HTMLInputTypeAttribute,
    placeholder?: string,
    onChange?: (e: any) => void;
    value?: string,
    defaultValue?: string | number | null,
    inputmode?: HTMLAttributes<HTMLLIElement>['inputMode']
    autocomplete?: "on" | "off" | "name" | "honorific-prefix" | "given-name" | "additional-name" | "family-name" | "honorific-suffix" | "nickname" | "email" | "username" | "new-password" | "current-password" | "one-time-code" | "organization-title" | "organization" | "street-address" | "address-line1" | "address-line2" | "address-line3" | "address-level4" | "address-level3" | "address-level2" | "address-level1" | "country" | "country-name" | "postal-code" | "cc-name" | "cc-given-name" | "cc-additional-name" | "cc-family-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc" | "cc-type" | "transaction-currency" | "transaction-amount" | "language" | "bday" | "bday-day" | "bday-month" | "bday-year" | "sex" | "tel" | "tel-country-code" | "tel-national" | "tel-area-code" | "tel-local" | "tel-extension" | "impp" | "url" | "photo"
}

const DataInput: FC<IDataProps> = memo(({ isDisabled = false, autocomplete, inputmode, clss = [], type, placeholder, onChange, defaultValue, value, }: IDataProps) => {
    return (
        <input
            autoComplete={autocomplete}
            inputMode={inputmode}
            type={type}
            placeholder={placeholder}
            onWheel={(e) => (e.target as HTMLInputElement).blur()}
            onChange={onChange}
            disabled={isDisabled}
            value={value}
            className={[cls.MyInput, ...clss].join(' ')}
            defaultValue={defaultValue ? defaultValue : ''}
        >
        </input >
    )
})

export default DataInput