import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/home';

jest.mock('@apollo/client', () => {
  return {
    ...jest.requireActual('@apollo/client'),
    ApolloClient: jest.fn(),
    ApolloLink: jest.fn(),
  };
});

describe('Apollo logic', () => {
  it('should send to another link', () => {
    const data= {  cache: new InMemoryCache(),
      link: new ApolloLink()};
    
    expect(new ApolloClient<unknown>(data)).toEqual(data)
  });

});

describe('Home Page', () => {
  const client = new ApolloClient({  cache: new InMemoryCache(),
    link: new ApolloLink()});

    it('Using ApolloProvider', () => {
      render(
        <ApolloProvider client={client}>
        </ApolloProvider>
      );
  
      expect(screen.getByTestId('apollo-provider')).toBeInTheDocument();
    });

    it('Using HomePage', () => {
      render(
        <Home data-testid='homepage' />
      );
  
      expect(screen.getByTestId('homepage')).toBeInTheDocument();
    });


  });