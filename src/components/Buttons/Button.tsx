import React from 'react';
import styled from 'styled-components';
import { Button as MuiButton, Divider } from '@material-ui/core';
import { IButton } from './IButton';

const StyledButton = styled(MuiButton)`

`;

export const Button: React.FC<IButton> = ({ children }): JSX.Element => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    );
};