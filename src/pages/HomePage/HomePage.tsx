import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Dispatch } from 'redux';
import { Redirect } from 'react-router-dom';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { AppState } from '../../store';
import {
    IHomePageOwnProps,
    IHomePageStateToProps,
    IHomePageDispatchProps
} from './IHomePage';
import { SERVER_URL } from '../../constants/constants';

const TestButton = styled(Button)`
  background-color: #6772e5;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`;

const HomePageComponent: React.FC<IHomePageOwnProps & IHomePageStateToProps & IHomePageDispatchProps> =
    ({ userState }): JSX.Element => {
        return (
            <div>
                <TestButton>Material UI Button</TestButton>
            </div>
        )
    };

const mapStateToProps: MapStateToProps<IHomePageStateToProps, IHomePageOwnProps, AppState> =
    (state: AppState, ownProps: IHomePageOwnProps): IHomePageStateToProps => ({
        userState: state.userState,
        ...ownProps
    });

const mapDispatchToProps: MapDispatchToProps<IHomePageDispatchProps, IHomePageOwnProps> =
    (dispatch: Dispatch): IHomePageDispatchProps => ({

    });

export const HomePage = connect<
    IHomePageStateToProps,
    IHomePageDispatchProps,
    IHomePageOwnProps,
    AppState
>(mapStateToProps, mapDispatchToProps)(HomePageComponent);
