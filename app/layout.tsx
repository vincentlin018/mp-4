"use client"
import styled from "styled-components";
import React from 'react';
import Header from './components/Header';
import { StyledEngineProvider } from '@mui/material/styles';

const StyledBody = styled.div`
  width: 80%;
  margin: auto;
  background-color: lightgoldenrodyellow;
  min-height: 100vh;
`;

const StyledChild = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export default function RootLayout(
    {children,}:
    Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en">
      <body>
      <StyledBody>
        <StyledEngineProvider injectFirst>
          <Header />
          <StyledChild>
            {children}
          </StyledChild>
        </StyledEngineProvider>
      </StyledBody>
      </body>
      </html>
  );
}
