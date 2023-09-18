import React, { useRef, useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

type propsType = {
    placeholder: string;
    type: string;
    children: JSX.Element;
    isDisabled: boolean;
    value: string;
};

const Input: React.FC<propsType> = ({ placeholder = '', type = 'text', children, isDisabled = false, value = '' }) => {
    const inputRef = useRef(null);

    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
        if (inputRef.current) {
            if (inputRef.current.type === 'text') {
                inputRef.current.type = 'password';
            } else {
                inputRef.current.type = 'text';
            }
        }
    };

    return (
        <div className={`w-full relative group `}>
            {children && (
                <div className="text-gray-400 group-focus-within:text-[#E21221] absolute top-1/2 right-4 -translate-y-1/2">
                    {children}
                </div>
            )}

            <input
                ref={inputRef}
                placeholder={placeholder}
                type={type}
                className={`w-full duration-200 group-focus-within:bg-red-50
                border-[1.5px] group-focus-within:border-[#E21221] rounded-lg pl-6 py-4 bg-gray-100 outline-none
                ${children ? 'pr-12' : 'pr-6'} `}
                value={value}
                disabled={isDisabled}
            />
            {type === 'password' && (
                <button onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? (
                        <AiFillEyeInvisible
                            size={24}
                            className="text-gray-400 group-focus-within:text-[#E21221] absolute top-1/2 left-4 -translate-y-1/2"
                        />
                    ) : (
                        <AiFillEye
                            size={24}
                            className="text-gray-400 group-focus-within:text-[#E21221] absolute top-1/2 left-4 -translate-y-1/2"
                        />
                    )}
                </button>
            )}
        </div>
    );
};

export default Input;
