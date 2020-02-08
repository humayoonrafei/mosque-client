import React from 'react';
import { Button } from '../../components/Buttons/Button';

export const SignInOrUpGroup: React.FC = (): JSX.Element => {
    return (
        <div>
            <Button>
                Sign In
            </Button>
            <Button>
                Sign Up
            </Button>
        </div>
    );
};