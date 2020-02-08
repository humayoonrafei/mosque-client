import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SERVER_URL } from './constants/constants';

// TESTING
// import { gql } from 'apollo-boost';

export const apolloClient = new ApolloClient({
    uri: `${SERVER_URL}/graphql`
});

// TESTING
// apolloClient.query({
//     query: gql`
//         {
//             employee(id: 1002) {
//                 firstname
//             }
//         }
//     `
// })
//     .then(result => console.log(result))
//     .catch(err => console.error(err));

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root'));

serviceWorker.unregister();
