import NavBar from './navbar';
import { render, screen, within } from '@testing-library/react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';


describe('NavBar Component', () => {
  const url=null;

     it('Getting URL', () => {
    expect(url).toBeInTheDocument();
    });

    it('Rendering Parent-Box', () => {
      render(
        <Box data-testid='parent-box'>    
        </Box>
      );
  
      expect(screen.getByTestId('parent-box')).toBeInTheDocument();
    });

    it('Rendering AppBar', () => {
        render(
            <AppBar data-testid='appbar' position="static" >
            </AppBar>
        );
    
        expect(screen.getByTestId('appbar')).toBeInTheDocument();
      });

      it('Rendering ChildBox', () => {
        render(
            <Box data-testid='child-box' component="img" src='../assets/imgs/rocsys-logo.svg' />          
        );
    
        expect(screen.getByTestId('child-box')).toBeInTheDocument();
      });

      it('Rendering ToolBar', () => {
        render(
            <Toolbar data-testid='toolbar'>
            </Toolbar>
        );
    
        expect(screen.getByTestId('toolbar')).toBeInTheDocument();
      });

      it('Rendering Button', () => {
        render(
            <Button data-testid='button-link' href={url + "/industries"} >
            </Button>
        );
    
        expect(screen.getByTestId('button-link')).toBeInTheDocument();
      });

      it('Rendering Typography', () => {
        render(
        <Typography data-testid='typography-link' >
          </Typography>
        );
    
        expect(screen.getByTestId('typography-link')).toBeInTheDocument();
      });


    });