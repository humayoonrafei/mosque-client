import React from 'react';
import { SignInOrUpGroup } from '../../containers/SignInOrUpGroup/SignInOrUpGroup';
import { IAuthPage } from './IAuthPage';

export const AuthPage: React.FC<IAuthPage> = (): JSX.Element => {
    return (
        <div>
            <SignInOrUpGroup />
        </div>
    );
};