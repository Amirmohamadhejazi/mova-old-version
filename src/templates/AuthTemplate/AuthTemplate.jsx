import React, { useState } from 'react';
import BeforeAuth from '@components/pages/auth/BeforeAuth/BeforeAuth';
import Login from '@components/pages/auth/Login/Login';
import SignUp from '@components/pages/auth/SignUp/SignUp';
import OptionAuth from '@components/pages/auth/OptionAuth/OptionAuth';
const AuthTemplate = () => {
    const [position, setPosition] = useState('beforeAuth');
    switch (position) {
        case 'beforeAuth':
            return <BeforeAuth setPosition={setPosition} />;
        case 'optionAuth':
            return <OptionAuth setPosition={setPosition} />;
        case 'login':
            return <Login setPosition={setPosition} />;
        case 'signUp':
            return <SignUp setPosition={setPosition} />;
    }
};

export default AuthTemplate;
