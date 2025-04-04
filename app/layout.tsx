"use client";

import styled from "styled-components";
import React from 'react';
import Header from './components/Header';

// Styled component for the main body container
const StyledBody = styled.div`
  width: 80%;
  margin: auto;
  background-color: lightgoldenrodyellow;
  min-height: 100vh;
`;

// Styled component for the child container
const StyledChild = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

// RootLayout component to define the overall structure of the page
export default function RootLayout(
    {children}: Readonly<{ children: React.ReactNode; }> // Props include `children`, which represents nested components or content.
) {
  return (
    <html lang="en">
      <body>
      {/* Main body container */}
        <StyledBody>
        {/* Header component */}
          <Header />

        {/* Container for rendering child components */}
          <StyledChild>
            {children} {/* Dynamically renders child components passed as props */}
          </StyledChild>
        </StyledBody>
      </body>
    </html>
  );
}
