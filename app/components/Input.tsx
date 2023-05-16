'use client'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

interface InputProps {
    label: string
    id: string
    type?: string
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
    disabled?: boolean
    placeholder?: string
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled,
    placeholder,
}) => {
    return (
        <div>
            {/* <label
                htmlFor={id}
                className="block text-sm font-medium leading-6 text-darkBlue"
            >
                {label}
            </label> */}
            <div>
                <input
                    type={type}
                    id={id}
                    autoComplete={id}
                    disabled={disabled}
                    placeholder={placeholder}
                    {...register(id, { required })}
                    className={clsx(
                        `form-input
                        pl-3
                        block
                        w-full
                        rounded-sm
                        border-0
                        py-5
                        bg-Input_bg
                        text-darkBlue
                        shadow-sm
                        ring-1
                        ring-inset
                        ring-lightBlue
                        placeholder:text-gray-500
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-darkBlue
                        sm:text-sm
                        sm:leading-6
                        `,
                        errors[id] && 'focus:ring-rose-500',
                        disabled && 'opacity-50 cursor-not-allowed'
                    )}
                />
            </div>
        </div>
    )
}

export default Input
