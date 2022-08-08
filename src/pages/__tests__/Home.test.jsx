import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

const renderPage = () => {
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
};

describe('Home page', () => {
  it('should render the home page', () => {
    renderPage();
    expect(screen.getByText("Hi, I'm Adele...")).toBeInTheDocument()
  })
})