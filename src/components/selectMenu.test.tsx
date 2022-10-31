/* eslint-disable testing-library/no-render-in-setup */
import SelectMenu from './selectMenu';
import { render, screen, within } from '@testing-library/react';
import { Box, Button, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Container } from '@mui/system';
import {useQuery} from '@apollo/client';
import {useEffect, useState} from "react";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
  }));

  jest.mock('@apollo/client', () => ({
    ...jest.requireActual('@apollo/client'),
    useQuery: jest.fn(),
  }));

describe('Test receiving the data', () => {

    beforeEach(() => {
       render(<SelectMenu />)
    })

    it('Receive data', ()   => {
        useQuery()
    });
})

describe('Visual of SelectMenu', () => {
    it('Rendering container', () => {
      render(
        <Container data-testid="container"></Container>
      );
  
      expect(screen.getByTestId('container')).toBeInTheDocument();
    });

    it('Rendering Box', () => {
        render(
       <Box data-testid="box"></Box>           
        );
    
        expect(screen.getByTestId('box')).toBeInTheDocument();
      });

      it('Rendering Table-Container', () => {
        render(
            <TableContainer data-testid="table-container"></TableContainer>            
        );
    
        expect(screen.getByTestId('table-container')).toBeInTheDocument();
      });

      it('Rendering Table', () => {
        render(
            <Table data-testid="table" aria-label="a dense table"></Table>          
        );
    
        expect(screen.getByTestId('table')).toBeInTheDocument();
      });

      it('Rendering Table-Head', () => {
        render(
            <TableHead data-testid="table-head"></TableHead>           
        );
    
        expect(screen.getByTestId('table-head')).toBeInTheDocument();
      });

      it('Rendering Table-Row', () => {
        render(
            <TableRow data-testid="table-row"></TableRow>        
        );
    
        expect(screen.getByTestId('table-row')).toBeInTheDocument();
      });

      it('Rendering Table-Cell', () => {
        render(
            <TableCell data-testid="table-cell">
            </TableCell>          
        );
    
        expect(screen.getByTestId('table-cell')).toBeInTheDocument();
      });

      it('Rendering Table-Button', () => {
        render(
            <Button data-testid="table-button"></Button>           
        );
    
        expect(screen.getByTestId('table-button')).toBeInTheDocument();
      });

      it('Rendering Table-Typography', () => {
        render(
            <Typography data-testid="typography"></Typography>           
        );
    
        expect(screen.getByTestId('table-typography')).toBeInTheDocument();
      });

      it('Rendering Typography', () => {
        render(
            <Typography data-testid="typography"></Typography>         
        );
    
        expect(screen.getByTestId('typography')).toBeInTheDocument();
      });

    });