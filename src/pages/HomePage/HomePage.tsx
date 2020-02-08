import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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

const HomeContainer = styled.div`
    display: grid;
    grid-template-rows: [logo-start] 22rem
                        [logo-end form-start] 24rem 
                        [form-end forgot-btn-start] 4rem
                        [forgot-btn-end];
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center; 
`;

const HomePageComponent: React.FC<IHomePageOwnProps & IHomePageStateToProps & IHomePageDispatchProps> =
    ({ userState }): JSX.Element => {
        return (
            <div>
                This is the home page.
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
