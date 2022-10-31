/* eslint-disable jest/no-identical-title */
import Footer from './footer';
import { render, screen, within } from '@testing-library/react';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';

describe('Footer Component', () => {
    it('Rendering Typography', () => {
      render(
        <Typography data-testid="typography-link" variant="h6" component="div" style={{marginLeft:"20px", color:"#3C9EFF", textDecoration:"underline"}}>
                Link
        </Typography>
      );
  
      expect(screen.getByTestId('typography-link')).toBeInTheDocument();
    });

    it('Rendering Container', () => {
        render(
        <Container data-testid='container'>
          </Container>            
        );
    
        expect(screen.getByTestId('container')).toBeInTheDocument();
      });

    });