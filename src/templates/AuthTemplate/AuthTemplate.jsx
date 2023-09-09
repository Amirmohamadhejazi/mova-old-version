import React, { useState } from 'react';
import { ChooseInterest, OptionAuth, SignUp, Login, BeforeAuth, ForgerPassword, GetCode, ResetPassword } from '@components/index';
const AuthTemplate = () => {
    const [position, setPosition] = useState('beforeAuth');
    switch (position) {
        case 'beforeAuth': {
            return <BeforeAuth setPosition={setPosition} />;
        }
        case 'optionAuth': {
            return <OptionAuth setPosition={setPosition} />;
        }
        case 'login': {
            return <Login setPosition={setPosition} />;
        }
        case 'forgetPassword': {
            return <ForgerPassword setPosition={setPosition} />;
        }
        case 'forgetPasswordGetCode': {
            return <GetCode setPosition={setPosition} />;
        }
        case 'resetPassword': {
            return <ResetPassword setPosition={setPosition} />;
        }
        case 'signUp': {
            return <SignUp setPosition={setPosition} />;
        }
        case 'chooseInterest': {
            return <ChooseInterest setPosition={setPosition} />;
        }
    }
};

export default AuthTemplate;
